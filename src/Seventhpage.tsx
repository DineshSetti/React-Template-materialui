import React from "react";
import {
  Container,
  styled,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { Instagram, YouTube, Facebook, Twitter } from "@mui/icons-material";

const FullWidthContainer = styled(Container)({
  backgroundColor: "#0B1945",
  minHeight: "5vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  border: "1px solid rgba(255, 255, 255, 0.5)",
});

const ContentWrapper = styled("div")({
  width: "100%",
});

const SeventhPage = () => {
  return (
    <FullWidthContainer maxWidth={false}>
      <ContentWrapper>
        <AppBar
          position="static"
          sx={{
            bgcolor: "#0B1945",
            borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ color: "white", marginLeft: "120px" }}
            >
              @2020- All rights reserved
            </Typography>
            <div>
              <IconButton
                sx={{ color: "white", marginRight: 1 }}
                aria-label="Instagram"
                component="a"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <Instagram />
              </IconButton>
              <IconButton
                sx={{ color: "white", marginRight: 1 }}
                aria-label="YouTube"
                component="a"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <YouTube />
              </IconButton>
              <IconButton
                sx={{ color: "white", marginRight: 1 }}
                aria-label="Facebook"
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{ color: "white", marginRight: 0 }}
                aria-label="Twitter"
                component="a"
                href="https://twitter.com/"
                target="_blank"
              >
                <Twitter />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ContentWrapper>
    </FullWidthContainer>
  );
};

export default SeventhPage;
