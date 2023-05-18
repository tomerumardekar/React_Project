import { CardMedia } from "@mui/material";
import React from "react";
import imgType from "../../models/types/imgType";

export default function CardHead({ image }) {
  return (
    <CardMedia
      component="img"
      height="140"
      image={
        image.url ? image.url : "assets/images/business-card-top-image.jpg"
      }
      alt={image ? image.alt : "aaaaa"}
    />
  );
}
