import React from "react";
import { MenuItem, Typography, SelectChangeEvent, Box } from "@mui/material";
import InspirationImg from "@/public/HeaderImages/inspirationImg.svg";
import FavImg from "@/public/HeaderImages/favImg.svg";
import BasketImg from "@/public/HeaderImages/basket.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  AvatarCircle,
  BasketContainer,
  RightContainer,
  selectMenuProps,
  StyledContainer,
  StyledSelect,
  Text,
} from "./HeaderStyles";
import Image from "next/image";

interface RightSectionProps {
  lang: string;
  setLang: (lang: string) => void;
}

const RightSection: React.FC<RightSectionProps> = ({ lang, setLang }) => {
  const handleLanguageChange = (event: SelectChangeEvent<unknown>) => {
    setLang(event.target.value as string);
  };

  return (
    <RightContainer>
      {/* inspiration */}
      <StyledContainer>
        <Image src={InspirationImg} alt="inspiration img" />
        <Text>inspiration</Text>
      </StyledContainer>

      {/* my fav */}
      <StyledContainer>
        <Image src={FavImg} alt="fav img" />
        <Text>Mes favoris</Text>
        <Box
          sx={{
            background: "#CAD2D566",
            width: "28px",
            height: "18px",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
            }}
          >
            24
          </Typography>
        </Box>
      </StyledContainer>

      {/* basket */}
      <BasketContainer>
        <Image src={BasketImg} alt="basket img" />
        <Text sx={{ color: "#FFFFFF" }}>Panier</Text>
      </BasketContainer>

      {/* language */}
      <StyledContainer sx={{ gap: 2 }}>
        <AvatarCircle />
        <StyledSelect
          value={lang || "fr"}
          onChange={handleLanguageChange}
          variant="standard"
          IconComponent={KeyboardArrowDownIcon}
          MenuProps={selectMenuProps}
        >
          <MenuItem value={"fr"}>FR</MenuItem>
          <MenuItem value={"en"}>EN</MenuItem>
        </StyledSelect>
      </StyledContainer>
    </RightContainer>
  );
};

export default RightSection;
