import { Container, Button, Box } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";

import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import { useCallback } from "react";

export default function CardPage() {
  const navigate = useNavigate();
  const { value, handleGetCards, handleDeleteCard, handleLikeCard } =
    useCards();
  const { error, isLoading, filterCards } = value;
  const { user } = useUser();

  useEffect(() => {
    handleGetCards();
  }, []);
  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    await handleGetCards();
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
          subtitle="On this page you can find all business cards from all categories "
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          {user && (
            <Button
              variant="contained"
              sx={{ bgcolor: "grey.500", color: "white", mr: 1 }}
              onClick={() => navigate(ROUTES.ADDNEWCARD)}
            >
              New Card
            </Button>
          )}
        </Box>

        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={handleDelete}
          onLike={changeLikeStatus}
        />
      </Container>
    </div>
  );
}
