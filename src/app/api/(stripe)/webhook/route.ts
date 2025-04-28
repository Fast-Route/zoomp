import { handleProcessWebhookCheckout, handleProcessWebhookUpdateCharged, handleProcessWebhookUpdateSubscription, stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.log('The Stripe webhook secret is not defined.');
    return new Response('The Stripe webhook secret is not defined.', { status: 400 });
  }

  const headersStripe = await headers()

  const signature = headersStripe.get('stripe-signature') as string;
  
  let event: Stripe.Event;
  
  try {
    event = await stripe.webhooks.constructEventAsync(
      await req.text(),
      signature,
      WEBHOOK_SECRET,
    );
  } catch (error: any) {
    console.log('Webhook signature verification failed:', error.message);
    return new Response('Webhook signature verification failed.', { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleProcessWebhookCheckout(event.data);
        break;
      case 'charge.updated':
        await handleProcessWebhookUpdateCharged(event.data);
        break;
      case 'customer.subscription.updated':
        await handleProcessWebhookUpdateSubscription(event.data);
        break;
      case 'customer.subscription.deleted':
        await handleProcessWebhookUpdateSubscription(event.data);
      break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    return new Response('Error', { status: 400 });
  }

  return new Response('success', { status: 200 });
}