import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";

import RightNavBar from "./right-navigation/RightNavBar";
import { MenuProvider } from "./menu/MenuProvider";
import Search from "../topNavBar/left-navigation/Search";
import { useTheme } from "@emotion/react";

export default function NavBar() {
  const { isDark } = useTheme();
  return (
    <MenuProvider sx={{ backgroundColor: isDark ? "#333333" : "#4682B4" }}>
      <AppBar position="sticky" elevation={10}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />
          <Search />
          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}
