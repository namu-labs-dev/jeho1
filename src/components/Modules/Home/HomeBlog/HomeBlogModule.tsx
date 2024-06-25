import Image from "next/image";
import Link from "next/link";
import { type Settings } from "react-slick";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";
import { RightContainerComponent } from "~/components/Components/RightContainerComponent/RightContainerComponent";
import SliderCarouselComponent from "~/components/Components/SliderCarouselComponent/SliderCarouselComponent";
import { postlist } from "~/data/postlist";
import "./custom.css";
type Props = {
  // Add props here
};
const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const HomeBlogModule = (props: Props) => {
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[150px]' />
      <section className='relative px-[.75rem]'>
        <div className='shape-1 hidden lg:block'></div>
        <div className='shape-2 hidden lg:block'></div>
        <div className='container mx-auto w-full'>
          <div className='flex flex-col items-start xl:flex-row'>
            <LeftContainerComponent
              subTitle='Our Blog'
              title='Explore recent publication'
              link='View More Blog'
              className='shrink-0 xl:w-[30%]'
            />
            <RightContainerComponent className='xl:w-[80%]'>
              <SliderCarouselComponent
                className='xl:relative xl:right-[-12rem]'
                settings={settings}
              >
                {postlist.map((post, index) => (
                  <div
                    key={index}
                    className={`relative mt-[20px] block h-[390px] w-[300px] shrink-0 overflow-hidden rounded-[15px] lg:h-[370px] xl:mt-0`}
                  >
                    <Link
                      href={"#"}
                      className={`relative block h-full w-full rounded-[12px]`}
                    >
                      <Image
                        src={post.url}
                        fill
                        className='h-full w-full max-w-[100%] rounded-[12px] object-cover'
                        alt={"title"}
                      />
                      <div className='absolute inset-0 flex items-end justify-end'>
                        <div className='absolute inset-0 rounded-[12px] bg-black bg-opacity-50'></div>
                        <div className='relative bottom-0 left-0 w-full px-[20px] py-[30px]'>
                          <p>{post.date}</p>
                          <h2 className='text-pContent1 relative left-0 pt-[14px] font-bold text-white'>
                            {post.title}
                          </h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </SliderCarouselComponent>
            </RightContainerComponent>
          </div>
        </div>
      </section>
      <DividerComponent className='h-[80px] lg:h-[150px]' />
    </>
  );
};
