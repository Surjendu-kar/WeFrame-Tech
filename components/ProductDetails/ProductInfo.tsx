import HeartIcon from "@/components/HeartIcon/HeartIcon";
import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import ScaleImg from "@/public/ProductDetails/scaleImg.svg";
import CircleImg from "@/public/ProductDetails/circleImg.svg";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const ProductTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(3),
  fontFamily: "Playfair Display",
  color: theme.palette.grey[900],
}));

const PriceText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2.4),
  lineHeight: theme.spacing(3),
  color: theme.palette.grey[900],
}));

const PriceUnit = styled(PriceText)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: theme.palette.grey[200],
  letterSpacing: "0.75px",
}));

const SpecificationBox = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #EAEDEE",
  borderTop: "1px solid #EAEDEE",
  display: "flex",
  justifyContent: "space-between",
  margin: theme.spacing(1, 0),
}));

const MeasurementBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const MeasurementContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(0.1),
}));

const SpecText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.8),
  color: theme.palette.grey[900],
}));

const UnitText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.2),
  color: theme.palette.grey[900],
  marginBottom: theme.spacing(0.5),
}));

const RefText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.2),
  color: theme.palette.grey[200],
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: theme.palette.grey[400],
}));

function ProductInfo() {
  return (
    <Stack sx={{ flex: 1, justifyContent: "space-between" }}>
      <Stack>
        {/* Title and Favorite */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <ProductTitle>Cheese – appareil à raclette 1/2 roue</ProductTitle>
          <HeartIcon />
        </Box>

        {/* Price */}
        <Box display="flex" gap={1}>
          <PriceText>39,50€</PriceText>
          <PriceUnit>/pièce</PriceUnit>
        </Box>

        {/* Specifications */}
        <SpecificationBox>
          <Box sx={{ display: "flex", gap: 2, padding: "20px 0" }}>
            <MeasurementBox>
              <Image src={ScaleImg} alt="Scale" width={24} height={24} />
              <MeasurementContainer>
                <SpecText>20</SpecText>
                <UnitText>cm</UnitText>
              </MeasurementContainer>
            </MeasurementBox>
            <MeasurementBox>
              <Image src={CircleImg} alt="Circle" width={24} height={24} />
              <MeasurementContainer>
                <SpecText>50</SpecText>
                <UnitText>cm</UnitText>
              </MeasurementContainer>
            </MeasurementBox>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <RefText>RÉF : VABGN5</RefText>
          </Box>
        </SpecificationBox>

        {/* Description */}
        <Stack gap={2}>
          <Stack>
            <DescriptionText>
              Location appareil à raclette - Raclette traditionnelle 1/2 roue
            </DescriptionText>
            <DescriptionText>Réglable en hauteur</DescriptionText>
            <DescriptionText>Appareil à raclette professionnel</DescriptionText>
            <DescriptionText>
              Boîtier de chauffe horizontal réglable en hauteur
            </DescriptionText>
          </Stack>
          <Stack>
            <DescriptionText>220V</DescriptionText>
            <DescriptionText>900W</DescriptionText>
          </Stack>
        </Stack>
      </Stack>

      {/* add to cart */}
      <ButtonGroup />
    </Stack>
  );
}

export default ProductInfo;
