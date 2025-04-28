'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logotype from "@/icons/Logotype";
import { Loader } from "lucide-react";
import { useState } from "react";
import { register } from "../actions";
import { toast } from "sonner";

function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    setLoading(true);

    const create = await register(form);

    if (!create) {
      toast.error('The user already exists',{
        description: 'Please check your email or password',
      });
      setLoading(false);
      return;
    }
  }

  return (
    <main className='bg-background w-full h-svh px-10 flex flex-col justify-center lg:px-[740px]'>
      <div className="flex flex-col w-full gap-6 justify-center items-center">
        <Logotype width={60} height={40} />

        <span className="font-bold text-xl">Create your account</span>

        <Input
          type="text"
          placeholder="Enter your name"
          className="placeholder:text-sm"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

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

        <span className="text-center text-sm text-muted-foreground">Already have an account? <a href="/" className="font-semibold text-primary decoration-none">Sign In</a></span>

        <Button
          type="button"
          disabled={loading}
          className="w-full"
          onClick={handleRegister}
        >
          {loading ? <Loader className="animate-spin" /> : "Sign Up"}
        </Button>
      </div>
    </main>
  );
}

export default Page;