import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardForm from "../components/CardForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import mapCardToModel from "../helpers/normalization/mapToModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useCards from "../hooks/useCards";
import cardSchema from "../models/joi-schema/cardSchema";

export default function EditCardPage() {
  const { id } = useParams();
  const [cardData, setCardData] = useState();
  const {
    handleUpdateCard,
    handleGetCard,
    value: { card },
  } = useCards();
  const { user } = useUser();
  const navigate = useNavigate(); // New line: get the navigate function from React Router

  const { value, ...rest } = useForm(initialCardForm, cardSchema, (data) => {
    handleUpdateCard(card._id, {
      ...normalizeCard(data),
      user_id: user.id,
      BusinessNumber: data.BusinessNumber,
    }).then(() => {
      navigate(ROUTES.CARDS); // Navigate to the "cards" page after the card is updated
    });
  });

  useEffect(() => {
    handleGetCard(id).then((data) => {
      const modelCard = mapCardToModel(data);
      rest.setData(modelCard);
      setCardData(modelCard);
    });
  }, []);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cardData && (
        <CardForm
          title="edit card"
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          errors={value.errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          data={value.data}
        />
      )}
    </Container>
  );
}
