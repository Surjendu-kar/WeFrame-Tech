"use client";
import { Stack } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import SimilarProducts from "@/components/SimilarProducts/SimilarProducts";
import InterestProduct from "@/components/InterestProduct/InterestProduct";

function Home() {
  return (
    <Stack minHeight="100vh">
      {/* header */}
      <Header />

      {/* main container */}
      <Stack sx={{ alignItems: "center" }}>
        {/* Select product */}
        <ProductDetails />
        {/* similar products */}
        <SimilarProducts />

        {/* interest products */}
        <InterestProduct/>
      </Stack>
      {/* footer */}
      <Footer />
    </Stack>
  );
}

export default Home;
