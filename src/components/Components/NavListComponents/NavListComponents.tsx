import { DownOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "~/data/navLinks";

type Props = {
  activeNavbar: boolean;
  // Add props here
};

export const NavListComponents = (props: Props) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [mobileNav, setMobileNav] = useState<number | null>(null);
  const { activeNavbar } = props;
  const handleMouseEnter = (index: number) => {
    setVisibleIndex(index);
  };

  const handleMouseLeave = () => {
    setVisibleIndex(null);
  };
  return (
    <div
      className={`absolute z-50 overflow-hidden transition-all duration-500 ease-linear xl:left-[50%] xl:top-[50%] xl:overflow-auto ${activeNavbar ? "top-[100px] max-h-[600px]" : "top-[100px] max-h-0"} w-full items-center justify-center text-white xl:flex xl:max-h-20 xl:-translate-x-[50%] xl:-translate-y-[50%]`}
    >
      <ul
        className={`flex max-h-[900px] flex-col gap-[45px] border-y bg-primaryColor py-[30px] xl:border-none xl:bg-transparent ${activeNavbar ? "w-full flex-col" : ""} xl:flex-row`}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className='group relative overflow-hidden px-[20px] transition-all duration-500 ease-linear xl:overflow-auto xl:p-0 '
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <div className='flex items-center justify-between'>
              <Link
                href={link.link}
                className='flex items-center gap-[10px] overflow-hidden text-[16px] hover:text-accentRed'
              >
                <span>{link.label}</span>

                {link.children && link.children.length > 0 && (
                  <DownOutlined className='hidden text-[12px] xl:block' />
                )}
              </Link>
              {mobileNav !== index && link.label !== "About" && (
                <button type='button' onClick={() => setMobileNav(index)}>
                  <PlusOutlined className='block xl:hidden' />
                </button>
              )}
              {mobileNav === index && link.label !== "About" && (
                <button type='button' onClick={() => setMobileNav(null)}>
                  <MinusOutlined className='block xl:hidden' />
                </button>
              )}
            </div>
            {link?.children && link?.children?.length > 0 && (
              <ul
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`transition-all duration-500 ease-in xl:border-t-2 ${mobileNav === index ? "flex h-full max-h-[600px] min-h-[100px] overflow-hidden bg-transparent" : "max-h-0"} absolute left-0 top-[30px] w-full flex-col gap-[20px] p-0 px-[10px] xl:absolute xl:max-h-[600px] xl:w-[280px] xl:rounded-b-[7px] xl:border-t-accentRed xl:py-[20px]  ${visibleIndex === index ? "xl:flex xl:bg-[#181818]" : "xl:hidden"}`}
              >
                {link.children?.map((item, index) => (
                  <li key={index} className='text-[17px]'>
                    <Link href={item?.link} className='hover:text-accentRed'>
                      {item?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
