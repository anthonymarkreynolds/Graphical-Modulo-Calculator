import NavBar from "./NavBar";
import Footer from "./Footer";
import Polygon from "./Polygon";
import { Typography, Container, Box, Divider, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Layout = () => {
  const theme = useTheme();
  return (
    <Box sx={{ height: "100vh" }}>
      <NavBar />
      <Box sx={{ bgcolor: theme.palette.grey[50], p: 5, textAlign: "center" }}>
        <Container>
          <Typography variant="h1" sx={{ mb: 2, fontSize: 48 }}>
            Graphical Modulo Calculator
          </Typography>

          <Typography variant="subtitle1">
            Created by{" "}
            <Link
              href="https://github.com/anthonymarkreynolds"
              rel="noreferrer"
            >
              Anthony Reynolds
            </Link>
          </Typography>
        </Container>
      </Box>
      <Divider />
      <Polygon />
      <Footer />
    </Box>
  );
};

export default Layout;
