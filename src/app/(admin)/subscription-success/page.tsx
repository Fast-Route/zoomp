'use client';
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Loading from "./_components/Loading";

function Page() {
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/menu");
    }, 2000);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen w-full lg:px-[740px]">

      <Loading src="https://lottie.host/5fc4ad42-ff2f-486e-90bb-5f9a0304b4c4/A5qb0KHjUQ.lottie"/>

      <h1 className="text-2xl font-bold text-center mt-4">Subscription successful!</h1>

      <p className="text-center w-3/4 mt-3 text-muted-foreground">Congratulations on your subscription! We're excited to have you with us.</p>

      <Button className="mt-6 w-3/4" onClick={() => route.push('/menu')}>Go to Menu</Button>
    </main>
  );
}

export default Page;