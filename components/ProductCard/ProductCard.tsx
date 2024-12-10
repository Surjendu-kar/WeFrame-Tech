import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import HeartIcon from "../HeartIcon/HeartIcon";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface ProductCardProps {
  image: string | StaticImageData;
  title: string;
  price: number;
  width?: string;
  height?: string;
}

const CardContainer = styled(Stack)<{ width?: string }>(
  ({ width = "330px", theme }) => ({
    width,
    position: "relative",
    "&:hover": {
      ".hover-controls": {
        opacity: 1,
        transform: "translateY(0)",
      },
      ".lot": {
        opacity: 1,
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "180px",
    },
  })
);

const HoverControls = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "90px",
  left: 0,
  right: 0,
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  padding: theme.spacing(0.5),
  margin: "10px",
  opacity: 0,
  transition: "all 0.3s ease-in-out",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  borderRadius: "5px",

  [theme.breakpoints.down("sm")]: {
    margin: "5px",
  },
}));

const QuantityContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flex: 1,
}));

const QuantityControl = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F1F4F6",
  padding: theme.spacing(0.75, 1),
  borderRadius: "4px",
  flex: 1,
  position: "relative",
  height: "40px",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0.5),
    height: "25px",
  },
}));

const QuantityLabel = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: "#000",
  flex: "0 0 auto",

  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));

const QuantityButton = styled("button")(({ theme }) => ({
  border: "none",
  backgroundColor: "transparent",
  color: "#546A7D",
  fontSize: "18px",
  cursor: "pointer",
  padding: theme.spacing(0.25),
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
  "&.left": {
    left: "8px",
  },
  "&.right": {
    right: "8px",
  },
  "&:hover": {
    color: "#000",
  },

  [theme.breakpoints.down("sm")]: {
    "&.left": {
      left: "1px",
    },
    "&.right": {
      right: "1px",
    },
    fontSize: "14px",
  },
}));

const QuantityValue = styled(Typography)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "14px",
  color: "#000",

  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));

const AddButton = styled("button")(({ theme }) => ({
  backgroundColor: "#FF4E91",
  color: "white",
  border: "none",
  padding: theme.spacing(0.75, 2),
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 500,
  minWidth: "100px",
  height: "40px",
  "&:hover": {
    backgroundColor: "#FF1F7D",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    padding: theme.spacing(0.5, 1),
    height: "25px",
    minWidth: "60px",
  },
}));

const ImageBox = styled(Stack)<{ height?: string }>(
  ({ theme, height = "362px" }) => ({
    backgroundColor: "#F9F7F5",
    padding: theme.spacing(2, 1, 0.8),
    height,

    [theme.breakpoints.down("sm")]: {
      height: "180px",
      padding: theme.spacing(1),
    },
  })
);

const HeaderBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const CategoryLabelContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  "& .lot": {
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
}));

const CategoryLabel = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0.05, 0.25),
  background: "#FFFFFF",
  borderRadius: "4px",
  color: theme.palette.grey[900],
  fontSize: theme.spacing(1),
  textTransform: "uppercase",
  fontWeight: 500,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(0.7),
  },
}));

const ImageContainer = styled(Stack)(() => ({
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  height: "calc(100% - 40px)",
}));

const ImageWrapper = styled(Box)(() => ({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const InfoContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.2),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display",
  fontSize: theme.spacing(2.4),
  textTransform: "capitalize",
  color: theme.palette.grey[600],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1.5),
  },
}));

const Price = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2.4),
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1.5),
  },
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

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1),
  },
}));

const PiecesLabel = styled(Typography)(({ theme }) => ({
  background: "#F1F4F6",
  fontSize: theme.spacing(1.1),
  padding: theme.spacing(0.6, 0.8),
  color: "#546A7D",

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(0.9),
  },
}));

const ImgStyle = styled(Image)(({ theme }) => ({
  width: "224px",
  height: "224px",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "100px",
  },
}));

const ProductCard = ({
  image,
  title,
  price,
  width,
  height,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <CardContainer width={width}>
      <ImageBox height={height}>
        <HeaderBox>
          <HeartIcon />
          <CategoryLabelContainer>
            <CategoryLabel>Art de la table</CategoryLabel>
            <CategoryLabel className="lot">LOT</CategoryLabel>
          </CategoryLabelContainer>
        </HeaderBox>
        <ImageContainer>
          <ImageWrapper>
            <ImgStyle src={image} alt={title} loading="lazy" />
          </ImageWrapper>
        </ImageContainer>
        <HoverControls className="hover-controls">
          <QuantityContainer>
            <QuantityLabel>QTÉ</QuantityLabel>
            <QuantityControl>
              <QuantityButton className="left" onClick={handleDecrement}>
                −
              </QuantityButton>
              <QuantityValue>{quantity}</QuantityValue>
              <QuantityButton className="right" onClick={handleIncrement}>
                +
              </QuantityButton>
            </QuantityControl>
          </QuantityContainer>
          <AddButton>Ajouter</AddButton>
        </HoverControls>
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
