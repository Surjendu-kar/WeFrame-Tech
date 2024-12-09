import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";

const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(2, 0),
}));

const NavDot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  height: theme.spacing(0.5),
  width: theme.spacing(0.5),
  borderRadius: "50%",
}));

const NavText = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[200],
  fontSize: theme.spacing(1.4),
}));

function SelectedNav() {
  return (
    <NavContainer>
      <Link
        href="/"
        style={{
          color: "#393939",
          textDecoration: "none",
        }}
      >
        Home
      </Link>
      <NavDot />
      <NavText>Art de la table</NavText>
    </NavContainer>
  );
}

export default SelectedNav;
