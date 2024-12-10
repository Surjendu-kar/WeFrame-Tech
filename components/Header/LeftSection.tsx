import React from "react";
import Image from "next/image";
import { Box, styled, useMediaQuery } from "@mui/material";
import Logo from "@/public/weFramelogo.svg";
import SearchAutocomplete from "../Search/SearchAutocomplete";

const LeftContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const LeftSection: React.FC = () => {
  const isSmallerDevice = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <LeftContainer>
      <Image
        src={Logo}
        alt="WeFramelogo"
        width={isSmallerDevice ? 60 : 100}
        height={50}
      />
      <SearchAutocomplete />
    </LeftContainer>
  );
};

export default LeftSection;
