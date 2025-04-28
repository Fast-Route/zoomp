'use server';
import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getUser(id: string) {
  try {
    const supabase = await createClient();

    const user = await prisma.users.findUnique({
      where: {
        id,
      },
    });

    
    if (!user) {
      throw new Error('Usuário não encontrado!');
    }

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/');
}

export default async function cancelSubscription(id: string, idSubscription: string) {
  if (!idSubscription) {
    throw new Error('Subscription ID is required!');
  }

  try {
    const response = await stripe.subscriptions.update(idSubscription, {
      cancel_at_period_end: true,
    });

    if (response.status === 'canceled') {
      await prisma.users.update({
        where: {
          id,
        },
        data: {
          cancelPeriodEnd: true,
        },
      });

      revalidatePath('/menu');
    }

    await prisma.users.update({
      where: {
        id,
      },
      data: {
        cancelPeriodEnd: true,
      },
    });
  
    revalidatePath('/menu');
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function cancelSubscriptionOne(user: any) {
  try {
    const today = new Date();
    const periodEnd = new Date(user.periodEnd);
    const isExpired = today > periodEnd;

    if (isExpired) {
      await prisma.users.update({
        where: {
          id: user.id,
        },
        data: {
          status: null,
          plan: null,
          periodEnd: null,
          idSubscription: null,
        },
      });

      revalidatePath('/menu');
    }

    return isExpired;
  } catch (error: any) {
    console.log(error);
  }
}

export async function sendSuggestion(formData: any) {
  try {
    const suggestion = formData.suggestion;

    if (!suggestion) {
      throw new Error('Suggestion is required!');
    }

    const response = await prisma.suggestions.create({
      data: {
        suggestion,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}