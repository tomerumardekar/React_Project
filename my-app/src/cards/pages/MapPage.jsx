import React, { useState } from "react";
import Map from "../components/Map";
import { Typography } from "@mui/material";
const MapPage = () => {
  const mapPageStyle = {
    width: "80%",
  };

  const textSectionStyle = {
    width: "50%",
  };

  const mapSectionStyle = {
    width: "40%",
    height: "400px", // Adjust as needed
    margin: "20px",
    marginLeft: "180px",
  };

  return (
    <div style={mapPageStyle}>
      <div style={textSectionStyle}>
        <Typography variant="body2" gutterBottom></Typography>
      </div>
      <div style={mapSectionStyle}>
        <Map center={[51.505, -0.09]} zoom={13} />
      </div>
    </div>
  );
};

export default MapPage;
