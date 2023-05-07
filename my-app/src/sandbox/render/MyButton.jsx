import { Button } from "@mui/material";
import React, { memo } from "react";

function MyButton({ children, handleClick }) {
  console.log("My button is rende" + children);
  return (
    <Button onClick={handleClick} variant="outlined">
      {children}
    </Button>
  );
}

export default memo(MyButton);
