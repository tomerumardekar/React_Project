import React, { useCallback } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import { Container } from "@mui/material";
import CardsFeedback from "../components/CardsFeedback";

export default function FAV_CARDS() {
  const { value, ...rest } = useCards();
  const { isLoading, error, cards } = value;
  const { handleDeleteCard, handleGetFavCards, handleLikeCard } = rest;

  useEffect(() => {
    handleGetFavCards();
  }, [handleGetFavCards]);

  const onDeleteCard = useCallback(
    async (id) => {
      await handleDeleteCard(id);
      await handleGetFavCards();
    },
    [handleDeleteCard, handleGetFavCards]
  );

  const changeLikeStatus = useCallback(
    async (id, isLike) => {
      await handleLikeCard(id, isLike);
      await handleGetFavCards();
    },
    [handleLikeCard, handleGetFavCards]
  );

  return (
    <Container>
      <PageHeader
        title="Favorite Cards"
        subtitle="On this page you can find all your favorite business cards"
      />
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
}
