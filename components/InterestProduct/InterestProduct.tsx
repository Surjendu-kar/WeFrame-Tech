import { Box, Stack, styled, Typography } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import TableIcon from "@/public/SimilarProducts/tableImg.webp";
import Link from "next/link";

const MainContainer = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(5),
  gap: theme.spacing(2),
  maxWidth: theme.spacing(160),
  padding: theme.spacing(0, 2),
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    maxWidth: theme.spacing(40),
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Cabinet Grotesk",
  fontSize: theme.spacing(3.5),
  textTransform: "capitalize",
  color: theme.palette.grey[600],

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(2),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.6),
  fontFamily: "Cabinet Grotesk",
  color: theme.palette.grey[600],
  borderBottom: `1px solid ${theme.palette.grey[600]}`,
  textTransform: "uppercase",

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1),
  },
}));

const Container = styled(Box)(() => ({
  position: "relative",
}));

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  overflowX: "scroll",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": { display: "none" },
  "& > *": {
    flexShrink: 0,
  },
}));

function InterestProduct() {
  return (
    <MainContainer>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Heading>Ces produits pourraient vous intéresser</Heading>
        <Link href="#">
          <Title>Voir toute la collection</Title>
        </Link>
      </Box>

      <Container>
        <ScrollContainer>
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductCard
              key={index}
              image={TableIcon}
              title={`Title ${index + 1}`}
              price={Math.floor((index + 820) / (index + 1))}
            />
          ))}
        </ScrollContainer>
      </Container>
    </MainContainer>
  );
}

export default InterestProduct;
