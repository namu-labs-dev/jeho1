import React from "react";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";
import { PricingCardComponent } from "~/components/Components/PricingCardComponent/PricingCardComponent";
import { RightContainerComponent } from "~/components/Components/RightContainerComponent/RightContainerComponent";
import { ServiceButtonComponent } from "~/components/Components/ServiceButtonComponent/ServiceButtonComponent";
import { type PackagelistProps } from "~/data/packagelist";

type Props = {
  leftContainerComponentProps: React.ComponentProps<
    typeof LeftContainerComponent
  >;
  serviceButtonComponentProps: React.ComponentProps<
    typeof ServiceButtonComponent
  >;
  packagelist: PackagelistProps[];
  isActive: string;
};

export const ServicePricingPackModule = (props: Props) => {
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[150px]' />
      <section className='px-[.75rem] text-white'>
        <div className='container mx-auto flex flex-col'>
          <div className='flex w-full flex-col items-start justify-between gap-[25px] lg:flex-row'>
            <LeftContainerComponent
              className='xl:w-[30%]'
              {...props.leftContainerComponentProps}
            />
            <ServiceButtonComponent {...props.serviceButtonComponentProps} />
          </div>
          <RightContainerComponent className='mt-[60px] flex flex-col items-center gap-[25px] lg:flex-row'>
            {props.packagelist.map((list, index) => (
              <PricingCardComponent
                isActive={props.isActive}
                key={index}
                {...list}
              />
            ))}
          </RightContainerComponent>
        </div>
      </section>
    </>
  );
};
