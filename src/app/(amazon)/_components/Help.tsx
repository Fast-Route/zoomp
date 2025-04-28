import helpMenu from '@/constants/Help';
import { MdArrowForwardIos } from "react-icons/md";


function Help() {
  return (
    <div className="pt-[8vh] text-black flex flex-col justify-center">
      {helpMenu.map((item, index) => (
        <div key={index} className="mb-4 flex p-2 border-b border-zinc-300 items-center flex-row">
          <h1 className="text-xl">{item}</h1>
          <MdArrowForwardIos className="ml-auto mr-3 text-gray-400" />
        </div>
      ))}
    </div>
  );
}

export default Help;
