import Container from "@mui/material/Container";
import Appbar from "./Appbar";

const Layout = ({ children }) => {
  return (
    <Container>
      <Appbar />
      {children}
    </Container>
  );
};

export default Layout;
