import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import HeartIcon from "../HeartIcon/HeartIcon";
import { StaticImageData } from "next/image";

interface ProductCardProps {
  image: string | StaticImageData;
  title: string;
  price: number;
  width?: string;
  height?: string;
}

const CardContainer = styled(Stack)<{ width?: string }>(
  ({ width = "330px" }) => ({
    width,
  })
);
const ImageBox = styled(Stack)<{ height?: string }>(
  ({ theme, height = "362px" }) => ({
    backgroundColor: "#F9F7F5",
    padding: theme.spacing(2, 1, 0.8),
    height,
  })
);

const HeaderBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const CategoryLabel = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0.05, 0.25),
  background: "#FFFFFF",
  borderRadius: "4px",
  color: theme.palette.grey[900],
  fontSize: theme.spacing(1),
  textTransform: "uppercase",
  fontWeight: 500,
}));

const ImageContainer = styled(Stack)(() => ({
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  height: "calc(100% - 40px)",
}));

const InfoContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.2),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display",
  fontSize: theme.spacing(2.4),
  textTransform: "capitalize",
  color: theme.palette.grey[600],
}));

const Price = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2.4),
}));

const PriceBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const ReferenceText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: "#9C9C9C",
  letterSpacing: "1px",

  span: {
    fontSize: theme.spacing(1),
    color: "#9C9C9C",
  },
}));

const PiecesLabel = styled(Typography)(({ theme }) => ({
  background: "#F1F4F6",
  fontSize: theme.spacing(1.1),
  padding: theme.spacing(0.6, 0.8),
  color: "#546A7D",
}));

const ProductCard = ({
  image,
  title,
  price,
  width,
  height,
}: ProductCardProps) => {
  return (
    <CardContainer width={width}>
      <ImageBox height={height}>
        <HeaderBox>
          <HeartIcon />
          <CategoryLabel>Art de la table</CategoryLabel>
        </HeaderBox>
        <ImageContainer>
          <Image
            src={image}
            alt={title}
            style={{
              width: "224px",
              height: "224px",
            }}
            loading="lazy"
          />
        </ImageContainer>
      </ImageBox>

      <InfoContainer>
        <PriceBox>
          <Title>{title}</Title>
          <Box display="flex">
            <Price>{price}</Price>
            <Typography fontSize="15px">€</Typography>
          </Box>
        </PriceBox>

        <PriceBox>
          <ReferenceText>
            0,35€/Pièce <span>· RÉF : VABGN5</span>
          </ReferenceText>
          <PiecesLabel>20 pièces</PiecesLabel>
        </PriceBox>
      </InfoContainer>
    </CardContainer>
  );
};

export default ProductCard;
