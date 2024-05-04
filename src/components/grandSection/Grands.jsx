import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { ContainerStyled } from "../generalStyle/GeneralStyle";

const BoxCardBG = styled(Box)`
  background-image: url(./bgCard.jpg);
  background-attachment: fixed;
  background-size: cover;
`;
const GrandsWrapper = styled(Box)`
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
  return (
    <GrandsWrapper component={"section"} marginBottom={"100px"}>
      <ContainerStyled>
        <Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={"34px"}
            component={"ul"}
          >
            <Box
              component={"li"}
              maxWidth={"450px"}
              width={"100%"}
              sx={{
                backgroundColor: "#F5F5F7",
                borderRadius: "40px",
                padding: "24px",
              }}
            >
              <BoxCardBG
                marginBottom={"40px"}
                padding={"25px"}
                width={"100%"}
                sx={{
                  backgroundColor: "url(./bgCard.jpg)",
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
                backgroundColor: "#F5F5F7",
                borderRadius: "40px",
                padding: "24px",
              }}
            >
              <BoxCardBG
                marginBottom={"40px"}
                padding={"25px"}
                width={"100%"}
                sx={{ backgroundColor: "#fff", borderRadius: "24px" }}
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
                backgroundColor: "#F5F5F7",
                borderRadius: "40px",
                padding: "24px",
              }}
            >
              <BoxCardBG
                marginBottom={"40px"}
                padding={"25px"}
                width={"100%"}
                sx={{ backgroundColor: "#fff", borderRadius: "24px" }}
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
