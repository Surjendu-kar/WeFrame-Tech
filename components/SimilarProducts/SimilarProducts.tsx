import TableIcon from "@/public/SimilarProducts/tableImg.webp";
import { Box, Stack, styled, Typography } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { useRef } from "react";
import Link from "next/link";

const MainContainer = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(10),
  gap: theme.spacing(2),
  background: "#FBF9F899",
  maxWidth: theme.spacing(160),
  width: "100%",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {
    maxWidth: theme.spacing(40),
  },
}));

const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingLeft: theme.spacing(2),
  width: "100%",
  overflow: "hidden",
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
  scrollbarWidth: "none",
  maxWidth: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  margin: "0 auto",
  padding: theme.spacing(2, 0),
  boxSizing: "border-box",
  WebkitOverflowScrolling: "touch",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  // Make items shrink when zoomed
  "& > *": {
    flexShrink: 1,
    minWidth: theme.spacing(34),
    maxWidth: theme.spacing(35),
    width: "calc(33.333% - ${theme.spacing(2)})",
  },

  // Add a media query for smaller screens
  [theme.breakpoints.down("md")]: {
    "& > *": {
      width: "calc(50% - ${theme.spacing(2)})",
    },
  },

  [theme.breakpoints.down("sm")]: {
    "& > *": {
      width: "calc(100% - ${theme.spacing(2)})",
    },
  },
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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -330 : 330;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <MainContainer>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: { xs: "0", sm: "0px 20px" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Heading>Articles similaires</Heading>
        <Link href="#">
          <Title>Voir toute la collection</Title>
        </Link>
      </Box>

      <Container>
        <ScrollButton sx={{ left: "30px" }} onClick={() => scroll("left")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" />
          </svg>
        </ScrollButton>
        <ScrollContainer ref={scrollRef}>
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard
              key={index}
              image={TableIcon}
              title={`Title ${index + 1}`}
              price={Math.floor((index + 1220) / (index + 1))}
            />
          ))}
        </ScrollContainer>
        <ScrollButton
          sx={{ right: "0px", left: "auto", transform: "translate(0, -50%)" }}
          onClick={() => scroll("right")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" />
          </svg>
        </ScrollButton>
      </Container>
    </MainContainer>
  );
}

export default SimilarProducts;
