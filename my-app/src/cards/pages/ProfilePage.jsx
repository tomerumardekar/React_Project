import React from "react";
import { useUser } from "../../users/providers/UserProvider";
import { Container, Typography } from "@mui/material";

export default function UserPage() {
  const { user } = useUser();

  return (
    <Container sx={{ width: "80vw", marginTop: "10vh" }}>
      <Typography
        variant="h3"
        color="initial"
        style={{ fontFamily: "Arial", marginBottom: "2vh" }}
      >
        Hello, {user?.firstName}!
      </Typography>
      <img
        src={user?.image?.url}
        alt={user?.image?.alt}
        style={{ marginBottom: "2vh" }}
      />
      <Typography
        variant="h5"
        color="initial"
        style={{ fontFamily: "Arial", marginBottom: "1vh" }}
      >
        Name: {user?.firstName} {user?.name?.middle} {user?.last}
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        style={{ fontFamily: "Arial", marginBottom: "1vh" }}
      >
        Email: {user?.email}
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        style={{ fontFamily: "Arial", marginBottom: "1vh" }}
      >
        Phone: {user?.phone}
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        style={{ fontFamily: "Arial", marginBottom: "1vh" }}
      >
        Address: {user?.address?.city} {user?.address?.street}{" "}
        {user?.address?.hoeNumber} {user?.address?.country} {user?.address?.zip}
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        style={{ fontFamily: "Arial", marginBottom: "1vh" }}
      >
        IsBusiness: {user?.isBusiness ? "yes" : "no"}
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        style={{ fontFamily: "Arial", marginBottom: "1vh" }}
      >
        IsAdmin: {user?.isAdmin ? "yes" : "no"}
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        style={{ fontFamily: "Arial", marginBottom: "1vh" }}
      >
        User ID: {user?.user_id}
      </Typography>
    </Container>
  );
}
