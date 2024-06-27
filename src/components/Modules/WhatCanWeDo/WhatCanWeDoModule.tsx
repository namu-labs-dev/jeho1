import React from "react";
import { CardComponent } from "~/components/Components/CardComponent/CardComponent";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";
import { RightContainerComponent } from "~/components/Components/RightContainerComponent/RightContainerComponent";

type whatCanWeDoProps = {
  cardComponent: React.ComponentProps<typeof CardComponent>;
  // Add props here
};

export const WhatCanWeDoModule = (props: whatCanWeDoProps) => {
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[150px]' />
      <section className='px-[.75rem] text-white'>
        <div className='container mx-auto flex flex-col items-start xl:flex-row'>
          <LeftContainerComponent
            title='Services we can help you with'
            className='xl:w-[30%]'
            subTitle='What Can We Do'
            link='See All Services'
          />
          <RightContainerComponent className='xl:w-[70%]'>
            <CardComponent {...props.cardComponent} />
          </RightContainerComponent>
        </div>
      </section>
    </>
  );
};
