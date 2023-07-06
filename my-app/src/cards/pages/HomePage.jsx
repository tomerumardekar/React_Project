import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { Typography, Container } from "@mui/material";

import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

export default function HomePage() {
  const { value, handleGetCards, handleDeleteCard, handleLikeCard } =
    useCards();
  const { error, isLoading, filterCards } = value;

  useEffect(() => {
    handleGetCards();
  }, [handleGetCards]);
  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    await handleGetCards();
  };
  const changeLikeStatus = async (id, isLike) => {
    await handleLikeCard(id, isLike);
  };
  return (
    <Container sx={{ mt: 2 }}>
      <PageHeader
        title="Welcome to our Business Card Manager "
        subtitle=" Log in to access your business cards"
      />
      <Typography
        sx={{
          fontSize: "1.2rem",
          lineHeight: "1.6",
        }}
      >
        Welcome to our site! Here you can find a vast collection of business
        cards that are engaging in fashion and will surely make a great
        impression on your clients and business partners. Whether you're in the
        fashion industry or just looking for a unique and stylish design, we've
        got you covered. Our site also allows you to add and manage your own
        business cards, giving you complete control over your professional
        image. You can choose your favorite designs and showcase your brand in
        the best possible light. With our easy-to-use login form, you can
        quickly and securely access your account and start browsing through our
        collection of business card previews. Our opening page is designed to
        give you a clear idea of the types of business cards we offer, and we
        invite you to register and start exploring all that our site has to
        offer. Thank you for choosing our site, and we look forward to helping
        you make a lasting impression with your business cards!
      </Typography>
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filterCards}
        handleDelete={handleDelete}
        onLike={changeLikeStatus}
      />
    </Container>
  );
}
