import { type MotionValue, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import { listcard } from "~/data/listcard";

export const HomeContainer = () => {
  const cursorX: MotionValue<number> = useMotionValue(-100);
  const cursorY: MotionValue<number> = useMotionValue(-100);
  const [isBlack, setIsBlack] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState(false);

  const handleToggle = () => {
    setActiveNavbar(!activeNavbar);
  };

  const handleDrawer = () => {
    setActiveDrawer(!activeDrawer);
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setIsBlack(true);
      console.log(scrolled);
    } else if (scrolled <= 100) {
      setIsBlack(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);
  useEffect(() => {
    const mouseCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", mouseCursor);
    return () => {
      window.removeEventListener("mousemove", mouseCursor);
    };
  }, [cursorX, cursorY]);

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    whatCanWeDoModuleProps: {
      cardComponent: {
        lists: listcard,
      },
    },
    homeHeaderModuleProps: {
      drawerComponentProps: {
        activeDrawer,
        handleDrawer,
      },
      mouseCursorComponentProps: {
        mouseCursorAtomProps: {
          cursorX,
          cursorY,
        },
        cursorX,
        cursorY,
      },
      navbarComponentProps: {
        activeNavbar,
        handleDrawer,
        handleToggle,
        isBlack,
      },
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
