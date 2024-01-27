import React from "react";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        backgroundColor: "#123456",
        margin: "160px 0 -60px 0",
        padding: "20px 0 20px 0",
      }}
    >
      <Grid item xs={12} sm={6} sx={{ backgroundColor: "#123456" }}>
        <Typography sx={{ color: "#fff", fontSize: "16px" }}>
          Design and Developed By Ishan Randika
        </Typography>
        <Typography variant="body2" color="#fff">
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ backgroundColor: "#123456", padding: "0 0 20px 0" }}
      >
        <Typography variant="h6" color="#fff">
          Quick Links
        </Typography>
        <nav>
          <Link
            to="./"
            variant="body2"
            style={{ marginRight: 10, textDecoration: "none", color: "#fff" }}
          >
            Home
          </Link>
          <Link
            to="./about"
            variant="body2"
            style={{ marginRight: 10, textDecoration: "none", color: "#fff" }}
          >
            About
          </Link>
          <Link
            to="./contact"
            variant="body2"
            style={{ marginRight: 10, textDecoration: "none", color: "#fff" }}
          >
            Contact
          </Link>
        </nav>
      </Grid>
    </Grid>
  );
};

export default Footer;
