import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

function CardBusinessComponent({ card, handleDelete, handleEdit, onLike }) {
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ width: 250, m: 2 }}>
        <CardActionArea
          onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
        >
          <CardHead image={card.image} />
          <CardBody
            card
            title={card.title}
            subtitle={card.subtitle}
            phone={card.phone}
            address={card.address}
            cardNumber={card.BusinessNumber}
          />
        </CardActionArea>
        <CardActionBar
          _id={card._id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          onLike={onLike}
          user_id={card.user_id}
          cardLikes={card.likes}
        />
      </Card>
    </>
  );
}

CardBusinessComponent.propTypes = {
  handleDelete: PropTypes.func,
  onLike: PropTypes.func,
};

export default memo(CardBusinessComponent);
