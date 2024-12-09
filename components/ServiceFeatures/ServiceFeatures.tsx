import { Stack, Typography, Box, styled } from "@mui/material";
import CleaningImg from "@/public/ServiceFeatureImg/dish.svg";
import AmbulanceImg from "@/public/ServiceFeatureImg/Groupe_123.svg";
import DeliveryImg from "@/public/ServiceFeatureImg/Groupe_25.svg";
import OrderImg from "@/public/ServiceFeatureImg/Groupe_56.svg";
import Image from "next/image";
import theme from "@/theme";

const Container = styled(Stack)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(6, 0),
  alignItems: "center",
  backgroundColor: "#fff4f991",
  gap: theme.spacing(5),
  marginTop: theme.spacing(6),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "35px",
  color: theme.palette.grey[600],
  "& span": {
    color: "#5CD2DD",
    fontFamily: "Cabinet Grotesk",
    fontWeight: 800,
    fontSize: theme.spacing(3.5),
  },
}));

const Subtitle = styled(Typography)(() => ({
  color: theme.palette.grey[200],
  fontSize: theme.spacing(1.4),
}));

const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(10),
  width: "100%",
}));

const FeatureItem = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(1),

  ".title": {
    fontSize: theme.spacing(2),
    color: theme.palette.grey[600],
  },

  ".subtitle": {
    fontSize: theme.spacing(1.4),
    color: theme.palette.grey[200],
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
          <Image src={DeliveryImg} alt="" />
          <Typography className="title">Livraison & Reprise</Typography>
          <Typography className="subtitle">Selon vos besoins</Typography>
        </FeatureItem>

        <FeatureItem>
          <Image src={CleaningImg} alt="" />
          <Typography className="title">Nettoyage</Typography>
          <Typography className="subtitle">Selon vos besoins</Typography>
        </FeatureItem>

        <FeatureItem>
          <Image src={OrderImg} alt="" />
          <Typography className="title">Commande Illimitée</Typography>
          <Typography className="subtitle">Tout est possible</Typography>
        </FeatureItem>

        <FeatureItem>
          <Image src={AmbulanceImg} alt="" />
          <Typography className="title">Transport & Enlèvement</Typography>
          <Typography className="subtitle">On s&apos;occupe de tout</Typography>
        </FeatureItem>
      </FeaturesGrid>
    </Container>
  );
};

export default ServiceFeatures;
