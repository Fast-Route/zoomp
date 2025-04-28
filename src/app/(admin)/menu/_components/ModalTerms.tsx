import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function ModalTerms() {
  return (
    <DialogContent className="w-[90%] rounded-xl py-6 px-4">
      <DialogHeader>
        <DialogTitle>Terms and Conditions</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-sm">1. Acceptance of Terms</span>
          <span className="text-muted-foreground text-sm">
            By using Fast Route, the User agrees to the terms and conditions established in this document. 
            If you do not agree with these terms, do not use the application.
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-semibold text-sm">2. Disclaimer</span>
          <span className="text-muted-foreground text-sm">
            Under no circumstances will the developer, owners or operators of this Application will be
            responsible for any loss, damage or harm, direct or indirect, arising from the loss of
            delivery blocks or the inability to access or use the Application or any other reason.
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-semibold text-sm">3. Account Usage Guidelines</span>
          <span className="text-muted-foreground text-sm">
            It is against our guidelines for account sharing between two or more users. Being
            Therefore, we set a limit of one profile photo change every 30 days.
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-semibold text-sm">4. Nature of the Service</span>
          <span className="text-muted-foreground text-sm">
            Our service is a simulation of a delivery app. We are not responsible for the purposes for
            which the user uses our Application.
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-semibold text-sm">5. Changes to the Terms</span>
          <span className="text-muted-foreground text-sm">
            We reserve the right to change these terms at any time. If this happens, you you will be
            notified through our website or app. Continued use of the Application after any
            modifications constitute acceptance of the new terms.
          </span>
        </div>
      </div>

      <DialogClose className="bg-primary h-12 rounded-xl text-sm font-semibold">Close</DialogClose>
    </DialogContent>
  );
}

export default ModalTerms;