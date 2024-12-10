import { Input, InputAdornment, styled } from "@mui/material";
import Image from "next/image";
import SearchIcon2 from "@/public/HeaderImages/searchIcon.svg";

const StyledInput = styled(Input)(({ theme }) => ({
  width: "100%",
  height: "50px",
  backgroundColor: "#F9FAFB",
  borderRadius: theme.spacing(0.6),
  padding: theme.spacing(0, 1.5),
  border: "2px solid transparent",
  transition: "all 0.2s ease-in-out",

  "&:focus-within": {
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: "#FFFFFF",
  },

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

const SearchIconImage = styled(Image)(() => ({
  width: "15px",
  height: "15px",
  opacity: 0.5,
  transition: "all 0.2s ease-in-out",

  "input:focus-within ~ .MuiInputAdornment-root &": {
    opacity: 1,
    filter:
      "brightness(0) saturate(100%) invert(48%) sepia(85%) saturate(2529%) hue-rotate(177deg) brightness(97%) contrast(101%)",
  },
}));

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}

export const SearchInput = ({ value, onChange, onFocus }: SearchInputProps) => {
  return (
    <StyledInput
      placeholder="Rechercher un produit"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      endAdornment={
        <InputAdornment position="end">
          <SearchIconImage src={SearchIcon2} alt="search icon" />
        </InputAdornment>
      }
      disableUnderline
    />
  );
};
