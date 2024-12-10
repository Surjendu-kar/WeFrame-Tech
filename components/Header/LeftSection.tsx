import React from "react";
import Image from "next/image";
import { Box, styled } from "@mui/material";
import Logo from "@/public/weFramelogo.svg";
import SearchAutocomplete from "../Search/SearchAutocomplete";

const LeftContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const ImgStyle = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "40px",
  },
}));

const LeftSection: React.FC = () => {
  return (
    <LeftContainer>
      <ImgStyle src={Logo} alt="WeFramelogo" />
      <SearchAutocomplete />
    </LeftContainer>
  );
};

export default LeftSection;
