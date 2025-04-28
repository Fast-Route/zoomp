'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStore } from "@/providers/store";
import { createClient } from "@/utils/supabase/client";
import { CameraIcon, DoorClosed, Loader, LockKeyhole } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface ContentProps {
  user: any;
};

function Content({ user }: ContentProps) {
  const { form, setForm } = useFormStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm({ ...form, name: user?.nameBadge, photo: user?.photo });
  }, []);

  async function chooseRoute() {
    setLoading(true);
    
    if (user?.nameBadge && user?.photo) {
      localStorage.setItem('user', JSON.stringify({ photo: user?.photo, nameBadge: user?.nameBadge }));
      redirect('/route');
    }
    
    if (form.arquive === null || form.name === null || form.photo === null) {
      toast.error('Missing fields!', {
        description: 'Please fill in all the fields to proceed.',
      });
      setLoading(false);
      return;
    }

    const supabase = await createClient();

    const { error } = await supabase.storage.from('photos').upload(`${user.id}/photo`, form.arquive);

    if (error) {
      toast.error('Error uploading photo!', {
        description: 'Please try again later.',
      });
      setLoading(false);
      return;
    }

    const { data: url } = await supabase.storage.from('photos').getPublicUrl(`${user.id}/photo`);

    const formattedDate = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    await supabase.from('users').update({
      nameBadge: form.name,
      photo: url.publicUrl,
      lastLogin: formattedDate,
    }).eq('id', user.id);

    localStorage.setItem('user', JSON.stringify({ photo: form.photo, nameBadge: form.name }));

    redirect('/route');
  }

  async function logout() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect('/');
  }

  return (
    <div className="w-full h-full bg-background flex flex-col justify-between gap-6 rounded-t-3xl p-6">
      <Label className="flex flex-col text-center gap-2 w-full" htmlFor="name-badge">
        Choose the name for your badge:
        <Input
          type="text"
          placeholder="Enter your name"
          id="name-badge"
          className="placeholder:text-sm"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </Label>

      <div className="flex flex-col gap-8 items-center justify-center w-full">
        <div
          style={form.photo || user?.photo ? { backgroundImage: `url(${form.photo || user?.photo})` } : {}}
          className="rounded-[4rem] bg-primary/10 border-2 border-primary/50 h-64 w-64 bg-cover bg-center bg-no-repeat flex justify-center items-center relative"
        >
          {
            !form.photo && !user?.photo && <CameraIcon size={64} className="text-primary/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          }
          <input type="file" accept="image/*" className="w-full h-full opacity-0 overflow-hidden" onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setForm({ ...form, photo: URL.createObjectURL(e.target.files[0]), arquive: e.target.files[0] });
                }
              }} disabled={form.photo && user.photo} />
        </div>

        <h3 className="font-semibold text-xl">{form.name || user?.nameBadge || "Your Name"}</h3>
      </div>

      <div className="w-full flex flex-col gap-6 justify-center items-center">
      <Button disabled={(user?.status !== 'active' && user?.role !== 'ADM') || loading} type="button" onClick={chooseRoute} className="w-full">
        {
          !loading && user?.status !== 'active' && user?.role !== 'ADM' && <LockKeyhole />
        }
        {loading ? <Loader className="animate-spin" /> : 'Choose your route'}
      </Button>

        <div className="w-full h-12 flex justify-center items-center gap-4" onClick={logout}>
          <DoorClosed size={20} className="text-muted-foreground" />
          <span className="text-muted-foreground text-sm">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Content;