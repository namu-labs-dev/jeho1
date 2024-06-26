import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";
import "./custom.css";
import { RightContainerComponent } from "~/components/Components/RightContainerComponent/RightContainerComponent";
import About4 from "/public/images/about_img_4.webp";

import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import Image from "next/image";
type Props = {
  // title: string;
  // subTitle: string;
  // text: string;
  // text2: string;
  // Add props here
};

export const WhyChooseUsModule = (props: Props) => {
  // const { title, subTitle, text, text2 } = props;
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[145px] ' />
      <section className='container mx-auto px-[.75rem] lg:p-0'>
        <div className='flex h-full flex-col-reverse items-start gap-[40px] lg:h-[460px] lg:flex-row-reverse lg:justify-between'>
          <div className='ml-0 mt-[80px] w-full lg:ml-[15%] lg:mt-0 lg:w-[45.6%]'>
            <LeftContainerComponent
              subTitle='Why Choose Us'
              title='Highly experienced pepole with us'
              text='This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service. Our team applies its wide-ranging experience to determining. Through our years of experience, we’ve also learned that while each channel.'
              text2='
This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service. Our team applies its wide-ranging experience to determining.'
            />
          </div>
          <RightContainerComponent className='relative h-full w-full lg:w-[35.6%]'>
            <div className='image-after relative h-full w-full rounded-[20px]'>
              <Image
                src={About4}
                alt='about_4'
                fill
                className='why-section rounded-[20px] object-cover'
              />
            </div>
          </RightContainerComponent>
        </div>
      </section>
    </>
  );
};
