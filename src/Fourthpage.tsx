import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import yourImage from "./images (3).png";

const PurpleButton = styled(Button)({
  backgroundColor: "blue",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "purple",
  },
});

const Fourthpage = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "100px",

        marginLeft: "350px",
      }}
    >
      <div style={{ flex: 5 }}>
        <Typography variant="h1" gutterBottom style={{ fontSize: "45px" }}>
          <b>
            {" "}
            We work how you <br />
            work everyday{" "}
          </b>
        </Typography>
        <Typography variant="body1" paragraph>
          Since the easiest things to use actually get used, we <br /> adapt to
          the way your team works—not the other <br /> way around.
        </Typography>
        <PurpleButton variant="contained">Get started free</PurpleButton>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",

          marginRight: "624px",
        }}
      >
        <img
          src={yourImage}
          alt="Your Image"
          style={{ height: "100%", maxWidth: "350%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Fourthpage;
