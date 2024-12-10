import { useState, useRef, useEffect } from "react";
import { Box, Stack, styled } from "@mui/material";
import { SearchInput } from "./SearchInput";
import { SuggestionList } from "./SuggestionList";
import { ProductGrid } from "./ProductGrid";
import { ViewAllButton } from "./ViewAllButton";

const SearchWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  flex: 1,

  [theme.breakpoints.down("sm")]: {
    width: theme.spacing(22),
  },
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
  width: theme.spacing(98),

  [theme.breakpoints.down("sm")]: {
    minWidth: theme.spacing(32),
    maxWidth: theme.spacing(32),
    left: -105,
  },

  [theme.breakpoints.down("lg")]: {
    width: theme.spacing(70),
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
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
        isopen={isOpen.toString()}
      />

      {isOpen && (
        <SuggestionsBox>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
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
