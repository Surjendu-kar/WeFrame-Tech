import { styled, Box, Typography, Select, Input } from "@mui/material";
import Image from "next/image";

export const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {},
}));

// left style
export const LeftContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {},
}));

export const SearchInput = styled(Input)(({ theme }) => ({
  width: "768px",
  height: "50px",
  backgroundColor: "#F9FAFB",
  borderRadius: theme.spacing(0.6),
  padding: theme.spacing(0, 1.5),

  "& .MuiInput-input": {
    height: "50px",
    padding: 0,
    fontSize: theme.spacing(1.4),
    "&::placeholder": {
      color: "#667482",
      opacity: 0.75,
    },
  },
}));

export const SearchIconImage = styled(Image)({
  opacity: 0.5,
  width: "15px",
  height: "15px",
});

// right style

export const RightContainer = styled(LeftContainer)(({ theme }) => ({
  gap: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {},
}));

export const StyledContainer = styled(LeftContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: theme.palette.grey[700],
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {},
}));

export const BasketContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background: theme.palette.primary.main,
  gap: theme.spacing(0.8),
  padding: theme.spacing(1, 1.6),
  borderRadius: theme.spacing(0.6),
  [theme.breakpoints.down("sm")]: {},
}));

export const AvatarCircle = styled(Box)(({ theme }) => ({
  background: "#EAEDEE",
  height: theme.spacing(4.4),
  width: theme.spacing(4.4),
  borderRadius: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    paddingRight: "25px !important",
    fontSize: theme.spacing(1.4),
    fontWeight: 500,
    color: theme.palette.grey[800],
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),

    "&:focus": {
      backgroundColor: "transparent",
    },
  },

  "&::before": {
    border: "none",
  },

  "&:hover:not(.Mui-disabled, .Mui-error)::before": {
    border: "none",
  },

  "&::after": {
    border: "none",
  },

  "& .MuiSelect-icon": {
    color: theme.palette.grey[800],
    fontSize: "20px",
  },
  "& .MuiSelect-selectMenu": {
    paddingLeft: theme.spacing(1),
  },
}));

export const selectMenuProps = {
  PaperProps: {
    sx: {
      mt: 1,
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      "& .MuiMenuItem-root": {
        fontSize: "14px",
        fontWeight: 500,
        padding: "8px 16px",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      },
    },
  },
};
