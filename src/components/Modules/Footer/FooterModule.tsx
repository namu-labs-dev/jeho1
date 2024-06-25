import Link from "next/link";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import SubscribeComponent from "~/components/Components/SubscribeComponent/SubscribeComponent";

type Props = {
  // Add props here
};

export const FooterModule = (props: Props) => {
  return (
    <footer className='container mx-auto w-full px-[.7rem] text-accentGrey lg:p-0'>
      <div className='pb-[65px] pt-[95px]'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col gap-[20px]'>
              <SVGAtom iconName='logo' color='#FF4A17' width={89} height={30} />
              <p className='text-[18px]'>
                Welcome to arino sed ut perspiciae omunde omnis iste natus error
                sitort voluptatem accusantium.
              </p>
            </div>
            <div className='ml-0 mt-[30px] sm:mt-0 lg:ml-[30px]'>
              <p className='text-[16px] font-semibold text-white lg:text-[18px]'>
                Services
              </p>
              <ul className='mt-[15px] flex flex-col gap-[15px]'>
                <li className='max-w-[70%] text-[16px] lg:text-[18px]'>
                  <Link href={"#"}> UI/UX design</Link>
                </li>
                <li className='max-w-[70%] text-[16px] lg:text-[18px]'>
                  <Link href={"#"}>WP development</Link>
                </li>
                <li className='max-w-[70%] text-[16px] lg:text-[18px]'>
                  <Link href={"#"}>Digital marketing</Link>
                </li>
                <li className='max-w-[70%] text-[16px] lg:text-[18px]'>
                  <Link href={"#"}>React development</Link>
                </li>
              </ul>
            </div>
            <div className='mt-[30px] sm:mt-0'>
              <p className='text-[16px] font-semibold text-white lg:text-[18px]'>
                Contact Us
              </p>
              <ul className='mt-[15px] flex flex-col gap-[15px]'>
                <li className='max-w-[70%] text-[16px] lg:text-[18px]'>
                  +44 454 7800 112
                </li>
                <li className='max-w-[70%] text-[16px] lg:text-[18px]'>
                  infotech@arino.com
                </li>
                <li className='max-w-[70%] text-[16px] lg:text-[18px]'>
                  50 Wall Street Suite, 44150 Ohio, United States
                </li>
              </ul>
            </div>
            <SubscribeComponent />
          </div>
        </div>
      </div>
      <div className='container text-[16px] lg:text-[18px]'>
        <div className='flex flex-col items-center justify-between border-t border-t-accentGrey py-[20px] md:flex-row'>
          <p>Copyright © 2024 Laralink.</p>
          <div className='flex items-center gap-[10px] py-[6px]'>
            <Link href={"#"}>Terms of Use</Link>
            <span>|</span>
            <Link href={"#"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
