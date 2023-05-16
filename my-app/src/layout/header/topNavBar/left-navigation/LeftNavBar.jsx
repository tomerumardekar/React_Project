import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import { useTheme } from "@emotion/react";
export default function LeftNavBar() {
  const { user } = useUser();
  const { isDark } = useTheme();

  return (
    <Box>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <Logo />
        <NavItem
          to={ROUTES.HOME}
          label={
            <span style={{ color: isDark ? "white !important" : "black" }}>
              Home
            </span>
          }
          /*  sx={{ color: "inherit" }} */
        />

        <NavItem to={ROUTES.CARDS} label="Cards" />
        <NavItem to={ROUTES.ABOUT} label="About" />

        {user?.isBusiness && <NavItem to={ROUTES.MY_CARDS} label="My cards" />}
        {user && <NavItem to={ROUTES.FAV_CARDS} label="Favorite Cards" />}
        {user?.isAdmin && <NavItem to={ROUTES.SANDBOX} label="Sandbox" />}
      </Box>
    </Box>
  );
}
