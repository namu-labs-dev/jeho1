import { Button, Input, Space } from "antd";
import React from "react";

const SubscribeComponent = () => {
  return (
    <div className='mt-[30px] flex flex-col gap-[15px] lg:mt-0'>
      <p className='mb-[15px] text-[16px] font-semibold text-white lg:text-[18px]'>
        Subscribe
      </p>
      <Space.Compact className='flex h-[50px] items-center rounded-[10px] bg-black px-[5px]'>
        <Input
          className='h-full border-none bg-black'
          placeholder='example@gmail.com'
        />
        <Button
          htmlType='button'
          type='default'
          className='border-none bg-accentRed'
        >
          Send
        </Button>
      </Space.Compact>
      <p className='text-[16px] lg:text-[18px]'>
        At vero eos et accusamus et iusto odio as part dignissimos ducimus qui
        blandit.
      </p>
    </div>
  );
};

export default SubscribeComponent;
