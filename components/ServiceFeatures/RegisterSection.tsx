import { Box, Stack, Typography, styled, TextField } from "@mui/material";
import Image from "next/image";
import Frame from "@/public/ServiceFeatureImg/Frame.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const RegisterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  padding: theme.spacing(6, 2),
}));

const ContentStack = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  background: "#FFF3F9",
  borderRadius: theme.spacing(3),
}));

const RegisterText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(4.3),
  color: theme.palette.grey[600],
  marginBottom: theme.spacing(1),
  "& span": {
    color: theme.palette.primary.light,
    fontSize: theme.spacing(4.3),
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: "#BDA2B0",
  marginBottom: theme.spacing(3),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: theme.spacing(56.5),
  "& .MuiInputBase-root": {
    height: theme.spacing(5.8),
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#F5E1EB",
    },
    "&:hover fieldset": {
      borderColor: "#F5E1EB",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F5E1EB",
    },
  },
}));

const RegisterButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.background.paper,
  padding: theme.spacing(1.9, 1.6),
  borderRadius: "8px",
  textTransform: "uppercase",
  border: "none",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  cursor: "pointer",
  transition: "all 0.3s ease",

  "& .MuiSvgIcon-root": {
    transition: "transform 0.3s ease",
  },

  "&:hover": {
    "& .MuiSvgIcon-root": {
      transform: "translateX(5px)",
    },
  },
}));

const InputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.6),
  alignItems: "center",
}));

const RegisterSection = () => {
  return (
    <RegisterContainer>
      <Image src={Frame} alt="frame img" />
      <ContentStack>
        <RegisterText>
          S&apos;inscrire & économiser <span>10%</span>
        </RegisterText>
        <Description>
          Office ipsum you must be muted. Synergize helicopter prioritize anyway
          job due harvest most opportunity didn&apos;t. Yet busy any meeting
          shark light marginalised 4-blocker message. Productize corporate nail
          caught synergy highlights lunch. Company another pushback items dear
          or any.
        </Description>
        <InputContainer>
          <StyledTextField placeholder="john@doe.com" variant="outlined" />
          <RegisterButton>
            S&apos;INSCRIRE
            <ArrowForwardIcon sx={{ fontSize: "18px" }} />
          </RegisterButton>
        </InputContainer>
      </ContentStack>
    </RegisterContainer>
  );
};

export default RegisterSection;
