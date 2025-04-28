import { IoOptionsOutline } from 'react-icons/io5';
import { IoMdCloseCircle } from 'react-icons/io';
import offers from '@/constants/Offers';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

function Offers() {
  const [offersNumber, setOffersNumber] = useState(21);
  const [station, setStation] = useState('');
  const router = useRouter();
  const day = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
  });
  const date = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
  });

  const monthNumber = new Date().toLocaleDateString('en-US', {
    month: 'numeric',
  });

  useEffect(() => {
    const route = JSON.parse(localStorage.getItem('route') || '');
    setStation(route.station);
    setOffersNumber(getRandomNumber());
  }, []);

  const handleRefresh = () => {
    router.refresh();
    setOffersNumber(getRandomNumber());
  };

  const sigla =
  station === 'Baltimore'
    ? 'MB (VBW1) - Sub Same-Day'
    : station === 'Elkridge'
    ? 'MD (VMD1) - Sub Same-Day'
    : station === 'Orlando'
    ? 'FL (VFL1) - Sub Same-Day'
    : station === 'Westborough'
    ? 'MA (VMA1) - Sub Same-Day'
    : 'VA (VDC1) - Sub Same-Day';

  function getRandomNumber() {
    const min = 15;
    const max = 21;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="text-black mt-[7vh] w-full">
      <div className="w-full mt-4 py-2 flex pl-4">
        <div className="flex gap-4 w-full">
          <IoOptionsOutline className="text-3xl text-black" />
          <p className="text-xl text-[var(--primary-amazon)]">Filter</p>
        </div>
        <p className="w-1/2 text-lg">{`${offersNumber} of ${offersNumber} offers`}</p>
      </div>

      <div className="ml-4 bg-[#b9e9f7] w-[140px] rounded-full p-2 flex justify-center items-center">
        <p>{`Stations (3)`}</p>
        <IoMdCloseCircle className="text-[#0076a6] text-2xl ml-2" />
      </div>

      <p className="mt-6 pl-4 text-xl font-bold">
        {day}, {monthNumber}/{date}
      </p>

      <div className="flex flex-col items-center gap-2 mb-[130px]">
        {offers.slice(0, offersNumber).map((offer, index) => (
          <div key={index} className="border border-zinc-300 w-[93vw] h-[120px] flex flex-col rounded-md">
            <div className="pl-3 font-bold border-b border-zinc-300 h-[40px] flex items-center text-sm">
              {`${station} ${sigla} ${offer.title}`}
            </div>
            <div className="flex gap-6 p-3">
              <div className="flex flex-col w-full">
                {offer.periodTime}
                {offer.workHours}
              </div>
              <p className="font-bold">{offer.payment.toFixed(2).replace('.', ',')}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full border-t border-zinc-300 h-[120px] fixed bottom-0 bg-white flex justify-center items-center">
        <button
          type="button"
          className="bg-[#fe7817] p-3 w-full mx-4 rounded-md text-white font-semibold"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default Offers;
