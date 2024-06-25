import LinkArrow from "../LinkArrow/LinkArrow";

type Props = {
  className?: string;
  subTitle: string;
  title: string;
  link?: string;
};

export const LeftContainerComponent = (props: Props) => {
  const { className, subTitle, title, link } = props;
  return (
    <div className={`w-full ${className}`}>
      <p className='mb-[20px] text-[16px] font-semibold leading-[1.3em] text-accentGrey2 xl:text-[18px]'>
        {subTitle}
      </p>
      <h2 className='text-[42px] font-semibold text-whitish md:text-[50px]'>
        {title}
      </h2>
      {link && <LinkArrow title={link} />}
    </div>
  );
};
