'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormRouteStore } from "@/providers/store";
import { useState } from "react";
import { stations, PackageQuantities, letters, packageNumbers } from "@/constants/options";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Suggestion from "./Suggestion";
import { redirect } from "next/navigation";

function Content() {
  const [loading, setLoading] = useState(false);
  const { form, setForm } = useFormRouteStore();
  const [station, setStation] = useState('');

  function start() {
    setLoading(true);

    const time = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    localStorage.setItem('route', JSON.stringify({ ...form, time }));

    setTimeout(() => {
      redirect('/current');
    }, 1000);
  }

  return (
    <div className="w-full h-full bg-background flex flex-col justify-between rounded-t-3xl p-6">
      <Suggestion />

      <form className="flex flex-col w-full gap-4">
      <Select onValueChange={(value) => {
          setStation(value);
          setForm({ ...form, station: value });
        }}>
          <SelectTrigger>
            <SelectValue placeholder="Select Station" />
          </SelectTrigger>
          <SelectContent>
            {
              stations.map((route) => (
                <SelectItem key={route.id} value={route.name}>
                  {route.name}
                </SelectItem>
              ))
            }
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setForm({ ...form, city: value })} disabled={station === ''}>
          <SelectTrigger>
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            {
              stations.find((route) => route.name === form.station)?.cities.map((city, index) => (
                <SelectItem key={`${city.name}}-${index}`} value={city.name}>
                  {city.name}
                </SelectItem>
              ))
            }
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setForm({ ...form, letter: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select Letter" />
          </SelectTrigger>
          <SelectContent>
            {
              letters.map((letter, index) => (
                <SelectItem key={`${letter}-${index}`} value={letter}>
                  {letter}
                </SelectItem>
              ))
            }
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setForm({ ...form, packageNumber: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select Package Number" />
          </SelectTrigger>
          <SelectContent>
            {
              packageNumbers.map((number, index) => (
                <SelectItem key={`${number}-${index}`} value={number}>
                  {number}
                </SelectItem>
              ))
            }
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setForm({ ...form, packageQuantity: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select Package Quantity" />
          </SelectTrigger>
          <SelectContent>
            {
              PackageQuantities.map((quantity, index) => (
                <SelectItem key={`${quantity}-${index}`} value={quantity.toString()}>
                  {quantity}
                </SelectItem>
              ))
            }
          </SelectContent>
        </Select>

        <div className='flex w-full border rounded-xl h-12 justify-center items-center text-sm'>
          {form.station.toUpperCase()} - {form.city.toUpperCase()} - {form.packageNumber.toUpperCase()} - {form.letter.toUpperCase()} - {form.packageQuantity.toUpperCase()}
        </div>
      </form>

      <Button disabled={loading} className="w-full" onClick={start}>
        { loading ? <Loader className="animate-spin" /> : 'Start' }
      </Button>
    </div>
  );
}

export default Content;