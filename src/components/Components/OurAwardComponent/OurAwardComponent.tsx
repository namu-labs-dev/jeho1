type Props = {
  // Add props here
};

export const OurAwardComponent = (props: Props) => {
  return (
    <div className='mb-[20px] w-full'>
      <h2 className='text-[30px] font-bold text-accentRed'>2019</h2>
      <h3 className='my-[10px] text-[25px] font-semibold text-white'>
        Google Awards
      </h3>
      <p className='my-[7px] text-[17px] text-accentGrey'>Website of the day</p>
      <p className='text-[17px] text-accentGrey'>Mobile exellence</p>
    </div>
  );
};
