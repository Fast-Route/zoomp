'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader, Send } from "lucide-react";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";

function Suggestion() {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');

  async function send() {
    try {
      const supabase = createClient();

      setLoading(true);

      if (suggestion === '') {
        toast.error('Suggestion is required!', {
          description: 'Please enter a suggestion.',
        });
      }

      const { error } = await supabase.from('suggestions').insert({ suggestion });

      if (error) {
        toast.error('An error occurred!', {
          description: 'Please try again later.',
        });

        setLoading(false);
      }

      setSuggestion('');

      toast.success('Suggestion sent!', {
        description: 'Thank you for your suggestion.',
      });


      setLoading(false);
    } catch (error) {
      toast.success('An error occurred!', {
        description: 'Please try again later.',
      });

      setLoading(false);
    }
  }

  return (
    <Label className="flex flex-col gap-4 w-full text-center font-semibold p-4 bg-muted-foreground/5 rounded-xl text-[12px]" htmlFor="suggestion">
      Do you have a suggestion for a new station or city?
      <div className="flex gap-2 w-full">
        <Input
          type="text"
          placeholder="Ex: Baltimore"
          id="suggestion"
          className="placeholder:text-sm placeholder:text-muted-foreground border"
          onChange={(event) => setSuggestion(event.target.value)}
          value={suggestion}
        />

        <Button type="button" className="w-12" onClick={send} disabled={loading}>
          {!loading ? <Send /> :  <Loader className="animate-spin" /> }
        </Button>
      </div>
  </Label>
  );
}

export default Suggestion;