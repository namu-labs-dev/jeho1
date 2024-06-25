import Image from "next/image";

type Props<T> = {
  url: string;
  alt: string;
  // Add props here
};

export const TestimonialImageComponent = <T,>({
  url,
  alt,
  ...otherProps
}: Props<T>) => {
  return (
    <div
      {...otherProps}
      className='active-neno z-10 mx-auto h-full w-full p-[20px] opacity-50'
    >
      <div className='h-full w-full rotate-45 overflow-hidden rounded-[7px]'>
        <div className='relative h-full w-full -rotate-45 scale-125'>
          <Image
            src={url}
            alt={alt}
            // width={200}
            // height={200}
            fill
            className='block h-auto max-w-full border-none object-cover'
          />
        </div>
      </div>
    </div>
  );
};
