import React from "react";
import { Box, styled, Typography } from "@mui/material";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { navItems } from "@/data";

const HeaderWrapper = styled("header")({
  position: "sticky",
  top: 0,
  width: "100%",
  backgroundColor: "white",
  zIndex: 1000,
});

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2, 3, 3, 3),
  gap: theme.spacing(10),

  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(5),
  },

  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(2),
  },
}));

export const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  borderBottom: "1px solid #EAEDEE",

  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 2),
  },
}));

export const NavItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  fontSize: theme.spacing(1.4),
  color: isSelected ? theme.palette.primary.main : theme.palette.grey[500],
  cursor: "pointer",
  textTransform: "uppercase",
  transition: "all 0.2s ease",
  position: "relative",
  paddingBottom: theme.spacing(1.5),

  "&:hover": {
    color: theme.palette.primary.main,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: isSelected ? theme.palette.primary.main : "transparent",
    transition: "background-color 0.2s ease",
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.spacing(1),
  },
}));

const Header = () => {
  const [lang, setLang] = React.useState<string>("");
  const [selectedNav, setSelectedNav] = React.useState(1);

  return (
    <HeaderWrapper>
      <MainContainer>
        <LeftSection />
        <RightSection lang={lang} setLang={setLang} />
      </MainContainer>
      <NavContainer>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            isSelected={selectedNav === item.id}
            onClick={() => setSelectedNav(item.id)}
          >
            {item.name}
          </NavItem>
        ))}
      </NavContainer>
    </HeaderWrapper>
  );
};

export default Header;
