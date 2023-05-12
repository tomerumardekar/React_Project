import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import mapCardToModel from "../helpers/normalization/mapToModel";
import Map from "../components/Map";

const CardDetailsPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const { getCard } = useCards();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCard(id);
      const modelCard = mapCardToModel(data);
      setCard(modelCard);
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      <PageHeader
        title="Card details"
        subtitle="Here you can find all the details about a specific card"
      />

      {card && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              {card.title}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {card.subtitle}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {card.description}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {card.about}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Ways of communication:</strong> {card.email}, {card.phone}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Directions:</strong> {card.street}, {card.houseNumber},{" "}
              {card.city}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={"/" + card.imageUrl}
              alt="Card image"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

const MapPage = () => {
  const mapPageStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const textSectionStyle = {
    width: "50%",
  };

  const mapSectionStyle = {
    width: "40%",
    height: "400px", // Adjust as needed
    margin: "20px",
  };

  return (
    <div style={mapPageStyle}>
      <div style={textSectionStyle}>
        <h1>Map Page</h1>
        <p>
          This is some text that will appear next to the map. You can replace
          this text with whatever you want.
        </p>
      </div>
      <div style={mapSectionStyle}>
        <Map center={[51.505, -0.09]} zoom={13} />
      </div>
    </div>
  );
};

export { MapPage, CardDetailsPage };
