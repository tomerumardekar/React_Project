import React from "react";
import { useUser } from "../../users/providers/UserProvider";
import { Container, Typography } from "@mui/material";
/* import { user } from "../../../src/users/helpers/normalization/mapUserToModel"; */

export default function UserPage() {
  const { user } = useUser();

  console.log(user);

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <nav
        style={{
          backgroundColor: "#2196f3",
          padding: "1rem",
          marginBottom: "2rem",
        }}
      >
        {/* Add your navbar content here */}
      </nav>
      <Container sx={{ width: "80vw", marginTop: "10vh" }}>
        <Typography
          variant="h3"
          color="initial"
          style={{ fontFamily: "Arial", marginBottom: "2vh" }}
        >
          Hello, you've reached your profile page {user?.first}!
        </Typography>

        <Typography
          variant="h5"
          color="initial"
          style={{ fontFamily: "Arial", marginBottom: "1vh" }}
        >
          Name: {user?.first} {user?.middle} {user?.last}
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
          {user?.address?.hoeNumber} {user?.address?.country}{" "}
          {user?.address?.zip}
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
    </div>
  );
}
