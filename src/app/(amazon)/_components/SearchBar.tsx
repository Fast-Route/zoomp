import Image from 'next/image';
import { IoSearch } from "react-icons/io5";

function SearchBar() {
    return (
        <div className="relative w-full h-[9vh] bg-gray-200 py-2 px-2 flex justify-center items-center mt-[11vh]">
            <IoSearch size={18} className="absolute left-4 text-gray-700" />
            <input name="search" type="text" placeholder="Search with" className="border-none bg-white rounded-md w-full h-[40px] pl-8 text-[15px]" />
            <Image src="/qrcode.jpeg" alt='qrcode' width={30} height={30} className='h-[30px] w-[30px] absolute right-4' />
        </div>
    );
}

export default SearchBar;