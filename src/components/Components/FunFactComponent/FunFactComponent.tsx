import FactListAtom from "~/components/Atoms/FactListAtom/FactListAtom";
import { listfact } from "~/components/Atoms/FactListAtom/listfact";

type Props = {
  className?: string;
  // Add props here
};

export const FunFactComponent = (props: Props) => {
  const { className } = props;
  return (
    <section className='container mx-auto w-full px-[.75rem] xl:p-0'>
      <div
        className={`relative z-10 ${className} -mt-32 flex  w-full flex-col gap-[30px] rounded-[15px] bg-linear-gradient px-[30px] py-[40px] md:px-[50px] xl:flex-row xl:px-[80px] xl:py-[50px]`}
      >
        <div className='absolute bottom-0 left-0 -z-10 h-full w-full bg-fun-fact to-[100%] bg-[100%] bg-no-repeat'></div>
        <div className='w-full flex-1 text-white xl:w-[30%]'>
          <h2 className='mb-[20px] text-[42px] font-bold xl:text-[54px]'>
            Our fun fact
          </h2>
          <p className='text-[1rem] leading-[1.75em] text-[#ffffffb2]'>
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis.
          </p>
        </div>
        <div className='m-0 grid grid-cols-1 gap-[15px] md:grid-cols-2 xl:ml-[80px] xl:gap-[40px]'>
          {listfact.map((item, index) => (
            <FactListAtom key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px]
