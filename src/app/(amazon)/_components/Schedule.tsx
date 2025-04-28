import FooterMenu from './FooterMenu';

function Schedule() {
  const getHour = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const newHour = () => {
    const hour = getHour.split(':')[0];
    const numberHour = parseInt(hour);
    const sum5 = numberHour + 4;
    const newHour = sum5.toString() + ':' + '45';
    return newHour;
  };

  const hour = newHour();

  return (
    <div className="mt-[7vh] text-black bg-gray-200 w-full flex flex-col">
      <div className="bg-white w-full h-[10vh] flex flex-row items-center justify-between px-6">
        <div className="flex flex-col">
          <div className="flex gap-6 items-center">
            <p className="text-xl">Availabe Now</p>
            <p className="text-[#fe7817] text-sm">Learn more</p>
          </div>
          <div>
            <p>Nearby offers that start immediately</p>
          </div>
        </div>
        <div className="bg-gray-200 w-[65px] h-[34px] rounded-full flex items-center">
          <div className="h-[28px] w-[28px] bg-white rounded-full ml-1" />
        </div>
      </div>

      <div className="mt-4 w-full bg-white h-[53.5vh] flex flex-col gap-6 p-6">
        <p className="text-lg">{`You'll finish your deliveries by ${hour}.`}</p>
        <p>Earn more by accepting additional offers.</p>
      </div>
      <div className="w-full bg-[#fe7817] h-[8vh] flex text-white justify-center items-center">
        <p>CONTINUE DELIVERING</p>
      </div>
      <div className="w-full h-[8vh] flex justify-center items-center">
        <p>UPCOMING OFFERS</p>
      </div>
      <div className="flex flex-row">
        <div className="w-full h-[7vh] bg-white flex flex-col"></div>
        <div className="w-full h-[7vh] bg-white flex flex-col"></div>
      </div>
      <FooterMenu />
    </div>
  );
}

export default Schedule;
