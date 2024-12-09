import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

const ProductTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(3),
  fontFamily: "Playfair Display",
  color: theme.palette.grey[900],
}));

const PriceText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2.4),
  fontFamily: "Geist",
  lineHeight: theme.spacing(3),
  color: theme.palette.grey[900],
}));

const PriceUnit = styled(PriceText)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: theme.palette.grey[200],
}));

const SpecText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.6),
  fontFamily: "Geist",
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
    <Stack sx={{ flex: 1 }}>
      {/* Title and Favorite */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ProductTitle>Cheese – appareil à raclette 1/2 roue</ProductTitle>
        <Image
          src="/BodyImages/addFav.png"
          alt="Add to favorites"
          width={27}
          height={25}
        />
      </Box>

      {/* Price */}
      <Box display="flex" gap={1}>
        <PriceText>39,50€</PriceText>
        <PriceUnit>/pièce</PriceUnit>
      </Box>

      {/* Specifications */}
      <Box
        sx={{
          borderBottom: "1px solid #EAEDEE",
          borderTop: "1px solid #EAEDEE",
          display: "flex",
          justifyContent: "space-between",
          marginY: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 2, padding: "20px 0" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image
              src="/BodyImages/scaleImg.svg"
              alt="Scale"
              width={24}
              height={24}
            />
            <SpecText>20cm</SpecText>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image
              src="/BodyImages/circleImg.svg"
              alt="Circle"
              width={24}
              height={24}
            />
            <SpecText>50cm</SpecText>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <RefText>RÉF : VABGN5</RefText>
        </Box>
      </Box>

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
  );
}

export default ProductInfo;
