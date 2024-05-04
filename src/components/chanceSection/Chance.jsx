import { Box, Link, Stack, Typography } from "@mui/material";
import { ContainerStyled } from "../generalStyle/GeneralStyle";
import styled from "styled-components";
const ChanceSection = styled(Box)`
  @media (max-width: 764px) {
    & h4 {
      font-size: 42px;
      margin-bottom: 20px;
    }
    & p {
      font-size: 14px;
      margin-bottom: 28px;
    }
    & a {
      padding: 12px;
    }
  }
  @media (max-width: 764px) {
    & h4 {
      width: 80%;
      font-size: 36px;
      margin-bottom: 18px;
    }
    & p {
      width: 80%;
      margin-bottom: 24px;
    }
    & .wrapper {
      padding: 55px;
    }
  }
  @media (max-width: 564px) {
    & h4 {
      width: 80%;
      font-size: 28px;
      margin-bottom: 16px;
    }
    & p {
      width: 90%;
      margin-bottom: 20px;
    }
    & a {
      width: 200px;
      font-size: 15px;
    }
    & .wrapper {
      padding: 45px;
    }
  }
  @media (max-width: 472px) {
    & h4 {
      width: 90%;
      font-size: 24px;
      margin-bottom: 16px;
    }
    & p {
      width: 100%;
      margin-bottom: 16px;
    }
    & .wrapper {
      padding: 35px;
    }
  }
  @media (max-width: 382px) {
    & h4 {
      width: 70%;
      font-size: 18px;
      margin-bottom: 16px;
    }
    & p {
      width: 100%;
      margin-bottom: 14px;
    }
    & .wrapper {
      padding: 25px;
    }
  }
`;
const Chance = () => {
  return (
    <ChanceSection component={"section"} marginBottom={"125px"}>
      <ContainerStyled>
        <Stack
          className="wrapper"
          padding={"70px"}
          borderRadius={"40px"}
          overflow={"hidden"}
          sx={{
            backgroundImage: "url(./regars.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            backgroundAttachment: "fixed",
          }}
        >
          <Box
            position={"absolute"}
            top={0}
            left={0}
            width={"100%"}
            height={"100%"}
            sx={{ filter: "blur(10px)", backgroundColor: "#0000008d" }}
          ></Box>
          <Box position={"relative"} zIndex={5}>
            <Typography
              component={"h4"}
              fontSize={"48px"}
              color={"#fff"}
              fontWeight={600}
              marginBottom={"28px"}
            >
              Grantni qo‘lga kiriting!
            </Typography>
            <Typography
              component={"p"}
              fontSize={"16px"}
              color={"#ffffffbf"}
              width={"500px"}
              marginBottom={"35px"}
            >
              {
                "MAAB Academyda biz eng yaxshi iqtidor egalariga oyiga 3+3 gacha grantlar taqdim etamiz. Agar siz o'zingizni iqtidorli deb hisoblasangiz va ingliz tilini mukammal bilsangiz, kirish imtihonida qatnashing! BI sayohatingizni biz bilan boshlash imkoniyatidan foydalaning!"
              }
            </Typography>
            <Link
              border={"2px solid #fff"}
              borderRadius={"80px"}
              width={"275px"}
              display={"inline-block"}
              textAlign={"center"}
              color={"#fff"}
              padding={"12px 24px"}
              sx={{ textDecoration: "none" }}
              href="#"
            >
              Ro’yhatdan o’ting
            </Link>
          </Box>
        </Stack>
      </ContainerStyled>
    </ChanceSection>
  );
};

export default Chance;
