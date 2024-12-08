import { styled, Box, Typography } from "@mui/material";

export const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {},
}));

export const LeftContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {},
}));

export const RightContainer = styled(LeftContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledContainer = styled(LeftContainer)(({ theme }) => ({
  gap: theme.spacing(1),
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
