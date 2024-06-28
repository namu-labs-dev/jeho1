import type Slider from "react-slick";
import { type Settings } from "react-slick";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { RightContainerComponent } from "~/components/Components/RightContainerComponent/RightContainerComponent";
import SliderCarouselComponent from "~/components/Components/SliderCarouselComponent/SliderCarouselComponent";
import { TestimonialImageComponent } from "~/components/Components/TestimonialImageComponent/TestimonialImageComponent";
import { TestimonialListComponent } from "~/components/Components/TestimonialListComponent/TestimonialListComponent";
import { testimonialList } from "~/data/testimonialList";
import "./custom.css";
import { SliderButtonComponent } from "~/components/Components/SliderButtonComponent/SliderButtonComponent";
import { RefObject, useEffect, useRef, useState } from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
export type TestimonialProps = {
  url: string;
  text: string;
  author: string;
  position: string;
};

type Props = {
  testimonialList: TestimonialProps[];
};

export const TestimonialModule = (props: Props) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  const next = () => {
    sliderRef1?.current?.slickNext();
  };
  const previous = () => {
    sliderRef1?.current?.slickPrev();
  };
  const imageSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    className: "center",
    centerMode: true,
    asNavFor: nav2!,
  };
  const contentSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: nav1!,
  };
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[130px]' />
      <section className='relative bg-linear-gradient'>
        <SVGAtom
          iconName='shape_1'
          width={162}
          height={181}
          className='new-shape hidden lg:block'
        />
        <DividerComponent className='h-[80px] lg:h-[130px]' />
        <div className='container mx-auto px-[.75rem]'>
          <div className='flex flex-col items-start gap-[40px] lg:flex-row'>
            <RightContainerComponent className='h-[500px] lg:w-[35%]'>
              <SliderCarouselComponent
                sliderRef={(slider: Slider | null) =>
                  (sliderRef1.current = slider)
                }
                settings={imageSettings}
                className='image-slider h-full w-full'
              >
                {props.testimonialList.map((listImage, index) => (
                  <TestimonialImageComponent
                    alt={listImage.author}
                    key={index}
                    url={listImage.url}
                  />
                ))}
              </SliderCarouselComponent>
            </RightContainerComponent>
            <RightContainerComponent className='relative h-[500px] lg:w-[55%] xl:w-[65%]'>
              <SliderCarouselComponent
                sliderRef={(slider: Slider | null) =>
                  (sliderRef2.current = slider)
                }
                settings={contentSettings}
                className='content-slider h-full w-full'
              >
                {testimonialList.map((listImage, index) => (
                  <TestimonialListComponent {...listImage} key={index} />
                ))}
              </SliderCarouselComponent>
              <SliderButtonComponent
                handleBackwardClick={previous}
                handleForwardClick={next}
                className='absolute bottom-[27%] right-0'
              />
            </RightContainerComponent>
          </div>
        </div>
        <DividerComponent className='h-[80px] lg:h-[130px]' />
      </section>
    </>
  );
};
