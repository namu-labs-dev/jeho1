import { ArrowRightOutlined } from "@ant-design/icons";
import LinkArrow from "../LinkArrow/LinkArrow";
import "./custom.css";
type Props = {
  title: string;
  priceMonthly: number;
  priceYearly: number;
  period: string;
  pricingListText: string[];
  isActive: string;
};

export const PricingCardComponent = (props: Props) => {
  const {
    title,
    period,
    priceMonthly,
    priceYearly,
    pricingListText,
    isActive,
  } = props;
  return (
    <div className='active-hover relative w-full overflow-hidden rounded-[10px] bg-linear-gradient px-[45px] xl:w-[33.3%]'>
      <div className='border-b border-b-accentGrey2 py-[30px]'>
        <h3 className='text-[36px] font-semibold'>{title}</h3>
      </div>
      <div className='border-b border-b-accentGrey2 py-[20px] pb-[23px]'>
        <h3 className='mb-[5px] text-[36px] font-semibold'>
          $
          {isActive.toLocaleLowerCase() === "monthly"
            ? priceMonthly
            : priceYearly}
          /
          <span className='text-[14px] text-accentRed'>
            {isActive.toLocaleLowerCase()}
          </span>
        </h3>
        <p className='text-[14px] text-accentGrey2'>Per subscriber per year</p>
      </div>
      <div className='flex flex-col gap-[16px] border-b border-b-accentGrey2 py-[35px] pb-[25px]'>
        {pricingListText.map((text, index) => (
          <div key={index} className='flex items-center gap-[10px]'>
            <div className='flex h-[20px] w-[20px] items-center justify-center rounded-full border border-accentRed'>
              <ArrowRightOutlined className='text-[10px] text-accentRed' />
            </div>
            <p className='text-[18px] text-accentGrey2'>{text}</p>
          </div>
        ))}
      </div>
      <div className='py-[25px]'>
        <LinkArrow title='Purchase Now' />
      </div>
    </div>
  );
};
