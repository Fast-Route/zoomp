import { createStripeCustomer, stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const { email, id, plan } = await req.json();
    let customer = await createStripeCustomer({ email });

    if (plan === "Z2") {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        client_reference_id: id,
        customer: customer.id,
        line_items: [{
            price: process.env.STRIPE_PRICE_ID_Z2 as string,
            quantity: 1,
        }],
        metadata: {
          plan,
        },
        success_url: `${process.env.NEXT_PUBLIC_URL}/subscription-success`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/menu`,
      });
    
      return new Response(JSON.stringify({ url: session.url }), { status: 200 });
    }

    if (plan === "Z1") {      
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "subscription",
        client_reference_id: id,
        customer: customer.id,
        line_items: [{
            price: process.env.STRIPE_PRICE_ID_Z1 as string,
            quantity: 1,
        }],
        metadata: {
          plan,
        },
        success_url: `${process.env.NEXT_PUBLIC_URL}/subscription-success`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/menu`,
      });
    
      return new Response(JSON.stringify({ url: session.url }), { status: 200 });
    }
  } catch (error: any) {
    console.log('Error:', error.message);
    return new Response('Error', { status : 400 });
  }
}