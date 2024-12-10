import React, { useState } from "react";
import {
  Box,
  styled,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { navItems } from "@/data";

const HeaderWrapper = styled("header")(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  backgroundColor: "white",
  zIndex: 1000,
  [theme.breakpoints.down("sm")]: {
    position: "relative",
  },
}));

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2, 3, 3, 3),
  gap: theme.spacing(10),

  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    padding: theme.spacing(1),
    justifyContent: "space-around",
    gap: theme.spacing(1),
  },

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

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },

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

const StyledMenuItem = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  fontSize: theme.spacing(1.4),
  color: isSelected ? theme.palette.primary.main : theme.palette.grey[500],
  textTransform: "uppercase",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const MobileNavContainer = styled(Box)(({ theme }) => ({
  display: "none",
  borderBottom: "1px solid #EAEDEE",
  padding: theme.spacing(0, 1),
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "flex-start",
    position: "absolute",
    top: theme.spacing(1),
    left: theme.spacing(-1),
    borderBottom: "none",
  },
}));

const Header = () => {
  const [lang, setLang] = useState<string>("");
  const [selectedNav, setSelectedNav] = useState(1);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavItemClick = (id: number) => {
    setSelectedNav(id);
    handleMenuClose();
  };

  return (
    <HeaderWrapper>
      <MainContainer>
        <LeftSection />
        <RightSection lang={lang} setLang={setLang} />
      </MainContainer>

      {/* Desktop Navigation */}
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

      {/* Mobile Navigation */}
      <MobileNavContainer>
        <IconButton onClick={handleMenuOpen} sx={{ color: "grey.500" }}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              mt: 1,
              width: 200,
            },
          }}
        >
          {navItems.map((item) => (
            <StyledMenuItem
              key={item.id}
              isSelected={selectedNav === item.id}
              onClick={() => handleNavItemClick(item.id)}
            >
              {item.name}
            </StyledMenuItem>
          ))}
        </Menu>
      </MobileNavContainer>
    </HeaderWrapper>
  );
};

export default Header;
