import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Graphical Modulo Calculator
          </Typography>
          <Link
            href="https://github.com/anthonymarkreynolds/Graphical-Modulo-Calculator"
            target="blank"
            rel="noreferrer"
            color="inherit"
          >
            <IconButton color="inherit">
              <GitHubIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
