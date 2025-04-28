'use client';
import PaymentButtonZ1 from "@/components/payment-button-z1";
import PaymentButtonZ2 from "@/components/payment-button-z2";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLoadingStore } from "@/providers/store";
import { Loader, Loader2 } from "lucide-react";

interface ModalPlansProps {
  user: any;
};

function ModalPlans({ user }: ModalPlansProps) {
  const { loading } = useLoadingStore();

  return (
    <DialogContent className="w-[90%] h-80 rounded-xl py-6 px-4">

      { loading ?
        <Loader2 className="w-14 h-14 animate-spin duration-[6000ms] m-auto text-muted-foreground" /> :
        <>
          <DialogHeader>
            <DialogTitle>Choose your plan</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <PaymentButtonZ2 user={user} />
          <PaymentButtonZ1 user={user} />
        </>
      }

    </DialogContent>
  );
}

export default ModalPlans;