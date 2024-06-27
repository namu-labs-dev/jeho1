import { useRef } from "react";
import type Slider from "react-slick";
import { type Settings } from "react-slick";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";
import { RightContainerComponent } from "~/components/Components/RightContainerComponent/RightContainerComponent";
import { SliderButtonComponent } from "~/components/Components/SliderButtonComponent/SliderButtonComponent";
import SliderCarouselComponent from "~/components/Components/SliderCarouselComponent/SliderCarouselComponent";
import { TeamComponent } from "~/components/Components/TeamComponent/TeamComponent";
import { teamlist } from "~/data/teamlist";
import "./custom.css";
type Props = {
  // Add props here
};

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
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
};

export const OurTeamModule = (props: Props) => {
  const sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef?.current?.slickNext();
  };
  const previous = () => {
    sliderRef?.current?.slickPrev();
  };
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[145px]' />
      <section className='px-[.7rrem]'>
        <div className='container mx-auto'>
          <div>
            <div className='flex items-center justify-between px-[.75rem]'>
              <LeftContainerComponent
                title='Awesome team members'
                subTitle='Our Team'
                className='w-[50%] xl:w-[30%]'
              />
              <SliderButtonComponent
                handleBackwardClick={previous}
                handleForwardClick={next}
              />
            </div>
            <DividerComponent className='h-[45px] lg:h-[85px]' />

            <RightContainerComponent>
              <SliderCarouselComponent
                className='team-slide w-full'
                sliderRef={sliderRef}
                settings={settings}
              >
                {teamlist.map((team, index) => (
                  <TeamComponent {...team} key={index} />
                ))}
              </SliderCarouselComponent>
            </RightContainerComponent>
          </div>
        </div>
      </section>
      {/* <DividerComponent className='h-[80px] lg:h-[150px]' /> */}
    </>
  );
};
