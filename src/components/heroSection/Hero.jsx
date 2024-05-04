import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContainerStyled } from "../generalStyle/GeneralStyle";
const BoxWrapper = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(./maabLg.jpg);
  background-position: center;
  background-size: cover;
  border-radius: 56px;
  box-shadow: 0px 15px 46px 0px rgba(0, 0, 0, 0.56);
`;
const StartButton = styled.button`
  border: none;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 55px;
  padding-right: 45px;
  & svg {
    margin-left: 10px;
    width: 76px;
    height: 76px;
    fill: #23bdee;
  }
`;
const HeroSection = styled(Box)`
  margin-bottom: 120px;
  @media (max-width: 1048px) {
    & h3 {
      font-size: 42px;
    }
    ${StartButton} {
      padding: 40px;
      padding-right: 33px;
      & svg {
        margin-left: 5px;
        width: 50px;
        height: 50px;
      }
    }
    ${BoxWrapper} {
      height: 500px;
    }
  }
  @media (max-width: 872px) {
    margin-bottom: 80px;
    & h3 {
      font-size: 26px;
    }
    ${StartButton} {
      padding: 30px;
      padding-right: 27px;
      & svg {
        margin-left: 5px;
        width: 35px;
        height: 35px;
      }
    }
    ${BoxWrapper} {
      height: 400px;
    }
  }
  @media (max-width: 520px) {
    margin-bottom: 60px;
    & h3 {
      font-size: 20px;
    }
    ${StartButton} {
      padding: 28px;
      padding-right: 25px;
      & svg {
        margin-left: 1px;
        width: 26px;
        height: 36px;
      }
    }
    ${BoxWrapper} {
      height: 350px;
    }
  }
  @media (max-width: 420px) {
    margin-bottom: 40px;
    & h3 {
      font-size: 16px;
    }
    ${StartButton} {
      padding: 25px;
      padding-right: 20px;
      & svg {
        margin-left: 0;
        width: 20px;
        height: 20px;
      }
    }
    ${BoxWrapper} {
      height: 300px;
    }
  }
`;
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <HeroSection component={"section"}>
      <ContainerStyled>
        <BoxWrapper data-aos="fade-up">
          <StartButton>
            <FaPlay />
          </StartButton>
          <Typography
            component={"h3"}
            fontSize={"56px"}
            color={"#fff"}
            sx={{
              textAlign: "center",
              width: "80%",
              position: "absolute",
              bottom: "40px",
            }}
          >
            Sizga zarur bo’lgan barcha bilim va ko’nikmalar shu yerda!
          </Typography>
        </BoxWrapper>
      </ContainerStyled>
    </HeroSection>
  );
};

export default Hero;
