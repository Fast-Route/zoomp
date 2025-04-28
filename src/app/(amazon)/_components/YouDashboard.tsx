import { Progress } from 'antd';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from "react-icons/io";

function YouDashboard() {
  return (
    <div className="w-screen bg-gray-200 flex flex-col text-[#141618] gap-3">
      <div className="mt-[8vh] flex w-full flex-col bg-gradient-to-t from-white via-white to-blue-100 text-black gap-4">
        <div className="flex flex-col gap-6 p-4">
          <h1 className="text-4xl font-bold">Welcome back!</h1>
          <h2 className="text-3xl font-bold">Standings</h2>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-bold mb-12">Great</h1>
          <div className="w-[90vw] gap-2 flex flex-row">
            <div className="w-[20vw]">
              <Progress strokeColor="#00a8e4" percent={100} showInfo={false} />
            </div>
            <div className="w-[20vw]">
              <Progress strokeColor="#00a8e4" percent={100} showInfo={false} />
            </div>
            <div className="w-[50vw] flex items-center relative">
              <Progress strokeColor="#00a8e4" trailColor="#cccccc" percent={80} showInfo={false} />
              <div className="absolute left-[78%] w-5 h-5 border-4 border-[#004b7d] bg-white rounded-full"></div>
            </div>
            <div className="w-[10vw]">
              <Progress trailColor="#cccccc" percent={0} showInfo={false} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-4">
          <p className='text-2xl'>
            <span className="font-semibold">How can I improve to Fantastic?</span>
            <br />
            {`Focus on the areas listed below in you next deliveries. They're listed in order of importance and show where you've had issues in the past`}
          </p>
        </div>

        <div className="drop-shadow-md rounded-sm w-[60vw] mx-8 p-2 h-20 border flex justify-center items-center mb-4 gap-4">
          <Image src="/door.webp" width={45} height={30} alt='door' className='w-auto h-auto' />
          <div>
            <p className='font-bold'>Delivery completion</p>
            <p>Delivery quality</p>
          </div>
        </div>

        <button
          type="button"
          className="p-3 rounded-md border-2 border-[#FF893A] w-[93%] self-center mb-4 text-[#FF893A] text-xl"
        >
          Standing details
        </button>
      </div>

      <div className="bg-white p-4 flex flex-col gap-6">
        <h1 className="text-3xl">Challenges</h1>
        <div className="flex gap-4 items-center">
          <Image src="/money.webp" width={40} height={40} alt='money' className='w-auto h-auto' />
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-2xl">Complete 8 blocks</h1>
            <p className="text-xl text-gray-400">Complete by Mar 30</p>
            <div className="flex justify-around items-center gap-2">
              <p className="w-[35vw] text-2xl">$45 cash</p>
              <Progress strokeColor="#00a8e4" trailColor="#cccccc" percent={60} showInfo={false} />
            </div>
          </div>
          <IoIosArrowForward size={28} className="text-gray-400" />
        </div>

        <div className="flex gap-4 items-center">
          <Image src="/pack.webp" width={40} height={40} alt='package' className='w-auto h-auto' />
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-2xl">Prime Now Pro</h1>
            <Progress strokeColor="#00a8e4" trailColor="#cccccc" percent={60} showInfo={false} />
          </div>
          <IoIosArrowForward size={28} className="text-gray-400" />
        </div>

        <div className="flex gap-4 items-center">
          <Image src="/box.webp" width={40} height={40} alt='box' className='w-auto h-auto' />
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-2xl">Amazon.com Champion</h1>
            <Progress strokeColor="#00a8e4" trailColor="#cccccc" percent={60} showInfo={false} />
          </div>
          <IoIosArrowForward size={28} className="text-gray-400" />
        </div>

        <button
          type="button"
          className="p-3 rounded-md border-2 border-[#FF893A] w-[100%] self-center mb-4 text-[#FF893A] text-xl"
        >
          See all challenges
        </button>
      </div>

      <div className="bg-white p-4 flex flex-col gap-6">
        <h1 className="text-3xl">Amazon Flex Rewards</h1>

        <div className="flex flex-col items-center">
          <Image src="/level.webp" width={120} height={120} alt='level' className='w-auto h-auto mb-2' />
          <h2 className="text-2xl font-bold">Enjoy level 2 rewards</h2>
          <p className='text-2xl'>
            troungh <span className="font-bold">Jun 30</span>
          </p>
        </div>
        {/* preciso ajustar o hr para w-full */}
        <hr />
        {/*  */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Earning period: Jan 1 - Mar 31</h2>
          <p className='text-2xl'>
            Keep delivering to earn 1.566 more points by <span className="font-bold">Mar 31</span>{' '}
            to unlock Level 3.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className='w-[95%]'>
            <Progress strokeColor="#004b7d" trailColor="#cccccc" percent={47.8} showInfo={false} />
            <p className='ml-1 text-2xl'>1434/3000 points</p>
          </div>
          <Image src="/numberlevel.webp" width={40} height={4} alt='numberlevel' className='w-auto h-auto' />
        </div>

        <button
          type="button"
          className="p-3 rounded-md border-2 border-[#FF893A] w-[100%] self-center mb-4 text-[#FF893A] text-xl"
        >
          Rewards details
        </button>
      </div>

      <div className="bg-white p-4 flex flex-col">

        <h2 className="text-2xl font-bold">Compliments</h2>

        <h2 className='text-3xl'>56 received</h2>

        <div className='flex flex-col w-full gap-10 mt-8'>
          <div className='flex justify-between items-center w-full'>
            <div className='flex flex-col items-center text-center gap-2 w-full'>
              <Image src="/rocket.png" width={84} height={84} alt='rocket' className='w-auto h-auto' />
              <p className='text-xl leading-tight'>Above & <br />Beyond</p>
            </div>

            <div className='flex flex-col items-center text-center gap-2 w-full'>
              <Image src="/home.png" width={84} height={84} alt='home' className='w-auto h-auto' />
              <p className='text-xl leading-tight'>Respectful <br />of property</p>
            </div>

            <div className='flex flex-col items-center text-center gap-2 w-full'>
              <Image src="/task.png" width={84} height={84} alt='task' className='w-auto h-auto' />
              <p className='text-xl leading-tight'>Followed <br />Instructions</p>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='flex flex-col items-center text-center gap-2 w-full'>
              <Image src="/happy.png" width={84} height={84} alt='happy' className='w-auto h-auto' />
              <p className='text-xl leading-tight'>Friendly</p>
            </div>

            <div className='flex flex-col items-center text-center gap-2 w-full'>
              <Image src="/timer.png" width={84} height={84} alt='timer' className='w-auto h-auto' />
              <p className='text-xl leading-tight'>On Time</p>
            </div>

            <div className='flex flex-col items-center text-center gap-2 w-full'>
              <Image src="/heart.png" width={84} height={84} alt='heart' className='w-auto h-auto' />
              <p className='text-xl leading-tight'>Alexa,<br />Thank my<br /> Driver</p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-row justify-end p-4 items-center gap-2 mt-8'>
          <h1 className="text-2xl font-bold">View all</h1>
          <IoIosArrowDown size={30} className='text-[#FF893A]'/>
        </div>
      </div>
    </div>
  );
}

export default YouDashboard;
