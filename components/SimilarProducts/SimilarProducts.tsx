"use client";
import TableIcon from "@/public/Product/SimilarProducts/tableImg.webp";
import { Box, Stack, styled, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { useRef } from "react";

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Cabinet Grotesk",
  fontSize: theme.spacing(3.5),
  textTransform: "capitalize",
  color: theme.palette.grey[600],
}));

const ScrollButton = styled(Box)(({ theme }) => ({
  width: theme.spacing(4.6),
  height: theme.spacing(4.6),
  backgroundColor: "#5CD2DD",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  borderRadius: "4px",
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

const Container = styled(Box)(() => ({
  position: "relative",
  width: "100%",
}));

interface Product {
  image: string;
  title: string;
  price: number;
  width: string;
  height: string;
}

function SimilarProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const products: Product[] = Array(6).fill({
    image: TableIcon,
    title: "Title",
    price: 0,
    width: "330px",
    height: "362px",
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -330 : 330;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Stack
      mt={4}
      gap={2}
      sx={{
        background: "#FBF9F899",
        maxWidth: "1600px",
      }}
    >
      <Title>Articles similaires</Title>
      <Container>
        <ScrollButton sx={{ left: "-15px" }} onClick={() => scroll("left")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" />
          </svg>
        </ScrollButton>
        <ScrollContainer ref={scrollRef}>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </ScrollContainer>
        <ScrollButton
          sx={{ right: "-40px", left: "auto", transform: "translate(0, -50%)" }}
          onClick={() => scroll("right")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" />
          </svg>
        </ScrollButton>
      </Container>
    </Stack>
  );
}

export default SimilarProducts;
