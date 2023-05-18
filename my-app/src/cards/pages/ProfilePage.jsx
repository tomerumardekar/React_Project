import React, { useState } from "react";
import { Avatar, Box, Container, TextField, Typography } from "@mui/material";

export default function ProfilePage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [username, setUsername] = useState("johndoe");
  const [password, setPassword] = useState("123456");

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh", // Center the container vertically on the page
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{
            width: 180,
            height: 180,
            mb: 2,
            p: 0.5,
            mt: 3,
            alignSelf: "center",
          }}
          alt="Profile Picture"
          src="/assets/images/avatar.png"
        />
        {isEditMode ? (
          <>
            <Typography variant="h4" gutterBottom>
              <TextField
                label="Full Name"
                variant="outlined"
                margin="normal"
                fullWidth
                name="fullName"
                value={fullName}
                onChange={handleInputChange}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                name="username"
                value={username}
                onChange={handleInputChange}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </Typography>
            <button
              style={{
                backgroundColor: "#333",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
              onClick={handleSave}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <button
              style={{
                backgroundColor: "#333",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
              onClick={handleEdit}
            >
              Edit
            </button>
            <Typography
              variant="body1"
              style={{
                fontSize: "1.2rem",
              }}
              gutterBottom
            >
              <strong>Full Name:</strong> {fullName}
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontSize: "1.2rem",
              }}
              gutterBottom
            >
              <strong>Email:</strong> {email}
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontSize: "1.2rem",
              }}
              gutterBottom
            >
              <strong>Username:</strong> {username}
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontSize: "1.2rem",
              }}
              gutterBottom
            >
              <strong>Password:</strong> {password.replace(/./g, "*")}
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
}
