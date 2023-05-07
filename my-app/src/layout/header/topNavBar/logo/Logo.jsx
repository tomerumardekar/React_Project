import { Typography } from "@mui/material";
import React from "react";

import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";
import { useTheme } from "@emotion/react";

export default function Logo() {
  const { isDark } = useTheme();
  return (
    <>
      <NavBarLink to={ROUTES.HOME}>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            marginRight: 2,
            fontFamily: "fantasy",
          }}
        >
          <div
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "transparent",
            }}
          >
            <span style={{ color: isDark ? "white" : "black" }}>B</span>
            <span style={{ color: isDark ? "black" : "white" }}>Card</span>
          </div>
        </Typography>
      </NavBarLink>
    </>
  );
}
