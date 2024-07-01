import { type MotionValue, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { AboutTemplate } from "~/components/Templates/About/AboutTemplate";
import { aboutOurAgency } from "~/data/agency";
import { icons } from "~/data/icons";
import { listTitle } from "~/data/listfact";

export const AboutContainer = () => {
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

  const aboutTemplateProps: React.ComponentProps<typeof AboutTemplate> = {
    headerModuleProps: {
      headerComponentProps: {
        bgImage: "bg-hero-other",
        headerAtomProps: {
          currentPage: "About us",
          prevLink: "/",
          prevText: "Home",
          title: "About Us",
        },
      },
      drawerComponentProps: {
        activeDrawer,
        handleDrawer,
        socialComponents: {
          icon: icons,
        },
      },
      navbarComponentProps: {
        activeNavbar,
        handleDrawer,
        handleToggle,
        isBlack,
      },
      mouseCursorComponentProps: {
        cursorX,
        cursorY,
        mouseCursorAtomProps: {
          cursorX,
          cursorY,
        },
      },
    },
    aboutOurAgencyModuleProps: {
      data: aboutOurAgency.data,
      text: aboutOurAgency.text,
      title: aboutOurAgency.title,
      subTitle: aboutOurAgency.title,
    },
    whyChooseUsModuleProps: {},
    ourTeamModuleProps: {},
    footerModuleProps: {
      listTitleComponentProps: listTitle,
      info: "Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.",
      socialComponents: {
        icon: icons,
      },
      isDiscussion: true,
      DiscussionComponent: {
        title: "Let’s disscuse make something cool together",
      },
    },
  };

  return <AboutTemplate {...aboutTemplateProps} />;
};
