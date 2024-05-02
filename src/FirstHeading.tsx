import React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import imageSrc from "./images (1).png";
import Google from "./page1Google.png";
import airbnb from "./imageA.jpg";
import facebook from "./Facebppk.png";
import hubspot from "./Hubspot.png";
import slack from "./slack.png";
const FirstHeading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10vh",
          marginRight: "53px",
        }}
      >
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: "33px" }}
        >
          Save 90%
        </Button>
        <Button variant="outlined" color="success">
          Get account for $59
        </Button>
      </Box>

      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        style={{
          textAlign: "center",
          marginRight: "50px",
          fontSize: "4rem",
          marginTop: "2vh",
        }}
      >
        Manage the team <br />
        everyone wants to be on
      </Typography>
      <p style={{ fontSize: "1.3rem", marginTop: "0vh" }}>
        Simple platform that lets you master what great managers do best,
        <br /> as develop trust, collaborate, and drive team performance.
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <TextField
          id="outlined-basic"
          label="name@yourcompany.com"
          variant="outlined"
          sx={{ height: "53px", width: "350px" }}
        />
        <Button
          variant="contained"
          disableElevation
          sx={{
            fontSize: "15px",
            height: "55px",
            width: "125px",
            backgroundColor: "purple",
          }}
        >
          Try it free
        </Button>
      </div>
      <br />
      <div style={{ marginTop: "20px" }}>
        <img
          src={imageSrc}
          alt="Your Image"
          style={{ width: "60%", marginLeft: "350px" }}
        />
      </div>
      <p>
        <b>TRUSTED BY OVER 10.000+ WORLD'S BEST TEAMS</b>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "85%",
          marginTop: 30,
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <img
            src={Google}
            alt="Google Image"
            style={{ width: "70px", margin: "0 25px" }}
          />
          <img
            src={airbnb}
            alt="airbnb "
            style={{ width: "70px", margin: "0 25px" }}
          />
          <img
            src={facebook}
            alt="facebook Image"
            style={{ width: "70px", margin: "0 25px" }}
          />
          <img
            src={hubspot}
            alt="hubspot"
            style={{ width: "70px", margin: "0 25px" }}
          />
          <img
            src={slack}
            alt="Google Image"
            style={{ width: "70px", margin: "0 25px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstHeading;
