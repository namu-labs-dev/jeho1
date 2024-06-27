import React, { type RefObject, type PropsWithChildren } from "react";
import Slider, { type Settings } from "react-slick";
import "./custom.css";
type SliderCarouselComponentProps<T> = {
  settings: Settings;
  className?: string;
  sliderRef?: ((slider: Slider | null) => void) | RefObject<Slider>;
};

const SliderCarouselComponent = <T,>({
  settings,
  children,
  className,
  sliderRef,
}: PropsWithChildren<SliderCarouselComponentProps<T>>) => {
  return (
    // <div className='h-full w-full'>
    <div className={`slider-container ${className}`}>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
    // </div>
  );
};

export default SliderCarouselComponent;
