import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
});

const CustomButton = styled(Button)(({ theme }) => ({
  color: "#fff",
}));

const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };
  return (
    <>
      <AppBar className="header" position="static" color={"primary"}>
        <Toolbar>
          <Typography variant="h5" className={classes.root}>
            <h5 className={classes.linkStyle} to="/">
              Eshiralli School
            </h5>
          </Typography>
          <CustomButton variant={"outlined"} onClick={() => handleGetStarted()}>
            <Link to="/signup">Get Started</Link>
          </CustomButton>
          <CustomButton variant={"outlined"}>
            <Link className={classes.linkStyle} to="/login">
              LogIn
            </Link>
          </CustomButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
