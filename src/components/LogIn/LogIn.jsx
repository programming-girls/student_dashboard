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
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <TextField
        variant="outlined"
        label="Email"
        autoComplete="email"
        autoFocus
      />
      <TextField variant="outlined" label="Password" autoFocus />
      <Button variant="contained">Login</Button>
    </Box>
  );
};
export default SignUp;
