import { MdArrowForwardIos } from 'react-icons/md';

function Settings() {
  return (
    <div className="h-full pt-[7vh] text-black flex flex-col text-2xl bg-white ">
      <div className="flex ml-4 items-center py-4 mt-2 border-b border-gray-400">
        <p>Personal Information</p>
        <MdArrowForwardIos className="ml-auto mr-3 text-gray-400" />
      </div>

      <div className="flex ml-4 items-center py-4 border-b border-gray-400">
        <p>Phone Number</p>
        <div className="flex items-center ml-auto mr-3 gap-2">
          <p className="text-gray-400">+12409870544</p>
          <MdArrowForwardIos className="text-gray-400" />
        </div>
      </div>

      <div className="w-full bg-gray-200">
        <div className="flex ml-4 items-center py-4 border-b border-gray-400">
          <p>{`We'll use this number to contact you while you're making deliveries.`}</p>
        </div>
      </div>

      <div className="flex ml-4 items-center py-4 border-b border-gray-400">
        <p>Display theme</p>
        <div className="flex items-center ml-auto mr-3 gap-2">
          <p className="text-gray-400">Automatic</p>
          <MdArrowForwardIos className="text-gray-400" />
        </div>
      </div>

      <div className="flex ml-4 items-center py-4 border-b border-gray-400">
        <p>Region</p>
        <div className="flex items-center ml-auto mr-3 gap-2">
          <p className="text-gray-400">Baltimore</p>
        </div>
      </div>

      <div className="flex ml-4 items-center py-4 border-b border-gray-400">
        <p>Preferred Scheduling</p>
        <div className="flex items-center ml-auto mr-3 gap-2">
          <MdArrowForwardIos className="text-gray-400" />
        </div>
      </div>

      <div className="flex ml-4 items-center py-4 border-b border-gray-400">
        <p>Map Units</p>
        <div className="flex items-center ml-auto mr-3 gap-2">
          <p className="text-gray-400">Default</p>
          <MdArrowForwardIos className="text-gray-400" />
        </div>
      </div>

      <div className="flex ml-4 items-center py-4 border-b border-gray-400">
        <p>View Legal Information</p>
        <div className="flex items-center ml-auto mr-3 gap-2">
          <MdArrowForwardIos className="text-gray-400" />
        </div>
      </div>

      <div className="flex ml-4 items-center py-4 border-b border-gray-400">
        <p>Offline Maps</p>
        <div className="flex items-center ml-auto mr-3 gap-2">
          <MdArrowForwardIos className="text-gray-400" />
        </div>
      </div>

      <div className="flex ml-4 items-center py-4 border-b border-gray-400">
        <p>Version Info</p>
        <div className="flex items-center ml-auto mr-3 gap-2">
          <p className="text-gray-500">2.130.4.48736 US</p>
        </div>
      </div>

      <div className="flex flex-col ml-4 py-4 border-b border-gray-400">
        <p>Device Identifier</p>
        <p className='text-lg'>BC3D9749-E2BE-43C4-B5BD-F374473480F5</p>
      </div>

      <button type="button" className='bg-[#fe7817] rounded-md mx-4 text-white p-2 my-4'>Sign Out</button>

    </div>
  );
}

export default Settings;
