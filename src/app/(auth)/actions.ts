'use server';
import prisma from "@/lib/prisma";
import { createStripeCustomer } from "@/lib/stripe";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function login(form: any) {
  const supabase = await createClient();

  const data = {
    email: form.email as string,
    password: form.password as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return false;
  }

  return true;
}

export async function register(form: any) {
  const supabase = await createClient();

  const data = {
    name: form.name as string,
    email: form.email as string,
    password: form.password as string,
  }

  const userExist = await prisma.users.findUnique({
    where: {
      email: data.email,
    },
  });

  if (userExist) {
    return false;
  }

  const { data: { user }, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return false;
  }

  const customer = await createStripeCustomer({
    name: data.name,
    email: data.email,
  })

  await prisma.users.create({
    data: {
      id: user?.id,
      idCustomer: customer.id,
      name: data.name,
      email: data.email,
    },
    select: {
      id: true,
      idCustomer: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  redirect('/');
}
