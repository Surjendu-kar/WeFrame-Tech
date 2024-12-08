import React from "react";
import Image from "next/image";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "@/public/weFramelogo.svg";
import { LeftContainer } from "./HeaderStyles";

const LeftSection: React.FC = () => {
  return (
    <LeftContainer>
      <Image src={Logo} alt="WeFramelogo" />
      <Input endAdornment={<SearchIcon />} placeholder="Search" />
    </LeftContainer>
  );
};

export default LeftSection;
