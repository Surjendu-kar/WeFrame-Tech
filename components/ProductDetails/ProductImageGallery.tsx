import { Box, Stack, styled } from "@mui/material";
import Image from "next/image";
import PrinterImg from "@/public/BodyImages/printer.png";

const ImageContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}));

const Container = styled(Box)(({ theme }) => ({
  background: "#F8F6F4",
  minWidth: theme.spacing(76.1),
  minHeight: theme.spacing(65.2),
  borderRadius: theme.spacing(0.75),
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
            height: "auto",
            objectFit: "contain",
          }}
          priority
        />
      </Container>
    </ImageContainer>
  );
}

export default ProductImageGallery;
