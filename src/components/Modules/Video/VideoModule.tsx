import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { VideoComponent } from "~/components/Components/VideoComponent/VideoComponent";

type Props = {
  // Add props here
};

export const VideoModule = (props: Props) => {
  return (
    <>
      <DividerComponent className='h-[70px] lg:h-[130px]' />
      <section className='mx-auto flex w-full flex-col items-center px-[.7rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px]'>
        <h2 className='text-center text-[36px] font-semibold text-white lg:text-[50px]'>
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <div className='h-[50px]' />
        <VideoComponent />
      </section>
    </>
  );
};
