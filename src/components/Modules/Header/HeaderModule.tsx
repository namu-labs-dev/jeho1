import React from "react";
import { DrawerComponent } from "~/components/Components/DrawerComponent/DrawerComponent";
import { HeaderComponent } from "~/components/Components/HeaderComponent/HeaderComponent";
import { MouseCursorComponent } from "~/components/Components/MouseCursorComponent/MouseCursorComponent";
import { NavbarComponent } from "~/components/Components/NavbarComponent/NavbarComponent";

type Props = {
  navbarComponentProps: React.ComponentProps<typeof NavbarComponent>;
  drawerComponentProps: React.ComponentProps<typeof DrawerComponent>;
  mouseCursorComponentProps: React.ComponentProps<typeof MouseCursorComponent>;
  headerComponentProps: React.ComponentProps<typeof HeaderComponent>;
};

export const HeaderModule = (props: Props) => {
  return (
    <>
      <NavbarComponent {...props.navbarComponentProps} />
      <DrawerComponent {...props.drawerComponentProps} />
      <MouseCursorComponent {...props.mouseCursorComponentProps} />
      <HeaderComponent {...props.headerComponentProps} />
    </>
  );
};
