import React from "react";

import { MenuProvider } from "./topNavBar/menu/MenuProvider";
import NavBar from "./topNavBar/NavBar";

export default function Header() {
  return (
    <>
      <MenuProvider>
        <NavBar />
      </MenuProvider>
    </>
  );
}
