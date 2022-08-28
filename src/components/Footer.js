import {
  Box,
  Container,
  ButtonGroup,
  IconButton,
  Typography,
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
        overflowY: "hidden",
      }}
    >
      <Container
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ButtonGroup>
          <IconButton>
            <GitHub />
          </IconButton>
          <IconButton>
            <Code />
          </IconButton>
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
