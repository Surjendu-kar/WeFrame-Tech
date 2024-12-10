import React, { useState } from "react";
import {
  Box,
  Typography,
  Input,
  InputAdornment,
  styled,
  Stack,
} from "@mui/material";
import Image from "next/image";
import SearchIcon2 from "@/public/HeaderImages/searchIcon.svg";
import SearchIcon from "@mui/icons-material/Search";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import GridViewIcon from "@mui/icons-material/GridView";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { products, suggestions } from "@/data";

const SearchWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: theme.spacing(76.8),
}));

const SearchInput = styled(Input)(({ theme }) => ({
  width: "100%",
  height: "50px",
  backgroundColor: "#F9FAFB",
  borderRadius: theme.spacing(0.6),
  padding: theme.spacing(0, 1.5),

  "& .MuiInput-input": {
    height: "50px",
    padding: 0,
    fontSize: theme.spacing(1.4),
    "&::placeholder": {
      color: "#667482",
      opacity: 0.75,
    },
  },
}));

const SearchIconImage = styled(Image)({
  opacity: 0.5,
  width: "15px",
  height: "15px",
});

const SuggestionsBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  marginTop: "12px",
  padding: theme.spacing(1.5),
  zIndex: 1000,
  minWidth: "1100px",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: theme.palette.grey[200],
  fontWeight: 500,
  marginBottom: theme.spacing(1),
}));

const SuggestionItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 1, 1, 0),
  cursor: "pointer",
  borderRadius: theme.spacing(0.5),
  "&:hover": {
    backgroundColor: "#F9FAFB",
  },
}));

const IconContainer = styled(Box)({
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "8px",
});

const ProductGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(2),
  margin: theme.spacing(0.5, 0, 2),
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

const SearchAutocomplete = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "rotate":
        return <RotateRightIcon sx={{ fontSize: "22px", color: "#000c" }} />;
      case "search":
        return <SearchIcon sx={{ fontSize: "22px", color: "#000c" }} />;
      case "grid":
        return <GridViewIcon sx={{ fontSize: "22px", color: "#000c" }} />;
      case "tag":
        return <LocalOfferIcon sx={{ fontSize: "22px", color: "#000c" }} />;
      default:
        return <SearchIcon sx={{ fontSize: "22px", color: "#000c" }} />;
    }
  };

  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Rechercher un produit"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsOpen(true)}
        endAdornment={
          <InputAdornment position="end">
            <SearchIconImage src={SearchIcon2} alt="search icon" />
          </InputAdornment>
        }
        disableUnderline
      />

      {isOpen && (
        <SuggestionsBox>
          <Box sx={{ display: "flex" }}>
            {/* Suggestions Section */}
            <Box sx={{ width: "30%" }}>
              <SectionTitle>Suggestions</SectionTitle>
              <Stack>
                {suggestions.map((item, index) => (
                  <SuggestionItem key={index}>
                    <IconContainer>{getIcon(item.icon)}</IconContainer>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontSize: "15px" }}>
                        {item.text}
                      </Typography>
                      {item.subText && (
                        <Typography sx={{ fontSize: "10px", color: "#9C9C9C" }}>
                          {item.subText}
                        </Typography>
                      )}
                    </Box>
                    <NorthWestIcon
                      sx={{
                        fontSize: "18px",
                        color: "#000c",
                        marginRight: "8px",
                      }}
                    />
                  </SuggestionItem>
                ))}
              </Stack>
            </Box>

            <Stack flex={1}>
              {/* Products Section */}
              <Box>
                <SectionTitle>Produits</SectionTitle>
                <ProductGrid>
                  {products.map((product) => (
                    <ProductCard key={product.id}>
                      <ProductImage>
                        <Image
                          src={product.image}
                          alt={product.name}
                          style={{ width: "100px", height: "100px" }}
                        />
                      </ProductImage>
                      <Typography sx={{ color: "#9C9C9C", fontSize: "10px" }}>
                        {product.category}
                      </Typography>
                      <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                        {product.name}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 0.35 }}>
                        <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                          {product.price}€
                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: "#9C9C9C" }}>
                          / {product.unit}
                        </Typography>
                      </Box>
                    </ProductCard>
                  ))}
                </ProductGrid>
              </Box>
              {/* View All Results */}
              <Box
                sx={{
                  textAlign: "center",
                  color: "#00000",
                  cursor: "pointer",
                  border: "1px solid #d1d4d5",
                  padding: "10px 0",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                <Typography>Voir tous les résultats</Typography>
              </Box>
            </Stack>
          </Box>
        </SuggestionsBox>
      )}
    </SearchWrapper>
  );
};

export default SearchAutocomplete;
