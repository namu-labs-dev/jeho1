import Image from "next/image";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { FunFactComponent } from "~/components/Components/FunFactComponent/FunFactComponent";
import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";

type Props = {
  title: string;
  subTitle: string;
  text: string;
  data: {
    alt: string;
    url: string;
  }[];
};

export const AboutOurAgencyModule = (props: Props) => {
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[150px] ' />
      <section className='container mx-auto px-[.75rem] lg:p-0'>
        <div className='grid grid-cols-1'>
          <div className='flex flex-col items-center justify-between gap-[20px] lg:flex-row'>
            <div className='w-full lg:w-[600px]'>
              <LeftContainerComponent
                title={props.title}
                subTitle={props.subTitle}
                text={props.text}
                className='gap-[30px]'
              />
            </div>
            {props?.data?.slice(0, 1).map((item, index) => (
              <div
                key={index}
                className='relative ml-0 h-[450px] w-full lg:w-[570px] xl:ml-[12rem]'
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  className={`h-full w-full rounded-[20px] object-cover`}
                />
              </div>
            ))}
          </div>
          <div className='mt-[20px] flex flex-col items-center justify-between gap-[20px] lg:mt-[30px] lg:flex-row'>
            {props?.data?.slice(1, 2).map((item, index) => (
              <div
                key={index}
                className='relative h-[400px] w-full lg:w-[790px]'
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  className={`h-full w-full rounded-[20px] object-cover`}
                />
              </div>
            ))}
            {props?.data?.slice(2, 3).map((item, index) => (
              <div
                key={index}
                className='relative m-0 h-[400px] w-full lg:w-[570px] xl:ml-[30px]'
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  className={`h-full w-full rounded-[20px] object-cover`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <DividerComponent className='h-[75px] lg:h-[55px] ' />
      <FunFactComponent className='mt-0' />
    </>
  );
};
