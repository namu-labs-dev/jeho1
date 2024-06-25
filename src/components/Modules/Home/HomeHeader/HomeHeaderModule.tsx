import Link from "next/link";
import LinkArrow from "~/components/Components/LinkArrow/LinkArrow";
import { MouseCursorComponent } from "~/components/Components/MouseCursorComponent/MouseCursorComponent";
import { NavbarComponent } from "~/components/Components/NavbarComponent/NavbarComponent";
import "./custom.css";
import { FunFactComponent } from "~/components/Components/FunFactComponent/FunFactComponent";
import { DrawerComponent } from "~/components/Components/DrawerComponent/DrawerComponent";
type Props = {
  // Add props here
  navbarComponentProps: React.ComponentProps<typeof NavbarComponent>;
  mouseCursorComponentProps: React.ComponentProps<typeof MouseCursorComponent>;
  drawerComponentProps: React.ComponentProps<typeof DrawerComponent>;
};

export const HomeHeaderModule = (props: Props) => {
  return (
    <>
      <NavbarComponent {...props.navbarComponentProps} />
      <DrawerComponent {...props.drawerComponentProps} />

      <MouseCursorComponent {...props.mouseCursorComponentProps} />
      <header className='relative flex min-h-[980px] w-full flex-col justify-center bg-hero-Image bg-cover bg-fixed bg-[50%]'>
        <div className='cs-shape_1'></div>
        <div className='cs-shape_1'></div>
        <div className='cs-shape_1'></div>
        <div className='container mx-auto pb-[220px] pt-[60px]'>
          <div className='w-full'>
            <h1 className='mb-[20px] text-[42px] font-bold sm:text-[50px] md:text-[60px] lg:mb-[60px] lg:text-[100px] xl:text-[130px] xl:leading-[150px]'>
              Creativity In
              <br />
              Our Blood Line
            </h1>
            <div className='flex w-full flex-col-reverse lg:flex-row lg:items-center lg:justify-between'>
              <LinkArrow title='Get a Quote' />
              <p className='mb-[24px] text-[1rem] leading-[1.9em] lg:w-[50%]'>
                We deliver best problem solving solution for our client and
                provide finest finishing product in present and upcoming future.
              </p>
            </div>
          </div>
        </div>
        <div className='absolute -right-[78px] top-[35%] z-40 hidden translate-y-[85%] -rotate-90 items-center gap-[12px] text-[17px] text-white xl:flex'>
          <div className='flex items-center gap-[10px]'>
            <p className=''>Follow Us</p>
            <hr className='w-[20px]' />
          </div>
          <ul className='flex items-center gap-[16px]'>
            <li>
              <Link href={"#"}>Behance</Link>
            </li>
            <p>|</p>
            <li>
              <Link href={"#"}>Twitter</Link>
            </li>
          </ul>
        </div>
        <Link
          href={"#"}
          className='motion-link absolute bottom-[30%] left-[50%] z-10 -ml-[10px] h-[35px] w-[20px] rounded-[10px] border-2 text-white transition-all duration-300 ease-in'
        ></Link>
      </header>
      <FunFactComponent />
    </>
  );
};
