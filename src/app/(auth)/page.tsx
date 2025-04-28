'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logotype from "@/icons/Logotype";
import { useState } from "react";
import { login } from "./actions";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { Loader } from "lucide-react";


export default function Page() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);

    const signin = await login(form);

    if (!signin) {
      setLoading(false);
      toast.error('Credentials invalid!', {
        description: 'Please check your credentials and try again.',
      });
      setLoading(false);
      return;
    }

    setTimeout(() => {
      redirect("/menu");
    }, 1000);
  }
  return (
    <main className='bg-background w-full h-svh px-10 flex flex-col justify-center lg:px-[740px]'>
      <div className="flex flex-col w-full gap-6 items-center">
        <Logotype width={60} height={40} />

        <span className="font-bold text-xl">Your route, your way!</span>

        <Input
          type="email"
          placeholder="Enter your email"
          className="placeholder:text-sm"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <Input
          type="password"
          placeholder="Enter your password"
          className="placeholder:text-sm"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <span className="text-center text-sm text-muted-foreground">Don't have an account? <a href="/sign-up" className="font-semibold text-primary decoration-none">Sign Up</a></span>

        <Button
              type="button"
              disabled={loading}
              onClick={handleLogin}
              className="w-full"
            >
              {loading ? <Loader className="animate-spin" /> : "Login"}
            </Button>
      </div>
    </main>
  );
}
