import React, { useState } from "react";
import {
  Box,
  Typography,
  Input,
  InputAdornment,
  styled,
  Stack,
  Divider,
} from "@mui/material";
import Image from "next/image";
import SearchIcon2 from "@/public/HeaderImages/searchIcon.svg";
import SearchIcon from "@mui/icons-material/Search";
import TableIcon from "@/public/SimilarProducts/tableImg.webp";
import RotateRightIcon from "@mui/icons-material/RotateRight";

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
}));

const SuggestionItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1, 1, 1, 0),
  cursor: "pointer",
  borderRadius: theme.spacing(0.5),
  "&:hover": {
    backgroundColor: "#F9FAFB",
  },
}));

const ProductGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(2),
  margin: theme.spacing(0.5, 0, 3),
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

  const suggestions = [
    {
      text: "fourchettes",
      icon: <RotateRightIcon style={{ fontSize: "22px" }} />,
    },
    {
      text: "fourchette grande",
      icon: <SearchIcon style={{ fontSize: "22px" }} />,
    },
    {
      text: "fourchette Piranha",
      icon: <SearchIcon style={{ fontSize: "22px" }} />,
    },
    { text: "fourchette", icon: <SearchIcon style={{ fontSize: "22px" }} /> },
    { text: "Fourchettes", icon: "🔍" },
    { text: "Fourchette", icon: "🔍" },
    { text: "Sport addict", icon: "🔍" },
  ];

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
                    <Typography sx={{ fontSize: "14px", color: "#475967" }}>
                      {item.icon} {item.text}
                    </Typography>
                  </SuggestionItem>
                ))}
              </Stack>
            </Box>

            <Divider />

            <Stack flex={1}>
              {/* Products Section */}
              <Box>
                <SectionTitle>Produits</SectionTitle>
                <ProductGrid>
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <ProductCard key={index}>
                        <ProductImage>
                          <Image
                            src={TableIcon}
                            alt="table icon"
                            style={{ width: "100px", height: "100px" }}
                          />
                        </ProductImage>
                        <Typography sx={{ color: "#9C9C9C", fontSize: "10px" }}>
                          ART DE LA TABLE
                        </Typography>
                        <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                          Produit Simple
                        </Typography>

                        <Box sx={{ display: "flex", gap: 0.25 }}>
                          <Typography sx={{ fontSize: "15px" }}>7€</Typography>
                          <Typography
                            sx={{ fontSize: "15px", color: "#9C9C9C" }}
                          >
                            / 20 pièces
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
