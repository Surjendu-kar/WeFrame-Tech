import { Box, Stack, styled, Typography } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import TableIcon from "@/public/Product/SimilarProducts/tableImg.webp";

const MainContainer = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(5),
  gap: theme.spacing(2),
  maxWidth: theme.spacing(160),
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Cabinet Grotesk",
  fontSize: theme.spacing(3.5),
  textTransform: "capitalize",
  color: theme.palette.grey[600],
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.6),
  fontFamily: "Cabinet Grotesk",
  color: theme.palette.grey[600],
  borderBottom: `1px solid ${theme.palette.grey[600]}`,
  textTransform: "uppercase",
}));

const Container = styled(Box)(() => ({
  position: "relative",
  // maxWidth: theme.spacing(165),
}));

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  overflowX: "scroll",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": { display: "none" },
  "& > *": {
    flexShrink: 0,
  },
}));

interface Product {
  image: string;
  title: string;
  price: number;
  width: string;
  height: string;
}

function InterestProduct() {
  const products: Product[] = Array(3).fill({
    image: TableIcon,
    title: "Title",
    price: 0,
    width: "506px",
    height: "438px",
  });

  return (
    <MainContainer>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading>Ces produits pourraient vous intéresser</Heading>
        <Title>Voir toute la collection</Title>
      </Box>

      <Container>
        <ScrollContainer>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </ScrollContainer>
      </Container>
    </MainContainer>
  );
}

export default InterestProduct;
