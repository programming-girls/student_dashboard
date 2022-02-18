import React from "react";
import { TextField } from "@mui/material";
import { Container } from "@mui/material";

const SignUp = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "75%",
        gap: "20px",
      }}>
      <h1>Sign Up</h1>
      <TextField
        variant="outlined"
        label="First Name"
        autoComplete="name"
        autoFocus
      />
      <TextField
        variant="outlined"
        label="Last Name"
        autoComplete="name"
        autoFocus
      />
      <TextField
        variant="outlined"
        label="Email"
        autoComplete="email"
        autoFocus
      />
      <TextField variant="outlined" label="Password" autoFocus />
    </Container>
  );
};
export default SignUp;
