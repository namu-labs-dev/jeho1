import Image from "next/image";
import Link from "next/link";

export type LatestItemProps = {
  url: string;
  name: string;
  text: string;
};
export const LatestProjectComponent = (props: LatestItemProps) => {
  return (
    <div
      className={`relative block h-full w-full overflow-hidden rounded-[12px]`}
    >
      <Image
        src={props.url}
        fill
        className='h-full w-full max-w-[100%] rounded-[12px] object-cover'
        alt={"title"}
      />
      <Link
        href={"#"}
        className='absolute inset-0 z-10 flex items-end justify-start overflow-hidden'
      >
        <div className='overlay'></div>
        <div className='popup relative bottom-[-45px] left-[-52px] hidden h-[300px] w-[300px] flex-col justify-center rounded-[50%] bg-accentRed px-[20px]  py-[30px] pl-[60px] transition-all duration-500 ease-in-out '>
          <h2 className='text-[15px] font-extrabold text-white lg:text-[22px]'>
            {props.name}
          </h2>
          <div className='flex items-center gap-[5px]'>
            <p className='relative left-0 pt-[2px] text-[18px] font-light text-accentGrey '>
              {props.text}
            </p>
            <hr className='w-[40px] text-accentGrey' />
          </div>
        </div>
      </Link>
    </div>
  );
};
