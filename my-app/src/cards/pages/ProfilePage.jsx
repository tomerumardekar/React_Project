import React, { useEffect, useState } from "react";
import { useUser } from "../../users/providers/UserProvider";
import { Container, Typography } from "@mui/material";
import { getUser } from "../../users/services/usersApiService";

export default function UserPage() {
  const { user } = useUser();
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function fetchData() {
      if (user) {
        const result = await getUser(user.id);
        console.log(result);
        setUserData(result);
      }
    }
    fetchData();
  }, [user]);

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
          Hello, you've reached your profile page {userData?.name?.first}{" "}
          {userData?.name?.last}!
        </Typography>

        <Typography
          variant="h5"
          color="initial"
          style={{ fontFamily: "Arial", marginBottom: "1vh" }}
        >
          Name: {userData?.name?.first} {userData?.name?.middle}{" "}
          {userData?.name?.last}
        </Typography>
        <Typography
          variant="h6"
          color="initial"
          style={{ fontFamily: "Arial", marginBottom: "1vh" }}
        >
          Email: {userData?.email}
        </Typography>
        <Typography
          variant="h6"
          color="initial"
          style={{ fontFamily: "Arial", marginBottom: "1vh" }}
        >
          Phone: {userData?.phone}
        </Typography>
        <Typography
          variant="h6"
          color="initial"
          style={{ fontFamily: "Arial", marginBottom: "1vh" }}
        >
          Address: {userData?.address?.city} {userData?.address?.street}{" "}
          {userData?.address?.houseNumber} {userData?.address?.country}{" "}
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
          User ID: {userData?._id}
        </Typography>
      </Container>
    </div>
  );
}
