import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props<T> = {
  text: string;
  author: string;
  position: string;
  // Add props here
};
export const TestimonialListComponent = <T,>({
  text,
  author,
  position,
  ...otherPros
}: Props<T>) => {
  return (
    <div {...otherPros} className=' w-full'>
      <div className='w-full'>
        <p className='text-[22px] font-semibold leading-[1.5em] text-[#fefefe]'>
          {text}
        </p>
        <SVGAtom iconName='rating' width={200} height={100} />
      </div>

      <div className='flex items-end justify-between '>
        <div>
          <h2 className='mt-[70px] text-[22px] font-semibold text-[#fefefe]'>
            {author}
          </h2>
          <div className='mt-[10px] flex items-center gap-[10px]'>
            <hr className='w-[20px]' />
            <p className='text-[18px] text-accentGrey'>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
