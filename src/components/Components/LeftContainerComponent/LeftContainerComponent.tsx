import LinkArrow from "../LinkArrow/LinkArrow";

type Props = {
  className?: string;
  subTitle: string;
  title: string;
  link?: string;
  text?: string;
  text2?: string;
};

export const LeftContainerComponent = (props: Props) => {
  const { className, subTitle, title, link, text, text2 } = props;
  return (
    <div className={`flex w-full flex-col gap-[20px] ${className}`}>
      <p className='text-[16px] font-semibold leading-[1.3em] text-accentGrey2 xl:text-[18px]'>
        {subTitle}
      </p>
      <h2 className='text-[42px] font-semibold text-whitish md:text-[50px]'>
        {title}
      </h2>
      {link && <LinkArrow title={link} />}
      {text && <p className='text-[18px] text-accentGrey'>{text}</p>}
      {text2 && <p className='text-[18px] text-accentGrey'>{text2}</p>}
    </div>
  );
};
