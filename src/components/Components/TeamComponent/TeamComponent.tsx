import Image from "next/image";

export type TeamComponentProps = {
  // Add props here
  url: string;
  name: string;
  position: string;
  otherProps?: object;
};

export const TeamComponent = (props: TeamComponentProps) => {
  return (
    <div
      {...props.otherProps}
      className={`relative block h-full w-full shrink-0 overflow-hidden rounded-[15px] lg:h-[340px]`}
    >
      <div className={`relative block h-full w-full rounded-[12px]`}>
        <Image
          src={props.url}
          fill
          className='h-full w-full max-w-[100%] rounded-[12px] object-cover'
          alt={"title"}
        />
        <div className='absolute inset-0 flex items-end justify-end'>
          <div className='overlay'></div>
          <div className='relative bottom-0 left-0 w-full px-[20px] py-[30px]'>
            <p className='text-[15px] font-extrabold text-white lg:text-[22px]'>
              {props.name}
            </p>
            <h2 className='relative left-0 pt-[2px] text-[14px] font-light text-white'>
              {props.position}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
