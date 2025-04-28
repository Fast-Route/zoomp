'use client';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { redirect } from "next/navigation";

function Header() {
  const handleBack = () => {
    redirect('/menu');
  }

  return (
    <header className="w-full flex items-center justify-between px-6 py-4">
      <ChevronLeft onClick={handleBack} />
      <h2 className='font-semibold text-2xl text-center'>Create Route</h2>
      <ChevronRight className="opacity-0" />
    </header>
  );
}

export default Header;