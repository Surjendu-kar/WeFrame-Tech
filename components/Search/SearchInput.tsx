import { Input, InputAdornment, styled } from "@mui/material";
import Image from "next/image";
import SearchIcon2 from "@/public/HeaderImages/searchIcon.svg";

const StyledInput = styled(Input)<{ isopen: string }>(({ theme, isopen }) => ({
  width: "100%",
  height: "50px",
  backgroundColor: "#F9FAFB",
  borderRadius: theme.spacing(0.6),
  padding: theme.spacing(0, 1.5),
  border:
    isopen === "true" ? `1px solid ${theme.palette.primary.main}` : "none",
  transition: "all 0.3s linear",

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

const SearchIconImage = styled(Image)<{ isopen: string }>(({ isopen }) => ({
  opacity: isopen === "true" ? 1 : 0.5,
  width: "15px",
  height: "15px",
  transition: "opacity 0.2s ease-in-out",
}));

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  isopen: string;
}

export const SearchInput = ({
  value,
  onChange,
  onFocus,
  isopen,
}: SearchInputProps) => (
  <StyledInput
    placeholder="Rechercher un produit"
    value={value}
    onChange={onChange}
    onFocus={onFocus}
    endAdornment={
      <InputAdornment position="end">
        <SearchIconImage src={SearchIcon2} alt="search icon" isopen={isopen} />
      </InputAdornment>
    }
    isopen={isopen}
    disableUnderline
  />
);
