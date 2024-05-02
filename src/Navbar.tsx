import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function MenuAppBar() {
  const [anchorElHowItWorks, setAnchorElHowItWorks] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const [anchorElPricing, setAnchorElPricing] = React.useState(null);
  const [anchorElResources, setAnchorElResources] = React.useState(null);

  const handleHowItWorksClick = (event) => {
    setAnchorElHowItWorks(event.currentTarget);
  };

  const handleProductsClick = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handlePricingClick = (event) => {
    setAnchorElPricing(event.currentTarget);
  };

  const handleResourcesClick = (event) => {
    setAnchorElResources(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElHowItWorks(null);
    setAnchorElProducts(null);
    setAnchorElPricing(null);
    setAnchorElResources(null);
  };

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          style={{ justifyContent: "space-between", marginLeft: "65px" }}
        >
          <Typography variant="h6">team.flow</Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              aria-controls="how-it-works-menu"
              aria-haspopup="true"
              onClick={handleHowItWorksClick}
              color="inherit"
              endIcon={<ArrowDropDownIcon />}
            >
              How it works
            </Button>
            <Menu
              id="how-it-works-menu"
              anchorEl={anchorElHowItWorks}
              open={Boolean(anchorElHowItWorks)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleClose}>Option 1</MenuItem>
              <MenuItem onClick={handleClose}>Option 2</MenuItem>
              <MenuItem onClick={handleClose}>Option 3</MenuItem>
            </Menu>

            <Button
              aria-controls="products-menu"
              aria-haspopup="true"
              onClick={handleProductsClick}
              color="inherit"
              endIcon={<ArrowDropDownIcon />}
            >
              Products
            </Button>
            <Menu
              id="products-menu"
              anchorEl={anchorElProducts}
              open={Boolean(anchorElProducts)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleClose}>Product 1</MenuItem>
              <MenuItem onClick={handleClose}>Product 2</MenuItem>
              <MenuItem onClick={handleClose}>Product 3</MenuItem>
            </Menu>

            <Button
              aria-controls="pricing-menu"
              aria-haspopup="true"
              onClick={handlePricingClick}
              color="inherit"
              endIcon={<ArrowDropDownIcon />}
            >
              Pricing
            </Button>
            <Menu
              id="pricing-menu"
              anchorEl={anchorElPricing}
              open={Boolean(anchorElPricing)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleClose}>Plan 1</MenuItem>
              <MenuItem onClick={handleClose}>Plan 2</MenuItem>
              <MenuItem onClick={handleClose}>Plan 3</MenuItem>
            </Menu>

            <Button
              aria-controls="resources-menu"
              aria-haspopup="true"
              onClick={handleResourcesClick}
              color="inherit"
              endIcon={<ArrowDropDownIcon />}
            >
              Resources
            </Button>
            <Menu
              id="resources-menu"
              anchorEl={anchorElResources}
              open={Boolean(anchorElResources)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleClose}>Resource 1</MenuItem>
              <MenuItem onClick={handleClose}>Resource 2</MenuItem>
              <MenuItem onClick={handleClose}>Resource 3</MenuItem>
            </Menu>
          </div>
          <div>
            <Button color="inherit">Log in</Button>
            <Button
              color="inherit"
              sx={{ backgroundColor: "purple", color: "white" }}
            >
              Get started free
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
