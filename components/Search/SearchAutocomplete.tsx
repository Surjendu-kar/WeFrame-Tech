import { useState, useRef, useEffect } from "react";
import { Box, Stack, styled } from "@mui/material";
import { SearchInput } from "./SearchInput";
import { SuggestionList } from "./SuggestionList";
import { ProductGrid } from "./ProductGrid";
import { ViewAllButton } from "./ViewAllButton";

const SearchWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: theme.spacing(76.8),
}));

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

const SearchAutocomplete = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    setIsOpen(true);
    if (!searchValue) {
      setSearchValue("Fourchette");
    }
  };

  return (
    <SearchWrapper ref={wrapperRef}>
      <SearchInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={handleFocus}
      />

      {isOpen && (
        <SuggestionsBox>
          <Box sx={{ display: "flex" }}>
            <SuggestionList />
            <Stack flex={1}>
              <ProductGrid />
              <ViewAllButton />
            </Stack>
          </Box>
        </SuggestionsBox>
      )}
    </SearchWrapper>
  );
};

export default SearchAutocomplete;
