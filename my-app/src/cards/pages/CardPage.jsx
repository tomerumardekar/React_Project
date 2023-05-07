import { Container, Button, Box } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";

import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function CardPage() {
  const navigate = useNavigate();
  const { value, handleGetCards, handleDeleteCard } = useCards();
  const { error, isLoading, filterCards } = value;
  console.log(filterCards);
  useEffect(() => {
    handleGetCards();
  }, []);
  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    await handleGetCards();
  };
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all business cards from all categories "
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button
            variant="contained"
            sx={{ bgcolor: "grey.500", color: "white", mr: 1 }}
            onClick={() => navigate(ROUTES.ADDNEWCARD)}
          >
            New Card
          </Button>
        </Box>

        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}
