import { useState } from "react";
import { Box, Stack, styled, Collapse, Typography } from "@mui/material";

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#FBF9F899",
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  height: theme.spacing(6.2),
  backgroundColor: "#FBF9F899",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(0, 2.4),
  cursor: "pointer",
}));

const SectionTitle = styled("span")(({ theme }) => ({
  fontSize: theme.spacing(1.6),
  fontWeight: 500,
  color: theme.palette.grey[600],
  fontFamily: "Cabinet Grotesk",
}));

const PlusIcon = styled("span")<{ isexpanded: string }>(
  ({ theme, isexpanded }) => ({
    color: theme.palette.grey[600],
    fontSize: theme.spacing(2.4),
    transition: "transform 0.3s ease",
    transform: isexpanded === "true" ? "rotate(45deg)" : "rotate(0deg)",
  })
);

const ContentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.4),
  backgroundColor: "#fff",
  borderTop: "1px solid #F1F4F6",
}));

const ContentText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: theme.palette.grey[600],
  lineHeight: 1.6,
}));

interface ExpandableSectionProps {
  title: string;
  content: string;
}

const ExpandableSection = ({ title, content }: ExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SectionContainer>
      <SectionHeader onClick={() => setIsExpanded(!isExpanded)}>
        <SectionTitle>{title}</SectionTitle>
        <PlusIcon isexpanded={isExpanded.toString()}>+</PlusIcon>
      </SectionHeader>
      <Collapse in={isExpanded}>
        <ContentContainer>
          <ContentText>{content}</ContentText>
        </ContentContainer>
      </Collapse>
    </SectionContainer>
  );
};

const DeliveryQuestions = () => {
  const sections = [
    {
      title: "LIVRAISONS",
      content:
        "Nous livrons dans toute la France métropolitaine sous 2-3 jours ouvrés. La livraison est gratuite pour toute commande supérieure à 50€. Pour les commandes inférieures, les frais de port sont calculés en fonction du poids et de la destination.",
    },
    {
      title: "QUESTIONS",
      content:
        "Notre service client est disponible du lundi au vendredi de 9h à 18h pour répondre à toutes vos questions. Vous pouvez nous contacter par téléphone, email ou via le formulaire de contact. Nous nous engageons à vous répondre dans les 24h ouvrées.",
    },
  ];

  return (
    <Stack width="50%">
      {sections.map((section, index) => (
        <ExpandableSection
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}
    </Stack>
  );
};

export default DeliveryQuestions;
