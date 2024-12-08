import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Stack } from "@mui/material";

function Home() {
  return (
    <Stack minHeight="100vh">
      {/* header */}
      <Header />

      {/* main container */}
      <Stack sx={{ flexGrow: 1, maxWidth: 1600 }}>Body</Stack>

      {/* footer */}
      <Footer />
    </Stack>
  );
}

export default Home;
