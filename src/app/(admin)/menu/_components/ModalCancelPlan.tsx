'use client';
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CircleX, Loader } from 'lucide-react';
import cancelSubscription from "../../actions";
import { useState } from "react";

interface ModalCancelPlanProps {
  user: any;
};

function ModalCancelPlan({ user }: ModalCancelPlanProps) {
  const [loading, setLoading] = useState(false);

  async function onCancelSubscription() {
    setLoading(true);
    await cancelSubscription(user.id, user.idSubscription);

    setTimeout(() => {
      setLoading(false);
    }
    , 2000);
  }

  return (
    <DialogContent className="w-[90%] rounded-xl py-6 px-4">
      <DialogHeader>
        <DialogTitle>Subscription Details</DialogTitle>
        <DialogDescription>Information about your current plan.</DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-4 p-6 border rounded-xl">
        <div className="flex items-center justify-between w-full">
          <span className="text-muted-foreground">Plan:</span>
          <span className="text-right">{user.plan}</span>
        </div>

        <hr />

        <div className="flex items-center justify-between w-full">
          <span className="text-muted-foreground">Status:</span>
          <span className="text-green-500">{user.status.charAt(0).toUpperCase() + user.status.slice(1)}</span>
        </div>

       { user.plan !== 'Z2' && <hr /> }

        {
          user.plan !== 'Z2' && 
          <div className="flex items-center justify-between w-full">
            <span className="text-muted-foreground">Next Charge:</span>
            {user.cancelPeriodEnd && <span className="bg-red-200 text-red-700 px-2 py-1 rounded-lg border border-red-700 text-sm font-semibold">Canceled</span>}
            {!user.cancelPeriodEnd && <span className="text-right">{user.periodEnd}</span>}
          </div>
        }

      </div>

      { user.plan === 'Z2' && <span className="text-sm text-muted-foreground text-center">Your subscription will end on the day { user.periodEnd }.</span> }

      {!user.cancelPeriodEnd &&
        <Button variant="destructive" onClick={onCancelSubscription}>
          {loading ? 
            <Loader className="animate-spin" size={18} /> :
            <>
              <CircleX size={18} />
              Cancel Subscription
            </>
          }
        </Button>
      }
    </DialogContent>
  );
}

export default ModalCancelPlan;