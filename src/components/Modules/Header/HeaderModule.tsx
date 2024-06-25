import React from "react";
import { DrawerComponent } from "~/components/Components/DrawerComponent/DrawerComponent";
import { NavbarComponent } from "~/components/Components/NavbarComponent/NavbarComponent";

type Props = {
  navbarComponentProps: React.ComponentProps<typeof NavbarComponent>;
  drawerComponentProps: React.ComponentProps<typeof DrawerComponent>;
};

export const HeaderModule = (props: Props) => {
  return (
    <>
      <NavbarComponent {...props.navbarComponentProps} />
      <DrawerComponent {...props.drawerComponentProps} />
    </>
  );
};
