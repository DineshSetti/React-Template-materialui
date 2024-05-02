import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Groups2Icon from "@mui/icons-material/Groups2";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { School, Message } from "@mui/icons-material";

const Thirdpage = () => {
  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    marginBottom: "1rem",
  };

  return (
    <div
      style={{ maxWidth: "990px", margin: "150px auto 0", padding: "0 20px" }}
    >
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>
        Make Your Work Easier
      </h1>{" "}
      <br />
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <Card variant="outlined" style={{ marginRight: "1rem" }}>
          <CardContent>
            <AssessmentIcon
              style={{
                fontSize: 40,
                color: "orange",
                marginBottom: "1rem",
                height: "70px",
                width: "80px",
              }}
            />
            <Typography variant="h5" component="h2" style={headingStyle}>
              Teams Surveys&Reports
            </Typography>
            <Typography variant="body1" style={paragraphStyle}>
              Short, anonymous surveys track your <br />
              team's needs weekly so you can focus
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined" style={{ marginRight: "1rem" }}>
          <CardContent>
            <ContactPageIcon
              style={{
                fontSize: 40,
                marginBottom: "1rem",
                color: "blue",
                height: "65px",
                width: "80px",
              }}
            />
            <Typography variant="h5" component="h2" style={headingStyle}>
              Collaborative 1:1
            </Typography>
            <Typography variant="body1" style={paragraphStyle}>
              Build relationships by planning <br /> 1-on-1s and start meetings
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <School
              style={{
                fontSize: 40,
                marginBottom: "1rem",
                color: "#ad1b6a",
                height: "65px",
                width: "80px",
              }}
            />
            <Typography variant="h5" component="h2" style={headingStyle}>
              Learning Center
            </Typography>
            <Typography variant="body1" style={paragraphStyle}>
              Quickly get solutions tailored to your personal
              <br />
              personal challenges from the manager.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div style={{ display: "flex" }}>
        <Card variant="outlined" style={{ marginRight: "1rem" }}>
          <CardContent>
            <Message
              style={{
                fontSize: 40,
                marginBottom: "1rem",
                color: "#e0218a",
                height: "65px",
                width: "80px",
              }}
            />
            <Typography variant="h5" component="h2" style={headingStyle}>
              Anonymous Messaging
            </Typography>
            <Typography variant="body1" style={paragraphStyle}>
              Develop trust in a safe channel for
              <br />
              important conversations.
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined" style={{ marginRight: "1rem" }}>
          <CardContent>
            <Groups2Icon
              style={{
                fontSize: 40,
                marginBottom: "1rem",
                color: "#000080",
                height: "65px",
                width: "80px",
              }}
            />
            <Typography variant="h5" component="h2" style={headingStyle}>
              Conversation Engine
            </Typography>
            <Typography variant="body1" style={paragraphStyle}>
              Communicate Confidently with <br />
              recommended talking points.
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <ManageAccountsIcon
              style={{
                fontSize: 40,
                marginBottom: "1rem",
                color: "#ffd700",
                height: "65px",
                width: "80px",
              }}
            />
            <Typography variant="h5" component="h2" style={headingStyle}>
              Exclusive Managers
            </Typography>
            <Typography variant="body1" style={paragraphStyle}>
              Access manager tips, activities and <br />
              best practices from our teams of experts.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Thirdpage;
