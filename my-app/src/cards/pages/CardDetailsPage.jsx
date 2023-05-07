import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import mapCardToModel from "../helpers/normalization/mapToModel";

const CardDetailsPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const { handleGetCard } = useCards();

  useEffect(() => {
    handleGetCard(id).then((data) => {
      const modelCard = mapCardToModel(data);
      setCard(modelCard);
      console.log(data);
      console.log(card);
    });
  }, []);

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
              <strong>Ways of communication:</strong>
              {card.email}, {card.phone}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Directions:</strong> {card.street}, {card.houseNumber},
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

export default CardDetailsPage;
