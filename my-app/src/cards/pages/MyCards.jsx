import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { useCallback } from "react";

export default function MyCards() {
  const { value, handleGetMyCards, handleDeleteCard, handleLikeCard } =
    useCards();
  const { error, isLoading, cards } = value;
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetMyCards();
    }
  }, [user, navigate, handleGetMyCards]);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    await handleGetMyCards();
  };

  const changeLikeStatus = useCallback(
    async (id, isLike) => {
      await handleLikeCard(id, isLike);
    },
    [handleLikeCard]
  );

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page, you can find your card."
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={cards}
          handleDelete={handleDelete}
          onLike={changeLikeStatus}
        />
      </Container>
    </div>
  );
}
