import React from "react";
import LinkArrow from "../LinkArrow/LinkArrow";
import DividerComponent from "../DividerComponent/DividerComponent";
import "./custom.css";
type DiscussionComponentProps = {
  title: string;
};
const DiscussionComponent = (props: DiscussionComponentProps) => {
  const { title } = props;
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[145px]' />
      <div className='container mx-auto w-full px-[.75rem] xl:p-0'>
        <div className='relative z-20 flex h-[400px]  w-full flex-col items-center justify-center gap-[30px] rounded-[15px] bg-linear-gradient px-[30px] py-[40px] md:px-[50px] xl:flex-row xl:px-[80px] xl:py-[70px]'>
          <div className='cs-shape_1'></div>
          <div className='cs-shape_1'></div>
          <div className='cs-shape_1'></div>
          <div className='absolute bottom-0 left-0 -z-10 h-full w-full bg-fun-fact to-[100%] bg-[100%] bg-no-repeat'></div>
          <div className='flex flex-col items-center gap-[40px] text-white'>
            <h2 className='mb-[20px] w-full text-center text-[28px] font-bold sm:max-w-[590px] md:text-[36px] lg:text-[42px] xl:text-[50px]'>
              {title}
            </h2>
            <LinkArrow title='Apply For Meeting' />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscussionComponent;
