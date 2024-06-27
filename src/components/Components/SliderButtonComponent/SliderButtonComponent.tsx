import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

type Props = {
  handleBackwardClick: () => void;
  handleForwardClick: () => void;
  className?: string;
  // Add props here
};

export const SliderButtonComponent = (props: Props) => {
  const { handleBackwardClick, handleForwardClick, className } = props;

  return (
    <div className={`z-30 hidden items-center gap-[15px] xl:flex ${className}`}>
      <button
        onClick={handleBackwardClick}
        type='button'
        className='w-[80px] rounded-[5px] border-2 px-[10px] py-[4px] hover:border-accentRed hover:bg-accentRed'
      >
        <ArrowLeftOutlined className='text-[20px] text-white' />
      </button>
      <button
        onClick={handleForwardClick}
        type='button'
        className='w-[80px] rounded-[5px] border-2 px-[10px] py-[4px] hover:border-accentRed hover:bg-accentRed'
      >
        <ArrowRightOutlined className='text-[20px] text-white' />
      </button>
    </div>
  );
};
