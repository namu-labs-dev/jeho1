import { type Settings } from "react-slick";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";
import { OurAwardComponent } from "~/components/Components/OurAwardComponent/OurAwardComponent";
import { RightContainerComponent } from "~/components/Components/RightContainerComponent/RightContainerComponent";
import SliderCarouselComponent from "~/components/Components/SliderCarouselComponent/SliderCarouselComponent";
import "./custom.css";

type Props = {
  // Add props here
};

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  rows: 2,
  slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  // centerMode: true,
  // centerPadding: "90px",
  // className: "center",
};

export const OurAwardModule = (props: Props) => {
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[150px]' />
      <section className='cs-shape_wrap_2 px-[.75rem]'>
        <div className='cs-shape_2'>
          <div className='triangle hidden lg:block'>ddd</div>
        </div>
        <div className='container mx-auto'>
          <div className='flex flex-col items-start lg:flex-row'>
            <LeftContainerComponent
              title='We get multiple awards'
              subTitle='Our Awards'
              className='shrink-0 xl:w-[30%]'
            />
            <RightContainerComponent className='mx-auto shrink-0 xl:w-[50%]'>
              <SliderCarouselComponent settings={settings} className='award'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                  <OurAwardComponent key={index} />
                ))}
              </SliderCarouselComponent>
            </RightContainerComponent>
          </div>
        </div>
      </section>
    </>
  );
};
