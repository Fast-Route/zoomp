import Stripe from 'stripe';
import prisma from './prisma';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');

export const getStripeCustomerEmail = async (email: string) => {
  const customers = await stripe.customers.list({
    email,
  });

  return customers.data[0];
}

export const createStripeCustomer = async (data: any) => {
  try {
    let customer = await getStripeCustomerEmail(data.email);

    if (customer) return customer;

    return stripe.customers.create({
      email: data.email,
      name: data.name,
    });

  } catch (error: any) {
    throw new Error(error);
  }
};

export const handleProcessWebhookCheckout = async (event: { object: Stripe.Checkout.Session }) => {
  const clientReferenceId = event.object.client_reference_id;
  const idSubscription = event.object.subscription as string;
  const idCustomer = event.object.customer as string;
  const checkoutStatus = event.object.status;
  const plan = event.object.metadata?.plan;

  if (checkoutStatus !== "complete") return;

  if (!clientReferenceId || (!idSubscription && plan !== 'ONE') || !idCustomer) {
    throw new Error("Os campos client_reference_id, subscription e customer são obrigatórios");
  }
  

  const user = await prisma.users.findUnique({
    where: {
      id: clientReferenceId,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      idCustomer,
      plan
    },
  });
};

export const handleProcessWebhookUpdateSubscription = async (event: { object: Stripe.Subscription }) => {
  const data = event.object.items.data[0] as any;
  const status = event.object.status;
  const idSubscription = event.object.id as string;
  const idCustomer = event.object.customer as string;
  const periodEnd = new Date(data.current_period_end * 1000).toLocaleDateString('en-US');

  console.log("periodEnd", periodEnd);
  

  const user = await prisma.users.findFirst({
    where: {
      idCustomer,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      idCustomer,
      idSubscription,
      status,
      periodEnd,
    },
  });
};

export const handleProcessWebhookCancelSubscription = async (event: { object: Stripe.SubscriptionSchedule }) => {
  const idCustomer = event.object.customer as string;

  const user = await prisma.users.findFirst({
    where: {
      idCustomer,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      idCustomer,
      idSubscription: null,
      status: "inactive",
      periodEnd: null,
    }
  });
    
}

export const handleProcessWebhookUpdateCharged = async (event: { object: Stripe.Charge }) => {
  const status = event.object.status === "succeeded" ? "active" : "inactive";
  const idSubscription = event.object.id as string;
  const idCustomer = event.object.customer as string;
  const periodEnd = new Date((event.object.created + 7 * 24 * 60 * 60) * 1000).toLocaleDateString('en-US');

  const user = await prisma.users.findFirst({
    where: {
      idCustomer,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      idCustomer,
      idSubscription,
      status,
      periodEnd,
    },
  });
};