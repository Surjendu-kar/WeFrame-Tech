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
      main: "#0093D0",
      light: "#5CD2DD",
    },
    secondary: {
      main: "#EE4197",
    },
    grey: {
      200: "#9C9C9C",
      400: "#5D5D5D",
      500: "#6B7280",
      700: "#3B4347",
      900: "#111928",
    },
    background: {
      paper: "#FFFFFF",
    },
  },
});

export default theme;
