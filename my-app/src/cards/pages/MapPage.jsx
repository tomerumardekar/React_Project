import React, { useState } from "react";
import Map from "../components/Map";
import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
const MapPage = ({ address }) => {
  const [center, setCenter] = useState([]);

  useEffect(() => {
    if (address) {
      const convertAddressToLatLng = async (address) => {
        const url = `https://nominatim.openstreetmap.org/?q=${address}&format=json`;
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.length > 0) {
          const tempCenter = [data[0].lat, data[0].lon];
          setCenter(tempCenter);
        } else {
          throw new Error("Could not convert address to latlng");
        }
      };
      convertAddressToLatLng(address);
    }
  }, [address]);

  const mapPageStyle = {
    width: "80%",
  };

  const textSectionStyle = {
    width: "50%",
  };

  const mapSectionStyle = {
    width: "35%",
    height: "300px", // Adjust as needed
    margin: "20px",
    marginLeft: "180px",
  };

  return (
    <div style={mapPageStyle}>
      <div style={textSectionStyle}>
        <Typography variant="body2" gutterBottom></Typography>
      </div>
      <div style={mapSectionStyle}>
        {center.length > 0 && <Map center={center} zoom={13} />}
      </div>
    </div>
  );
};

export default MapPage;
