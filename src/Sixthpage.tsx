import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import image1 from "./playstore-black.png";
import image2 from "./app store black.png";

const Container = styled("div")({
  backgroundColor: "#0B1945",
  height: "25vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
});

const Section = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  width: "100%",
  maxWidth: "800px",
  minHeight: "30vh",
});

const ImageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "150px",
});

const Image = styled("img")({
  width: "150px",
  cursor: "pointer",
  marginBottom: "-40px",
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const DownloadButton = styled("a")({
  textDecoration: "none",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  fontSize: "14px",
  fontWeight: "bold",
  transition: "background-color 0.2s ease",
  "&:hover": {},
});

const LargerImage = styled(Image)({
  width: "250px",
});

const Sixthpage = () => {
  const handlePlayStoreClick = () => {
    window.open("https://play.google.com/store", "_blank");
  };

  const handleAppStoreClick = () => {
    window.open("https://www.apple.com/app-store/", "_blank");
  };

  return (
    <Container>
      <Section>
        <Typography variant="h6" color="white" gutterBottom>
          Company
        </Typography>
        <Typography variant="body2" color="white" paragraph>
          About Us
        </Typography>
        <Typography variant="body2" color="white" paragraph>
          Blog
        </Typography>
        <Typography variant="body2" color="white" paragraph>
          Careers
        </Typography>
        <Typography variant="body2" color="white" paragraph>
          Contact Us
        </Typography>
      </Section>
      <Section>
        <Typography variant="h6" color="white" gutterBottom>
          Support
        </Typography>
        <Typography variant="body2" color="white" paragraph>
          Help Center
        </Typography>
        <Typography variant="body2" color="white" paragraph>
          Safety Center
        </Typography>
        <Typography variant="body2" color="white" paragraph>
          Community
        </Typography>
      </Section>
      <Section>
        <Typography variant="h6" color="white" gutterBottom>
          Legal
        </Typography>
        <Typography variant="body2" color="white" paragraph>
          Cookies Policy
        </Typography>
        <Typography variant="body2" color="white" paragraph>
          Privacy Policy
        </Typography>
        <Typography variant="body2" color="white" paragraph>
          Terms of Service
        </Typography>
      </Section>
      <Section>
        <ImageContainer>
          <Typography variant="h6" color="white" gutterBottom>
            Install App
          </Typography>
          <DownloadButton onClick={handlePlayStoreClick}>
            <Image src={image1} alt="Google Play Store" />
          </DownloadButton>
          <DownloadButton onClick={handleAppStoreClick}>
            <LargerImage src={image2} alt="App Store" />
          </DownloadButton>
        </ImageContainer>
      </Section>
    </Container>
  );
};

export default Sixthpage;
