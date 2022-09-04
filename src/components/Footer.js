import {
  Box,
  Container,
  ButtonGroup,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import { GitHub, Code, Email } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 5,
        bgcolor: theme.palette.grey[100],
        width: "100%",
        minHeight: "50vh",
      }}
    >
      <Container
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonGroup>
          <Link
            href="https://github.com/anthonymarkreynolds"
            target="blank"
            rel="noreferrer"
          >
            <IconButton>
              <GitHub />
            </IconButton>
          </Link>
          <Link
            href="https://github.com/anthonymarkreynolds"
            target="blank"
            rel="noreferrer"
          >
            <IconButton>
              <Code />
            </IconButton>
          </Link>
          <IconButton>
            <Email />
          </IconButton>
        </ButtonGroup>
        <Typography variant="subtitle2" mt={2}>
          © Copyright 2022 Anthony Mark Reynolds
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
