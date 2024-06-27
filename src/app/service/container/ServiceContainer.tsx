import { type MotionValue, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { ServiceTemplate } from "~/components/Templates/Service/ServiceTemplate";
import { icons } from "~/data/icons";
import { listcard } from "~/data/listcard";

export const ServiceContainer = () => {
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
  const serviceTemplateProps: React.ComponentProps<typeof ServiceTemplate> = {
    servicePricingPackModuleProps: { title: "ServicePricingPackModule" },
    whatCanWeDoModuleProps: {
      cardComponent: {
        lists: listcard,
      },
    },
    headerModuleProps: {
      headerComponentProps: {
        bgImage: "bg-other-bg",
        headerAtomProps: {
          currentPage: "Services",
          title: "Services",
          prevLink: "/service",
          prevText: "Home",
        },
      },
      mouseCursorComponentProps: {
        cursorX,
        cursorY,
        mouseCursorAtomProps: {
          cursorX,
          cursorY,
        },
      },
      navbarComponentProps: {
        activeNavbar,
        handleDrawer,
        handleToggle,
        isBlack,
      },
      drawerComponentProps: {
        activeDrawer,
        handleDrawer,
        socialComponents: {
          icon: icons,
        },
      },
    },
    footerModuleProps: {
      socialComponents: {
        icon: icons,
      },
      isDiscussion: true,
      DiscussionComponent: {
        title: "Let’s disscuse make something cool together",
      },
    },
  };

  return <ServiceTemplate {...serviceTemplateProps} />;
};
