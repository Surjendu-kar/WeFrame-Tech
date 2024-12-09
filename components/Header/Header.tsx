import React from "react";
import { styled } from "@mui/material";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { MainContainer, NavContainer, NavItem } from "./HeaderStyles";
import { navItems } from "@/data";

const HeaderWrapper = styled("header")({
  position: "sticky",
  top: 0,
  width: "100%",
  backgroundColor: "white",
  zIndex: 1000,
});

const Header: React.FC = () => {
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
