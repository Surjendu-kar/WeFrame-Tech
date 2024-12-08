"use client";
import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { MainContainer } from "./HeaderStyles";

const Header: React.FC = () => {
  const [lang, setLang] = React.useState<string>("");

  return (
    <MainContainer>
      <LeftSection />
      <RightSection lang={lang} setLang={setLang} />
    </MainContainer>
  );
};

export default Header;
