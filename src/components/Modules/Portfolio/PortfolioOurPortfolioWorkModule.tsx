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
  activeTag: string;
};

export const PortfolioOurPortfolioWorkModule = (props: Props) => {
  const filteredPortfolio =
    props.activeTag === "All"
      ? props.portfolioContent
      : props.portfolioContent.filter((item) => item.tag === props.activeTag);
  const getPortfolioItemClasses = (activeTag: string, index: number) => {
    if (activeTag === "Mobile Apps") {
      return "mobile";
    } else if (activeTag === "Logo Design") {
      return index === 0 ? "logo" : index === 1 ? "logo2" : "";
    } else {
      return "";
    }
  };
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[145px]' />
      <section className='w-full px-[.75rem] text-white'>
        <div className='container mx-auto flex w-full flex-col'>
          <div className='flex w-full flex-col items-start justify-between gap-[30px] xl:flex-row xl:items-end'>
            <LeftContainerComponent
              className='xl:w-[40%]'
              {...props.leftContainerComponentProps}
            />
            <PortfolioTagsComponents {...props.portfolioTagsComponentsProps} />
          </div>
          <DividerComponent className='h-[45px] lg:h-[90px]' />
          <div className='grid-container'>
            {filteredPortfolio.map((list, index) => (
              <div
                key={index}
                className={`portfolio group ${getPortfolioItemClasses(props.activeTag, index)} relative h-[490px] w-full overflow-hidden`}
              >
                <div className='portfolio_hover overflow-hidden'></div>
                <Link
                  href={"#"}
                  className='relative block h-full w-full overflow-hidden rounded-[20px] hover:text-white'
                >
                  <Image
                    src={list.url}
                    className='block h-full w-full overflow-hidden object-cover'
                    fill
                    alt={list.tag}
                  />
                  <div className='absolute bottom-[-60px] left-[-40px] z-10 flex h-[300px] w-[300px] flex-col items-start justify-center rounded-full bg-accentRed pl-[60px] opacity-0 transition-all duration-1000 group-hover:opacity-100'>
                    <h2 className='text-[22px] opacity-100'>
                      Colorful Art Work
                    </h2>
                    <p className='mt-1 text-[17px] text-accentGrey'>
                      See Details
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
