import { Stack, styled, Typography } from "@mui/material";

const ThumbnailsContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  width: "49%",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2),
  color: theme.palette.grey[900],
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: theme.palette.grey[200],
  fontWeight: 400,
}));

function ProductDescription() {
  return (
    <ThumbnailsContainer>
      <Title>Description produit</Title>
      <Description>
        {`   Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
    pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour
    votre mariage, une fête d'anniversaire ou du personnel, ce produit a
    fait l'objet d'une sélection rigoureuse par notre équipe. Il est en
    location chez nous sous la référence "VAJGC". Nous sommes à votre
    disposition pour que les événements de nos clients, même en
    last-minute, soient toujours une réussite. Vous pourrez trouver tout
    une série d'autre produit à louer de ce type dans la catégorie "Art de
    la Table".`}
      </Description>
    </ThumbnailsContainer>
  );
}

export default ProductDescription;
