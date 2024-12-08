// components/RightSection.tsx
"use client";
import React from "react";
import { MenuItem, Select, Typography, SelectChangeEvent } from "@mui/material";
import Image from "next/image";
import InspirationImg from "@/public/HeaderImages/inspirationImg.svg";
import FavImg from "@/public/HeaderImages/favImg.svg";
import BasketImg from "@/public/HeaderImages/basket.svg";
import { AvatarCircle, BasketContainer, StyledContainer } from "./HeaderStyles";

interface RightSectionProps {
  lang: string;
  setLang: (lang: string) => void;
}

const RightSection: React.FC<RightSectionProps> = ({ lang, setLang }) => {
  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setLang(event.target.value);
  };

  return (
    <StyledContainer>
      {/* inspiration */}
      <StyledContainer>
        <Image src={InspirationImg} alt="inspiration img" />
        <Typography>inspiration</Typography>
      </StyledContainer>

      {/* my fav */}
      <StyledContainer>
        <Image src={FavImg} alt="fav img" />
        <Typography>Mes favoris</Typography>
        <Typography>24</Typography>
      </StyledContainer>

      {/* basket */}
      <BasketContainer>
        <Image src={BasketImg} alt="basket img" />
        <Typography>Panier</Typography>
      </BasketContainer>

      {/* language */}
      <StyledContainer>
        <AvatarCircle />
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={lang}
          onChange={handleLanguageChange}
          autoWidth
          label="Age"
        >
          <MenuItem value={"fr"}>FR</MenuItem>
          <MenuItem value={"en"}>EN</MenuItem>
        </Select>
      </StyledContainer>
    </StyledContainer>
  );
};

export default RightSection;
