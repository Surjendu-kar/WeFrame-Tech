import { Stack, Typography, Box, styled } from "@mui/material";
import CleaningImg from "@/public/ServiceFeatureImg/dish.svg";
import AmbulanceImg from "@/public/ServiceFeatureImg/Groupe_123.svg";
import DeliveryImg from "@/public/ServiceFeatureImg/Groupe_25.svg";
import OrderImg from "@/public/ServiceFeatureImg/Groupe_56.svg";
import Image from "next/image";
import theme from "@/theme";
import RegisterSection from "./RegisterSection";

interface DividerProps {
  right?: number;
  width?: number;
}

const Container = styled(Stack)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(6, 0),
  background: "linear-gradient(180deg, #fff4f991 0%, #ffffff 100%)",
  gap: theme.spacing(5),
  marginTop: theme.spacing(6),
  maxWidth: "1600px",

  [theme.breakpoints.down("sm")]: {
    maxWidth: theme.spacing(40),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(3.5),
  color: theme.palette.grey[600],

  "& span": {
    color: theme.palette.primary.light,
    fontWeight: 700,
    fontSize: theme.spacing(3.5),
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(2.5),

    "& span": {
      fontSize: theme.spacing(2.5),
    },
  },
}));

const Subtitle = styled(Typography)(() => ({
  color: theme.palette.grey[200],
  fontSize: theme.spacing(1.4),

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1),
  },
}));

const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(10),
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1),
  },
}));

const FeatureItem = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(1),
  position: "relative",

  ".title": {
    fontSize: theme.spacing(2),
    color: theme.palette.grey[600],
  },

  ".subtitle": {
    fontSize: theme.spacing(1.4),
    color: theme.palette.grey[200],
  },

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0.5),

    ".title": {
      fontSize: theme.spacing(1.1),
    },

    ".subtitle": {
      fontSize: theme.spacing(0.9),
    },
  },
}));

const Divider = styled(Stack)<DividerProps>(
  ({ theme, right = -10, width = 12.8 }) => ({
    position: "absolute",
    width: theme.spacing(width),
    height: theme.spacing(0.05),
    background: theme.palette.grey[200],
    right: theme.spacing(right),
    top: "20%",
    transform: "translateY(-20%)",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  })
);

const ImgStyle = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "30px",
    height: "40px",
  },
}));

const ServiceFeatures = () => {
  return (
    <Container>
      <Stack gap={0} alignItems={"center"}>
        <Title>
          On s&apos;occupe de <span>tout</span>
        </Title>
        <Subtitle>
          Office ipsum you must be muted. It meeting commitment busy pain.
        </Subtitle>
      </Stack>

      <FeaturesGrid>
        <FeatureItem>
          <ImgStyle src={DeliveryImg} alt="DeliveryImg" />
          <Typography className="title">Livraison & Reprise</Typography>
          <Typography className="subtitle">Selon vos besoins</Typography>
          <Divider />
        </FeatureItem>

        <FeatureItem>
          <ImgStyle src={CleaningImg} alt="CleaningImg" />
          <Typography className="title">Nettoyage</Typography>
          <Typography className="subtitle">Selon vos besoins</Typography>
          <Divider right={-12} />
        </FeatureItem>

        <FeatureItem>
          <ImgStyle src={OrderImg} alt="OrderImg" />
          <Typography className="title">Commande Illimitée</Typography>
          <Typography className="subtitle">Tout est possible</Typography>
          <Divider width={16.6} right={-13} />
        </FeatureItem>

        <FeatureItem>
          <ImgStyle src={AmbulanceImg} alt="AmbulanceImg" />
          <Typography className="title">Transport & Enlèvement</Typography>
          <Typography className="subtitle">On s&apos;occupe de tout</Typography>
        </FeatureItem>
      </FeaturesGrid>

      <RegisterSection />
    </Container>
  );
};

export default ServiceFeatures;
