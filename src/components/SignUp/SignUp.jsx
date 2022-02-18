import React from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";

import { Button } from "@mui/material";

const SignUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "50%",
        gap: "20px",
        margin: "auto",
      }}>
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
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
      <Button variant="contained">Sign Up</Button>
    </Box>
  );
};
export default SignUp;
