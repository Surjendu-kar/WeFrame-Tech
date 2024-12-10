import React from "react";
import { MenuItem, Typography, SelectChangeEvent, Box, styled, Select } from "@mui/material";
import InspirationImg from "@/public/HeaderImages/inspirationImg.svg";
import FavImg from "@/public/HeaderImages/favImg.svg";
import BasketImg from "@/public/HeaderImages/basket.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

export const RightContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {},
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {},
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: theme.palette.grey[700],
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {},
}));

export const BasketContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background: theme.palette.primary.main,
  gap: theme.spacing(0.8),
  padding: theme.spacing(1, 1.6),
  borderRadius: theme.spacing(0.6),
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {},
}));

export const AvatarCircle = styled(Box)(({ theme }) => ({
  background: "#EAEDEE",
  height: theme.spacing(4.4),
  width: theme.spacing(4.4),
  borderRadius: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    paddingRight: "25px !important",
    fontSize: theme.spacing(1.4),
    fontWeight: 500,
    color: theme.palette.grey[800],
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),

    "&:focus": {
      backgroundColor: "transparent",
    },
  },

  "&::before": {
    border: "none",
  },

  "&:hover:not(.Mui-disabled, .Mui-error)::before": {
    border: "none",
  },

  "&::after": {
    border: "none",
  },

  "& .MuiSelect-icon": {
    color: theme.palette.grey[800],
    fontSize: "20px",
  },
  "& .MuiSelect-selectMenu": {
    paddingLeft: theme.spacing(1),
  },
}));

export const selectMenuProps = {
  PaperProps: {
    sx: {
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      "& .MuiMenuItem-root": {
        fontSize: "12px",
        fontWeight: 500,
        padding: "8px 20px",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      },
    },
  },
};

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
