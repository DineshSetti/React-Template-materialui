import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import sampleImage from "./images (2).png";

const SecondPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={sampleImage}
        alt="Sample"
        style={{
          width: "35%",
          marginTop: "10vh",
          marginLeft: "21%",
          marginRight: "5%",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginTop: "10vh",
          marginRight: "18%",
        }}
      >
        <div style={{ maxWidth: 400 }}>
          <Card sx={{ margin: "10px auto" }}>
            <CardContent>
              <Typography variant="h1" sx={{ fontSize: "2rem" }}>
                Survey your team{" "}
              </Typography>
              <Typography variant="body1">
                powerful questions that get to the heart <br />
                of how team members really feel.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "10px auto" }}>
            <CardContent>
              <Typography variant="h1" sx={{ fontSize: "2rem" }}>
                Resolve issues quickly{" "}
              </Typography>
              <Typography variant="body1">
                Anonymous messaging that connects <br /> managers and employees.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "10px auto" }}>
            <CardContent>
              <Typography variant="h1" sx={{ fontSize: "2rem" }}>
                Plan your 1-on-1s{" "}
              </Typography>
              <Typography variant="body1">
                Plan meetings together and give a stake <br />
                employees and teams
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "10px auto 20px auto" }}>
            <CardContent>
              <Typography variant="h1" sx={{ fontSize: "2rem" }}>
                Track your progress
              </Typography>
              <Typography variant="body1">
                Easy-to-read reports and sharable <br />
                results help managers and teams
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
