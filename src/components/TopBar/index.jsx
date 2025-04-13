import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";

function TopBar() {
  const location = useLocation();
  const { userId } = useParams();
  let context = "";

  if (location.pathname.startsWith("/users/") && !location.pathname.includes("photos")) {
    const user = models.userModel(userId);
    if (user) {
      context = `${user.first_name} ${user.last_name}`;
    }
  } else if (location.pathname.includes("/photos/")) {
    const user = models.userModel(userId);
    if (user) {
      context = `Photos of ${user.first_name} ${user.last_name}`;
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
           Photo sharing
        </Typography>
        <Typography>{context}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;