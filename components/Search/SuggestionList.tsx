import React from "react";
import { Box, Typography, Stack, styled, useMediaQuery } from "@mui/material";
import { suggestions } from "@/data";
import SearchIcon from "@mui/icons-material/Search";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import GridViewIcon from "@mui/icons-material/GridView";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: theme.palette.grey[200],
  fontWeight: 500,
  marginBottom: theme.spacing(1),
}));

const SuggestionItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 1, 1, 0),
  cursor: "pointer",
  borderRadius: theme.spacing(0.5),
  "&:hover": {
    backgroundColor: "#F9FAFB",
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "8px",

  [theme.breakpoints.down("lg")]: {
    width: "16px",
    height: "16px",
  },
}));

export const SuggestionList = () => {
  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "rotate":
        return <RotateRightIcon sx={{ fontSize: "22px", color: "#000c" }} />;
      case "search":
        return <SearchIcon sx={{ fontSize: "22px", color: "#000c" }} />;
      case "grid":
        return <GridViewIcon sx={{ fontSize: "22px", color: "#000c" }} />;
      case "tag":
        return <LocalOfferIcon sx={{ fontSize: "22px", color: "#000c" }} />;
      default:
        return <SearchIcon sx={{ fontSize: "22px", color: "#000c" }} />;
    }
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: isSmallDevice ? "100%" : "30%" }}
    >
      <SectionTitle>Suggestions</SectionTitle>
      <Stack
        flex={1}
        flexDirection={isSmallDevice ? "row" : "column"}
        flexWrap="wrap"
      >
        {suggestions.map((item, index) => (
          <SuggestionItem key={index}>
            <IconContainer>{getIcon(item.icon)}</IconContainer>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: isSmallDevice ? "10px" : "15px" }}>
                {item.text}
              </Typography>
              {item.subText && (
                <Typography
                  sx={{
                    fontSize: isSmallDevice ? "8px" : "10px",
                    color: "#9C9C9C",
                  }}
                >
                  {item.subText}
                </Typography>
              )}
            </Box>
            <NorthWestIcon
              sx={{
                fontSize: "18px",
                color: "#000c",
                marginRight: "8px",
              }}
            />
          </SuggestionItem>
        ))}
      </Stack>
    </Box>
  );
};
