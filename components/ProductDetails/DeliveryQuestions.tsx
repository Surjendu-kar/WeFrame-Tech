import { useState } from "react";
import { Box, Stack, styled } from "@mui/material";

const SectionContainer = styled(Box)(({ theme }) => ({
  // width: theme.spacing(75.8),
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

const PlusIcon = styled("span")(({ theme }) => ({
  color: theme.palette.grey[600],
  fontSize: "24px",
}));

interface ExpandableSectionProps {
  title: string;
}

const ExpandableSection = ({ title }: ExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SectionContainer onClick={() => setIsExpanded(!isExpanded)}>
      <SectionTitle>{title}</SectionTitle>
      <PlusIcon>+</PlusIcon>
    </SectionContainer>
  );
};

const DeliveryQuestions = () => {
  return (
    <Stack width={"50%"}>
      <ExpandableSection title="LIVRAISONS" />
      <ExpandableSection title="QUESTIONS" />
    </Stack>
  );
};

export default DeliveryQuestions;
