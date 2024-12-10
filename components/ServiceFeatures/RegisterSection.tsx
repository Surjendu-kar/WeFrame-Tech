import {
  Box,
  Stack,
  Typography,
  styled,
  TextField,
  Button,
} from "@mui/material";
import Image from "next/image";
import Frame from "@/public/ServiceFeatureImg/Frame.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const RegisterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  width: "100%",

  padding: theme.spacing(6, 2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    flexDirection: "column",
    alignItems: "center",
  },

  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "50%",
  maxWidth: theme.spacing(70.3),
  minHeight: theme.spacing(30),
  flexShrink: 0,

  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: "100%",
  },
}));

const ContentStack = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  background: "#FFF3F9",
  borderRadius: theme.spacing(3),
  width: "50%",
  flexShrink: 0,

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RegisterText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(4.3),
  color: theme.palette.grey[600],
  marginBottom: theme.spacing(1),

  "& span": {
    color: theme.palette.primary.light,
    fontSize: theme.spacing(4.3),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.spacing(2.5),
    },

    [theme.breakpoints.down("md")]: {
      fontSize: theme.spacing(1.5),
    },
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.spacing(2.5),
  },

  [theme.breakpoints.down("md")]: {
    fontSize: theme.spacing(1.5),
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(2.3),
    "& span": {
      fontSize: theme.spacing(2.3),
    },
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: "#BDA2B0",
  marginBottom: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.spacing(1.2),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: theme.spacing(56.5),
  "& .MuiInputBase-root": {
    height: theme.spacing(5.8),
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    fontSize: theme.spacing(1.75),

    [theme.breakpoints.up("lg")]: {
      fontSize: theme.spacing(2),
    },
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

  [theme.breakpoints.down("sm")]: {
    width: theme.spacing(16.5),
    "& .MuiInputBase-root": {
      height: theme.spacing(4),
    },
    "& .MuiInputBase-input": {
      fontSize: "12px",
      "&::placeholder": {
        fontSize: "12px",
      },
    },
  },

  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

const RegisterButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.background.paper,
  padding: theme.spacing(1.6, 1.8),
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

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    fontSize: "10px",
    "& .MuiSvgIcon-root": {
      fontSize: "12px",
    },
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.spacing(1),
  },
}));

const InputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.6),
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const RegisterSection = () => {
  return (
    <RegisterContainer>
      <ImageWrapper>
        <Image
          src={Frame}
          alt="frame img"
          fill
          style={{
            objectFit: "contain",
          }}
          priority
        />
      </ImageWrapper>

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
