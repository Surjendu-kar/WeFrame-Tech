import { Box, styled, Typography } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: "#00000",
  cursor: "pointer",
  border: "1px solid #d1d4d5",
  padding: theme.spacing(1, 0),
  "&:hover": {
    color: "#2b2b2b",
  },

  [theme.breakpoints.down("lg")]: {
    p: {
      fontSize: theme.spacing(1),
    },
  },
}));

export const ViewAllButton = () => (
  <Container>
    <Typography>Voir tous les résultats</Typography>
  </Container>
);
