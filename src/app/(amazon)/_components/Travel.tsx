import { IoIosArrowUp } from 'react-icons/io';
import { FaClock } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image from 'next/image';

function Travel() {
  return (
    <div className="mt-[7vh]">
      <div className=" bg-[#2c2a2b] w-full h-[7vh] flex flex-col justify-center items-center">
        <div className="flex gap-2 items-center text-lg">
          <p>8346 Daydream Crescent</p>
          <IoIosArrowUp className="text-[#fff] text-2xl" />
        </div>
        <p>Pasadena, MD 21122</p>
      </div>

      <Image src="/travel.webp" alt="travel" width={430} height={400} priority className='w-full h-auto' />

      <div className="w-full flex flex-col items-center mt-1">
        <div className="h-[5px] bg-gray-500 w-[50px] rounded-full" />
      </div>

      <div className="flex flex-col w-full gap-8 mt-5">
        <div className="flex flex-row text-black bg justify-between mx-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#141618] text-xl font-bold">Deliver 1 package</p>
            <div className="flex items-center gap-2 text-gray-500">
              <FaClock className="text-[#00afe6]" />
              <p>0:01 - 18:00</p>
            </div>
          </div>
          <div className="h-[60px] w-[60px] border-2 border-[#fe7817] rounded-md flex justify-center items-center">
            <CgNotes className="text-[#fe7817] text-3xl" />
          </div>
        </div>

        <div className='w-full bg-[#fe7817] h-[8vh] flex'>
          <div className='flex justify-center items-center border-r w-full text-xl border-red-500'>
            <p>Start travel</p>
          </div>
          <div className='flex w-1/5 justify-center items-center'>
            <BsBoxArrowUpRight className='text-[#fff] text-3xl' />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Travel;
