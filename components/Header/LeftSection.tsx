import React from "react";
import Image from "next/image";
import { Box, styled } from "@mui/material";
import Logo from "@/public/weFramelogo.svg";
import SearchAutocomplete from "../Search/SearchAutocomplete";

const LeftContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {},
}));

const LeftSection: React.FC = () => {
  return (
    <LeftContainer>
      <Image src={Logo} alt="WeFramelogo" />
      <SearchAutocomplete />
    </LeftContainer>
  );
};

export default LeftSection;
