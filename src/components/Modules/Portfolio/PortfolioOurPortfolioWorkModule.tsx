import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";
import { PortfolioTagsComponents } from "~/components/Components/PortfolioTagsComponents/PortfolioTagsComponents";
import "./custom.css";
import Link from "next/link";
import { type portfolioListContentprops } from "~/data/portfolioList";
import Image from "next/image";
type Props = {
  leftContainerComponentProps: React.ComponentProps<
    typeof LeftContainerComponent
  >;
  portfolioTagsComponentsProps: React.ComponentProps<
    typeof PortfolioTagsComponents
  >;
  portfolioContent: portfolioListContentprops[];
};

export const PortfolioOurPortfolioWorkModule = (props: Props) => {
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[145px]' />
      <section className='w-full px-[.75rem] text-white'>
        <div className='container mx-auto flex w-full flex-col'>
          <div className='flex w-full flex-col items-end justify-between xl:flex-row'>
            <LeftContainerComponent
              className='xl:w-[40%]'
              {...props.leftContainerComponentProps}
            />
            <PortfolioTagsComponents {...props.portfolioTagsComponentsProps} />
          </div>
          <div className='grid-container'>
            {props.portfolioContent.map((list, index) => (
              <div key={index} className={`portfolio h-[490px]`}>
                <Link href={"#"} className='relative block h-full w-full'>
                  <Image
                    src={list.url}
                    className='block h-full w-full'
                    fill
                    alt={list.tag}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
