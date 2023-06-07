import { Container, Snackbar } from "@mui/material";
import React, { useState } from "react";

import useForm from "../../forms/hooks/useForm";

import CardForm from "../components/CardForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";

import cardSchema from "../models/joi-schema/cardSchema";

import { handleSubmit } from "../services/cardApiService";
import useCards from "../hooks/useCards";
import normalizeCard from "../helpers/normalization/normalizeCard";
import { useUser } from "../../users/providers/UserProvider";

export default function AddNewCard() {
  const [successMessage, setSuccessMessage] = useState("");
  const { handleCreateCard } = useCards();
  const { user } = useUser();
  console.log(user);
  const handleAddNewCard = async (newCard) => {
    await handleCreateCard({
      ...normalizeCard(newCard),
      user_id: user.id,
      BusinessNumber: newCard.BusinessNumber,
      likes: [],
    });
  };

  const handleSnackbarClose = () => {
    setSuccessMessage("");
  };

  const { value, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    handleAddNewCard
  );

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Snackbar
        open={Boolean(successMessage)}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        message={successMessage}
      />
      <CardForm
        title="new card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      />
    </Container>
  );
}
