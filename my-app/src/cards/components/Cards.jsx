import { Grid } from "@mui/material";
import React from "react";
import CardBussinesComponent from "./card/CardBussinesComponent";
import PropTypes from "prop-types";
import { arrayOf, shape, string } from "prop-types";

export default function Cards({ cards, handleDelete, onLike, handleEdit }) {
  return (
    <>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardBussinesComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              onLike={onLike}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(
    shape({
      _id: string.isRequired,
      title: string.isRequired,
      subtitle: string.isRequired,
      phone: string.isRequired,
      address: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
      user_id: string.isRequired,
      likes: arrayOf(string),
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  /* onLike: PropTypes.func.isRequired, */
};
