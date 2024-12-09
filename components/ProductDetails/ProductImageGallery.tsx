import { Box, Stack, styled } from "@mui/material";
import Image from "next/image";
import PrinterImg from "@/public/ProductDetails/printer.png";
import TableIcon from "@/public/SimilarProducts/tableImg.webp";

const ImageContainer = styled(Stack)(() => ({
  flexDirection: "row",
}));

const ThumbnailStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
  position: "absolute",
  top: theme.spacing(1),
  left: theme.spacing(1),
  zIndex: 1,
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

interface ThumbnailProps {
  isFirst?: boolean;
}

const Thumbnail = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isFirst",
})<ThumbnailProps>(({ theme, isFirst }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  background: isFirst ? "#FFFFFF" : "#fcfbfb",
  borderRadius: theme.spacing(0.75),
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: isFirst ? 1 : 0.75,
}));

function ProductImageGallery() {
  const thumbnails = Array(4).fill(TableIcon);

  return (
    <ImageContainer>
      <Container>
        <ThumbnailStack>
          {thumbnails.map((thumb, index) => (
            <Thumbnail key={index} isFirst={index === 0}>
              <Image
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                width={30}
                height={30}
                style={{ objectFit: "contain" }}
              />
            </Thumbnail>
          ))}
        </ThumbnailStack>
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
