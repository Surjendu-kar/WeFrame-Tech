"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "@/public/weFramelogo.svg";
import { StyledContainer } from "./HeaderStyles";

const LeftSection: React.FC = () => {
  return (
    <StyledContainer>
      <Image src={Logo} alt="WeFramelogo" />
      <Input endAdornment={<SearchIcon />} placeholder="Search" />
    </StyledContainer>
  );
};

export default LeftSection;
