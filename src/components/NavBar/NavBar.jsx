import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./NavBar.css";

const CustomButton = styled(Button)(({ theme }) => ({
  color: "#fff",
}));

const NavBar = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };
  return (
    <>
      <AppBar className="header" color={"primary"}>
        <Toolbar>
          <div className="parent">
            <div className="l-side">
              <Typography variant="h5">
                <h5 to="/">Eshiralli School</h5>
              </Typography>
            </div>
            <div className="r-side">
              <CustomButton
                variant={"outlined"}
                onClick={() => handleGetStarted()}>
                <Link to="/signup">Get Started</Link>
              </CustomButton>
              <CustomButton variant={"outlined"}>
                <Link to="/login">LogIn</Link>
              </CustomButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
