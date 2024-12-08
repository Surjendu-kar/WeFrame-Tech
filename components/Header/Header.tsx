"use client";
import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { MainContainer, NavContainer, NavItem } from "./HeaderStyles";
import { navItems } from "@/data";

const Header: React.FC = () => {
  const [lang, setLang] = React.useState<string>("");
  const [selectedNav, setSelectedNav] = React.useState(1);

  return (
    <>
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
    </>
  );
};

export default Header;
