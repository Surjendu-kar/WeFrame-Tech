import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import PrinterImg from "@/public/BodyImages/printer.png";

const ImageContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}));

const Container = styled(Box)(({ theme }) => ({
  background: "#F8F6F4",
  minWidth: "761px",
  height: "652px",
  borderRadius: theme.spacing(0.75),
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ThumbnailsContainer = styled(Stack)(() => ({
  display: "flex",
}));

function ProductImageGallery() {
  return (
    <ImageContainer>
      {/* Main Product Image */}
      <Container>
        <Image
          src={PrinterImg}
          alt="Raclette cheese machine"
          style={{
            maxWidth: "80%",
            height: "auto",
            objectFit: "contain",
          }}
          priority
        />
      </Container>

      <ThumbnailsContainer>
        <Typography fontSize={"20px"} color="#111928">
          Description produit
        </Typography>
        <Typography fontSize={"14px"} color="#9C9C9C">
          {`   Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
          pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour
          votre mariage, une fête d'anniversaire ou du personnel, ce produit a
          fait l'objet d'une sélection rigoureuse par notre équipe. Il est en
          location chez nous sous la référence "VAJGC". Nous sommes à votre
          disposition pour que les événements de nos clients, même en
          last-minute, soient toujours une réussite. Vous pourrez trouver tout
          une série d'autre produit à louer de ce type dans la catégorie "Art de
          la Table".`}
        </Typography>
      </ThumbnailsContainer>
    </ImageContainer>
  );
}

export default ProductImageGallery;
