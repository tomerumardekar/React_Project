import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import InfoIcon from "@mui/icons-material/Info";
import Favorite from "@mui/icons-material/Favorite";
import { useUser } from "../../users/providers/UserProvider";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import StyleIcon from "@mui/icons-material/Style";

export default function Footer() {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <Paper
      sx={{
        backgroundColor: "#FFFFE0",
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        <BottomNavigationAction
          label="Cards"
          icon={<StyleIcon />}
          onClick={() => navigate(ROUTES.CARDS)}
        />
        {user && (
          <BottomNavigationAction
            label="Favorite Cards"
            icon={<Favorite />}
            onClick={() => navigate(ROUTES.FAV_CARDS)}
          />
        )}
        {user?.isBusiness && (
          <BottomNavigationAction
            label="MY Cards"
            icon={<RecentActorsIcon />}
            onClick={() => navigate(ROUTES.MY_CARDS)}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
}
