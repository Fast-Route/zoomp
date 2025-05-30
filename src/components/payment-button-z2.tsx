'use client';
import { useLoadingStore } from "@/providers/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PaymentButtonZ2Props {
  user: any;
}

function PaymentButtonZ2({ user }: PaymentButtonZ2Props) {
  const route = useRouter();
  const { setLoading } = useLoadingStore();

  async function handlePayment() {
    try {
      setLoading(true);
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          id: user.id,
          plan: 'Z2',
        }),
      });

      const { url } = await response.json();

      setTimeout(() => {
        route.push(url);
      }
      , 2000);
    } catch (error: any) {
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <div className="flex gap-4 p-3 border rounded-xl" onClick={handlePayment}>
      <Image src='/Z2.png' alt='plan1' priority width={60} height={60} className='w-auto h-auto' />
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">Single Plan</h3>
        <span className="text-muted-foreground leading-tight text-sm">
          Renewal done by the user manually.
        </span>
      </div>
    </div>
  );
}

export default PaymentButtonZ2;