import React from "react";
import { useUser } from "../../users/providers/UserProvider";
import { Container, Typography } from "@mui/material";

export default function UserPage() {
  const { user } = useUser();

  return (
    <Container sx={{ width: "80vw", marginTop: "4vh" }}>
      <img src={user?.image?.url} alt={user?.image?.alt} />
      <Typography variant="body1" color="initial">
        Name:{user?.firstName} {user?.name?.middle} {user?.last}{" "}
      </Typography>{" "}
      <br></br>
      <Typography variant="body1" color="initial">
        Email: {user?.email}{" "}
      </Typography>{" "}
      <br></br>
      <Typography variant="body1" color="initial">
        Phone: {user?.phone}{" "}
      </Typography>{" "}
      <br></br>
      <Typography variant="body1" color="initial">
        Address:{user?.address?.city} {user?.address?.street}{" "}
        {user?.address?.hoeNumber} {user?.address?.country} {user?.address?.zip}{" "}
      </Typography>{" "}
      <br></br>
      <Typography variant="body1" color="initial">
        IsBusiness: {user?.isBusiness ? "yes" : "no"}{" "}
      </Typography>{" "}
      <br></br>
      <Typography variant="body1" color="initial">
        IsAdmin: {user?.isAdmin ? "yes" : "no"}{" "}
      </Typography>{" "}
      <br></br>
      <Typography variant="body1" color="initial">
        User id: {user?.user_id}{" "}
      </Typography>{" "}
      <br></br>
    </Container>
  );
}
