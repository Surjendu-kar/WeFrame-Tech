"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 10,
  typography: {
    htmlFontSize: 10,
    fontSize: 10,
  },
  palette: {
    primary: {
      main: "#F8F6F4",
      light: "#F9F7F5",
    },
    secondary: {
      main: "#0093D0",
      light: "#5CD2DD",
    },
    grey: {
      200: "#9C9C9C",
      400: "#5D5D5D",
      500: "#6B7280",
      900: "#111928",
    },
    background: {
      paper: "#FFFFFF",
    },
  },
});

export default theme;
