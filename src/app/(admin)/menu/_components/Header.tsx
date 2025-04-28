import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Logomarca from "@/icons/Logomarca";
import Logotype from "@/icons/Logotype";
import { ScrollText, Star } from "lucide-react";
import ModalTerms from "./ModalTerms";
import ModalPlans from "./ModalPlans";
import ModalCancelPlan from "./ModalCancelPlan";

interface MenuHeaderProps {
  user: any;
};

function Header({ user }: MenuHeaderProps) {
  return (
    <header className="w-full flex justify-between p-6">
      <div className="flex items-center gap-2">
        <Logomarca width={80} className="fill-foreground" />
      </div>

      <div className="flex gap-4 items-center">
        {
          user?.status === 'active' ? (
            <Dialog>
              <DialogTrigger>
                <div className="bg-primary p-4 rounded-xl flex gap-2 items-center font-semibold text-sm h-10">
                  <Star fill="#FFB300" size={18} stroke="#FFB300" />
                  {user.plan}
                </div>
              </DialogTrigger>
              <ModalCancelPlan user={user} />
            </Dialog>
          ) : (
            <Dialog>
              <DialogTrigger className="rounded-xl bg-primary font-semibold text-sm h-10 px-4 py-2">Subscribe</DialogTrigger>
              <ModalPlans user={user} />
            </Dialog>
          )
        }

        <Dialog>
          <DialogTrigger >
            <ScrollText size={24} />
          </DialogTrigger>
          <ModalTerms />
        </Dialog>
      </div>
    </header>
  );
}

export default Header;