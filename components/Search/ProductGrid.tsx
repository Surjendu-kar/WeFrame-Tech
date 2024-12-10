import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { products } from "@/data";

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: theme.palette.grey[200],
  fontWeight: 500,
  marginBottom: theme.spacing(1),
}));

const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(2),
  margin: theme.spacing(0.5, 0, 2),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

const ProductCard = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const ProductImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "160px",
  backgroundColor: "#F9FAFB",
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ProductGrid = () => {
  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Box>
      <SectionTitle>Produits</SectionTitle>
      <GridContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage>
              <Image
                src={product.image}
                alt={product.name}
                style={{ width: "110px", height: "110px" }}
              />
            </ProductImage>
            <Typography sx={{ color: "#9C9C9C", fontSize: "10px" }}>
              {product.category}
            </Typography>
            <Typography
              sx={{ fontSize: isSmallDevice ? "9px" : "13px", fontWeight: 500 }}
            >
              {product.name}
            </Typography>
            <Box sx={{ display: "flex", gap: 0.35 }}>
              <Typography
                sx={{
                  fontSize: isSmallDevice ? "12px" : "16px",
                  fontWeight: 600,
                }}
              >
                {product.price}€
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmallDevice ? "10px" : "15px",
                  color: "#9C9C9C",
                }}
              >
                / {product.unit}
              </Typography>
            </Box>
          </ProductCard>
        ))}
      </GridContainer>
    </Box>
  );
};
