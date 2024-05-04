import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { ContainerStyled } from "../generalStyle/GeneralStyle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BoxCardBG = styled(Box)`
  background-image: url(./bgCard.jpg);
  background-attachment: fixed;
  background-size: cover;
`;
const GrandsWrapper = styled(Box)`
  margin-bottom: 100px;
  @media (max-width: 1072px) {
    & li {
      padding: 20px;
    }
    ${BoxCardBG} {
      padding: 20px;
      margin-bottom: 32px;
      & strong {
        font-size: 26px;
      }
      & li p {
        font-size: 13px;
      }
    }
  }
  @media (max-width: 672px) {
    margin-bottom: 60px;
    & li {
      padding: 16px;
    }
    ${BoxCardBG} {
      padding: 16px;
      margin-bottom: 24px;
      & strong {
        font-size: 20px;
      }
      & li p {
        font-size: 12px;
      }
    }
  }
`;
const Grands = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <GrandsWrapper component={"section"} data-aos="zoom-out-up">
      <ContainerStyled>
        <Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={"34px"}
            component={"ul"}
            data-aos="fade-up"
          >
            <Box
              component={"li"}
              maxWidth={"450px"}
              width={"100%"}
              sx={{
                backgroundColor: "#F5F5F7",
                borderRadius: "40px",
                padding: "24px",
                transition: "all 0.5s",
                scale: "1",
                "&:hover": {
                  boxShadow:
                    " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  scale: "1.05",
                  backgroundColor: "#fff",
                },
              }}
            >
              <BoxCardBG
                marginBottom={"40px"}
                padding={"25px"}
                width={"100%"}
                sx={{
                  borderRadius: "24px",
                }}
              >
                <Typography
                  component={"strong"}
                  fontSize={"30px"}
                  textAlign={"center"}
                  sx={{ display: "block" }}
                  color={"#E26020"}
                  fontWeight={700}
                >
                  Shartnoma asosida
                </Typography>
              </BoxCardBG>
              <Typography
                component={"p"}
                fontSize={"14px"}
                textAlign={"center"}
                width={"75%"}
                margin={"0 auto"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam
                possimus, eum libero veniam debitis corrupti odio quae expedita
                molestias optio nesciunt dolor maiores at cum id sequi eligendi
                tenetur.
              </Typography>
            </Box>
            <Box
              component={"li"}
              maxWidth={"450px"}
              width={"100%"}
              sx={{
                transition: "all 0.5s",
                scale: "1",
                "&:hover": {
                  boxShadow:
                    " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  scale: "1.05",
                  backgroundColor: "#fff",
                },
                backgroundColor: "#F5F5F7",
                borderRadius: "40px",
                padding: "24px",
              }}
            >
              <BoxCardBG
                marginBottom={"40px"}
                padding={"25px"}
                width={"100%"}
                sx={{ borderRadius: "24px" }}
              >
                <Typography
                  component={"strong"}
                  fontSize={"30px"}
                  textAlign={"center"}
                  sx={{ display: "block" }}
                  color={"#E26020"}
                  fontWeight={700}
                >
                  Shartli Grant
                </Typography>
              </BoxCardBG>
              <Typography
                component={"p"}
                fontSize={"14px"}
                textAlign={"center"}
                width={"75%"}
                margin={"0 auto"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam
                possimus, eum libero veniam debitis corrupti odio quae expedita
                molestias optio nesciunt dolor maiores at cum id sequi eligendi
                tenetur.
              </Typography>
            </Box>
            <Box
              component={"li"}
              maxWidth={"450px"}
              width={"100%"}
              sx={{
                transition: "all 0.5s",
                scale: "1",
                "&:hover": {
                  boxShadow:
                    " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  scale: "1.05",
                  backgroundColor: "#fff",
                },
                backgroundColor: "#F5F5F7",
                borderRadius: "40px",
                padding: "24px",
              }}
            >
              <BoxCardBG
                marginBottom={"40px"}
                padding={"25px"}
                width={"100%"}
                sx={{ borderRadius: "24px" }}
              >
                <Typography
                  component={"strong"}
                  fontSize={"30px"}
                  textAlign={"center"}
                  sx={{ display: "block" }}
                  color={"#E26020"}
                  fontWeight={700}
                >
                  100% Grant
                </Typography>
              </BoxCardBG>
              <Typography
                component={"p"}
                fontSize={"14px"}
                textAlign={"center"}
                width={"75%"}
                margin={"0 auto"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam
                possimus, eum libero veniam debitis corrupti odio quae expedita
                molestias optio nesciunt dolor maiores at cum id sequi eligendi
                tenetur.
              </Typography>
            </Box>
          </Box>
        </Box>
      </ContainerStyled>
    </GrandsWrapper>
  );
};

export default Grands;
