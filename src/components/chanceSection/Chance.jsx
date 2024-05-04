import { Box, Link, Stack, Typography } from "@mui/material";
import { ContainerStyled } from "../generalStyle/GeneralStyle";
import styled from "styled-components";
const ChanceSection = styled(Box)`
  & .btnRegister {
    appearance: none;
    background: transparent;
    border: 0;
    color: #fff;
    cursor: pointer;
    font: inherit;
    font-weight: 500;
    line-height: 1;
    padding: 1em 1.5em;
    position: relative;
    transition: filter cubic-bezier(0.68, -0.6, 0.32, 1.6);
    &:hover {
      filter: brightness(1.1);
    }
    &:active {
      filter: brightness(0.9);
    }
    & > span {
      display: block;
      position: relative;
      transition: transform var(--motion-duration) var(--motion-ease);
      z-index: 1;
    }

    &:hover > span {
      transform: scale(1.05);
    }

    &:active > span {
      transform: scale(0.95);
    }

    & > svg {
      fill: #950cde;
      position: absolute;
      top: -5%;
      left: -5%;
      width: 110%;
      height: 110%;
    }

    & > svg > path {
      transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    &:hover > svg > path {
      d: path(
        "M0,0 C0,-5 100,-5 100,0 C105,0 105,100 100,100 C100,105 0,105 0,100 C-5,100 -5,0 0,0"
      );
    }

    &:active > svg > path {
      d: path(
        "M0,0 C30,10 70,10 100,0 C95,30 95,70 100,100 C70,90 30,90 0,100 C5,70 5,30 0,0"
      );
    }
  }
  margin-bottom: 90px;
  @media (max-width: 764px) {
    margin-bottom: 75px;
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
    margin-bottom: 75px;
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
    margin-bottom: 70px;
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
    margin-bottom: 60px;
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
    margin-bottom: 50px;
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
    <ChanceSection component={"section"}>
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
              className="btnRegister"
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
              <span>{"Ro'yhatdan o'tish"}</span>
              <svg
                viewBox="-5 -5 110 110"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
              </svg>
            </Link>
          </Box>
        </Stack>
      </ContainerStyled>
    </ChanceSection>
  );
};

export default Chance;
