import feedback from '@/constants/Feedbacks';

function Feedback() {
  return (
    <div className='bg-[#f3f3f3] w-full h-screen'>
      <div className='bg-[#181818] mt-[7vh] h-[10vh] w-full flex justify-center items-center'>
        <h1 className='text-[#d7d7d7] text-center font-extralight'>What can we improve?</h1>
      </div>
      <div className='flex flex-col bg-white'>
        {feedback.map((item, index) => (
          <div key={index} className='border-b border-zinc-200 h-[50px] flex items-center justify-start pl-8 gap-4'>
            <div className='h-[20px] w-[20px] rounded-full bg-gray-300' />
            <p className='text-[#181818]'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;