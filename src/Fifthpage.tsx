import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Profile1Image from "./murphy.webp";
import Profile2Image from "./wp1976337.jpg";
import Profile3Image from "./maisie-williams.jpg";
import image1 from "./Google-Play-Store-app.webp";
import image2 from "./app store black.png";

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "100vh",
  textAlign: "center",
});

const CardContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "90%",
  marginTop: "20px",
  "& > *": {
    flex: "0 0 20%",
    margin: "0 10px",
    height: "100px",
  },
});

const ProfileAvatar = styled(Avatar)({
  width: 60,
  height: 60,
  marginRight: 20,
  borderRadius: "50%",
});

const ProfileText = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "left",
  width: "100%",
});

const BlueContainer = styled("div")({
  backgroundColor: "#710fe1",
  width: "54%",
  padding: "20px",
  marginTop: "20px",
  borderRadius: "15px",
  minHeight: "170px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Image1 = styled("img")({
  width: "180px",
  height: "50px",
  objectFit: "cover",
  marginRight: "10px",
  borderRadius: "10px",
  cursor: "pointer",
});

const Image2 = styled("img")({
  width: "200px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "10px",
  cursor: "pointer",
});

const ImagesContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const Fifthpage = () => {
  const openGooglePlayStore = () => {
    window.open("https://play.google.com/store", "_blank");
  };

  const openAppStore = () => {
    window.open("https://www.apple.com/app-store/", "_blank");
  };

  return (
    <Container>
      <div>
        <Typography
          variant="h1"
          style={{ fontSize: "50px", marginBottom: "20px" }}
        >
          <b>
            Why customers love <br /> working with us.
          </b>
        </Typography>
        <Typography variant="body1">
          "It's amazing what has helped me learn about my team. <br /> I don't
          worry about blind spots anymore, and 1-on-1s have never <br /> been
          more productive. The team loves it."
        </Typography>
      </div>
      <br />
      <CardContainer>
        <Card variant="outlined">
          <CardContent>
            <ProfileText>
              <ProfileAvatar src={Profile1Image} />
              <div>
                <Typography variant="body2" component="div">
                  <b>Jorge Robertson</b>
                  <br />
                  <span>CS at Google</span>
                </Typography>
              </div>
            </ProfileText>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <ProfileText>
              <ProfileAvatar src={Profile2Image} />
              <div>
                <Typography variant="body2" component="div">
                  <b>Francisco Bell</b>
                  <br />
                  <span>Designer at Microsoft</span>
                </Typography>
              </div>
            </ProfileText>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <ProfileText>
              <ProfileAvatar src={Profile3Image} />
              <div>
                <Typography variant="body2" component="div">
                  <b>Beth Fox</b>
                  <br />
                  <span>Developer at Airbnb</span>
                </Typography>
              </div>
            </ProfileText>
          </CardContent>
        </Card>
      </CardContainer>
      <BlueContainer>
        <Typography
          variant="body1"
          style={{ color: "white", marginLeft: "20px" }}
        >
          <h1>
            84% of employees who use <br />
            trust their direct manager
          </h1>
        </Typography>
        <ImagesContainer>
          <a href="https://play.google.com/store" target="_blank">
            <Image1 src={image1} onClick={openGooglePlayStore} />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <Image2 src={image2} onClick={openAppStore} />
          </a>
        </ImagesContainer>
      </BlueContainer>
    </Container>
  );
};

export default Fifthpage;
