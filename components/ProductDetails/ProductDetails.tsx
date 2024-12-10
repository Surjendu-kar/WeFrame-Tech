import { Box, Stack, styled } from "@mui/material";
import SelectedNav from "./SelectedNav";
import ProductImageGallery from "./ProductImageGallery";
import ProductDescription from "./ProductDescription";
import DeliveryQuestions from "./DeliveryQuestions";
import ProductInfo from "./ProductInfo";

const ProductContainer = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  maxWidth: theme.spacing(160),
  padding: theme.spacing(0, 2),

  [theme.breakpoints.down("sm")]: {
    maxWidth: theme.spacing(40),
  },
}));

function ProductDetails() {
  return (
    <ProductContainer>
      {/* Selected Navigation */}
      <SelectedNav />

      <Stack gap={4}>
        {/* Product Layout Container */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <ProductImageGallery />
          <ProductInfo />
        </Box>
        {/* Product description */}
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <ProductDescription />
          <DeliveryQuestions />
        </Box>
      </Stack>
    </ProductContainer>
  );
}

export default ProductDetails;
