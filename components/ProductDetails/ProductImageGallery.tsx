import { Box, Stack, styled } from "@mui/material";
import Image from "next/image";
import PrinterImg from "@/public/BodyImages/printer.png";

const ImageContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}));

const Container = styled(Box)(({ theme }) => ({
  background: "#F8F6F4",
  width: "761px",
  minWidth: "761px",
  height: "652px",
  borderRadius: theme.spacing(0.75),
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ThumbnailsContainer = styled(Box)(() => ({
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

      <ThumbnailsContainer></ThumbnailsContainer>
    </ImageContainer>
  );
}

export default ProductImageGallery;
