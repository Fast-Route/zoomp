import checkDateMonth from '@/utils/calcDate';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import box from '1.jpeg';
import bank from '2.jpeg';
import Image from 'next/image';

type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

function Earning() {
  const day = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
  }) as Day;

  const month = new Date().toLocaleDateString('en-US', {
    month: 'short',
  });

  const date = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
  });
  

  function sumWeekday(day: Day): number {
    const days = {
      Mon: 4,
      Tue: 3,
      Wed: 2,
      Thu: 1,
      Fri: 7,
      Sat: 6,
      Sun: 5,
    };
  
    return days[day];
  }
  
  let currentBalance = 0;

  const weekday = sumWeekday(day);

  const paymentDay = [] as { month: string; day: number; weekday: string }[];

  function createPayments(
    currentMonth: string,
    currentDate: number,
    currentDay: string,
  ): { month: string; day: number; weekday: string }[] {
    const payments = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const currentDayIndex = days.indexOf(currentDay);

    for (let i = 0; i < 7; i += 1) {
      const newDayIndex = (currentDayIndex - i + 7) % 7;
      const newDate = currentDate - i;

      const payment = checkDateMonth(currentMonth, newDate, days[newDayIndex]);
      if(payment.weekday === 'Fri') {
        paymentDay.push(payment);
      }
      if (payment.weekday === 'Thu') {
        paymentDay.push(payment);
      }
      payments.push(payment);
    }

    return payments;
  }

  const payments = createPayments(month, Number(date), day);

  function paymentsValue(payments: Array<{ month: string; day: number; weekday: string }>) {
    const values = ['126,50', '106,50', '96', '132,50', '106,50', '96', '102,50'];
    const resp = payments.map((payment, index) => ({
      ...payment,
      value: values[index],
      currentBalance: currentBalance += Number(values[index].replace(',', '.')),
    }));

    return resp;
  }

  const paymentsWithValues = paymentsValue(payments);

  function sumDate(): number {
    return Number(date) + Number(weekday);
  }

  return (
    <section className="text-black py-2 gap bg-white">
      <div className="w-full flex flex-col items-center pt-[9vh] pb-3 gap-2">
        <div className="flex items-center gap-2 justify-center">
          <p className="text-[#667272]">Current Balance</p>
          <AiOutlineInfoCircle size={25} />
        </div>
        <p className="text-4xl font-bold">{`$${currentBalance.toFixed(2).toString().replace('.',',')}`}</p>
        <p className="text-[#667272]">{`Payment scheduled for Fri, ${month} ${sumDate()}`}</p>
      </div>
      <div className="text-xl py-3 border-b border-t border-[#babcbb] bg-[#f8faf9]">
        <h1 className="ml-4">{month}</h1>
      </div>

      {paymentsWithValues.map((payment) => (
        <div className="flex items-center h-[110px] border-b border-[#babcbb]" key={payment.day}>
          <div className="w-1/2 flex justify-center">
            <Image src="/1.jpeg" alt="box" width={64} height={64} className='h-[5rem] w-[5rem] rounded-full' />
          </div>
          <div className="w-full">
            <p className="text-xl">{`${payment.weekday}, ${payment.month} ${payment.day}`}</p>
            <p className="text-[#667272]">04:15 - 07:45</p>
          </div>
          <div className="text-xl w-1/2 flex justify-end">
            <p className="mr-4">{`$${payment.value}`}</p>
          </div>
        </div>
      ))}
      <div className="flex items-center h-[110px] border-b border-[#babcbb]">
        <div className="w-1/2 flex justify-center">
          <Image src="/2.jpeg" width={54} height={54} alt="bank" className='h-[4rem] w-[4.2rem] rounded-full' />
        </div>
        <div className="w-full">
          <p className="text-xl">Payment sent</p>
          <p className="text-xl">{`${paymentDay[0].weekday}, ${paymentDay[0].month} ${paymentDay[0].day}`}</p>
        </div>
        <div className="text-2xl w-1/2 flex justify-end">
          <p className="mr-4">$876,00</p>
        </div>
      </div>
    </section>
  );
}

export default Earning;
