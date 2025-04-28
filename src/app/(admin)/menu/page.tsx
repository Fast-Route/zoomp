import { redirect } from "next/navigation";
import { cancelSubscriptionOne, getUser } from "../actions";
import Content from "./_components/Content";
import Header from "./_components/Header";
import { createClient } from "@/utils/supabase/server";

async function Page() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/')
  };
  
  const user = await getUser(data.user.id);

  if (user.plan === 'Z2' || user.cancelPeriodEnd) {
    await cancelSubscriptionOne(user);
  }

  return (
    <main className='bg-primary/30 w-full h-svh flex flex-col lg:px-[740px]'>
      <Header user={user} />
      <Content user={user} />
    </main>
  );
}

export default Page;