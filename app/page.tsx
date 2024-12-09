"use client";
import { Stack } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

function Home() {
  return (
    <Stack minHeight="100vh">
      {/* header */}
      <Header />

      {/* main container */}
      <Stack sx={{ alignItems: "center" }}>
        <ProductDetails />
      </Stack>
      {/* footer */}
      <Footer />
    </Stack>
  );
}

export default Home;
