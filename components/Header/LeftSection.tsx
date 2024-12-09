import React from "react";
import Image from "next/image";
import { InputAdornment } from "@mui/material";
import Logo from "@/public/weFramelogo.svg";
import { LeftContainer, SearchIconImage, SearchInput } from "./HeaderStyles";
import SearchIcon from "@/public/HeaderImages/searchIcon.svg";

const LeftSection: React.FC = () => {
  return (
    <LeftContainer>
      <Image src={Logo} alt="WeFramelogo" />
      <SearchInput
        placeholder="Rechercher un produit"
        endAdornment={
          <InputAdornment position="end">
            <SearchIconImage src={SearchIcon} alt="search icon" />
          </InputAdornment>
        }
        disableUnderline
      />
    </LeftContainer>
  );
};

export default LeftSection;
