import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "@/public/weFramelogo.svg";
import TwitterImg from "@/public/Footer/twitter.png";
import InstaImg from "@/public/Footer/instagram.png";
import LinkedinImg from "@/public/Footer/linkedin-in.png";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "auto",
  justifyContent: "space-between",
  padding: theme.spacing(4, 6, 4, 3),
  borderTop: "1px solid #EAEDEE",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.8),
  color: theme.palette.grey[600],
  fontWeight: 600,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1.2),
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.4),
  color: theme.palette.grey[600],

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1),
  },
}));

const SocialBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0.7),
  border: "0.5px solid #39393959",
  borderRadius: "6px",
}));

const ImgStyle = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "130px",
    height: "50px",
  },
}));

const SocialImg = styled(Image)(({ theme }) => ({
  width: "22px",
  height: "22px",
  [theme.breakpoints.down("sm")]: {
    width: "19px",
    height: "19px",
  },
}));

function Footer() {
  return (
    <MainContainer>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 2, sm: 5 },
          flexWrap: { xs: "wrap" },
          alignItems: { xs: "center" },
          justifyContent: { xs: "space-around" },
        }}
      >
        <ImgStyle src={Logo} alt="logo" />

        <Stack gap={1}>
          <Title>INFOS PRATIQUES</Title>
          <Stack sx={{ gap: { xs: 0.25, sm: 0.5 } }}>
            <SubTitle>À propos</SubTitle>
            <SubTitle>Livraisons & Reprises</SubTitle>
            <SubTitle>Mode d’emploi</SubTitle>
            <SubTitle>F.A.Q</SubTitle>
          </Stack>
        </Stack>

        <Stack gap={1}>
          <Title>LÉGAL</Title>
          <Stack sx={{ gap: { xs: 0.25, sm: 0.5 } }}>
            <SubTitle>Mentions légales</SubTitle>
            <SubTitle>CGU</SubTitle>
            <SubTitle>CGV</SubTitle>
            <SubTitle>Politique de confidentialité</SubTitle>
          </Stack>
        </Stack>

        <Stack gap={1}>
          <Title>MON COMPTE</Title>
          <Stack sx={{ gap: { xs: 0.25, sm: 0.5 } }}>
            <SubTitle>Accéder à mon compte</SubTitle>
            <SubTitle>Ma liste d’envie</SubTitle>
            <SubTitle>Créer un compte</SubTitle>
            <SubTitle>Mot de passe oublié</SubTitle>
          </Stack>
        </Stack>
      </Box>

      <Stack>
        <Title sx={{ textAlign: { xs: "center", sm: "right" } }}>
          NOUS SUIVRE
        </Title>
        <Box sx={{ display: "flex", gap: 1, justifyContent: { xs: "center" } }}>
          <SocialBox>
            <SocialImg src={TwitterImg} alt="twitter img" />
          </SocialBox>
          <SocialBox>
            <SocialImg src={InstaImg} alt="insta img" />
          </SocialBox>
          <SocialBox>
            <SocialImg src={LinkedinImg} alt="linkedin img" />
          </SocialBox>
        </Box>
      </Stack>
    </MainContainer>
  );
}

export default Footer;
