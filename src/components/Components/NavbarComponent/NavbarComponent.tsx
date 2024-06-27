import { MenuOutlined } from "@ant-design/icons";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { NavListComponents } from "../NavListComponents/NavListComponents";

type navBarAtomProps = {
  isBlack: boolean;
  activeNavbar: boolean;
  handleToggle: () => void;
  handleDrawer: () => void;
};

export const NavbarComponent = (props: navBarAtomProps) => {
  const { isBlack, activeNavbar, handleDrawer, handleToggle } = props;
  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 ${isBlack ? "bg-black" : "bg-transparent"} h-[100px] w-full text-white xl:p-0`}
    >
      <div className='container relative mx-auto flex h-full items-center justify-between'>
        <SVGAtom
          iconName='logo'
          width={89}
          height={30}
          color='#FF4A17'
          className='pl-[.75rem]'
        />

        <NavListComponents activeNavbar={activeNavbar} />

        <div className='relative z-50 pr-[.75rem]'>
          <button
            type='button'
            className='block text-[30px] font-light text-white xl:hidden'
          >
            <MenuOutlined onClick={handleToggle} />
          </button>
          <button
            type='button'
            className='hidden h-[45px] w-[45px] items-center justify-center rounded-full border-2 font-light text-white xl:flex'
          >
            <MenuOutlined onClick={handleDrawer} className='text-[20px] ' />
          </button>
        </div>
      </div>
    </nav>
  );
};
