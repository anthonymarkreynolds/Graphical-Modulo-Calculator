import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Digital Roots
          </Typography>
          <IconButton color="inherit">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
