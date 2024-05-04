import { Box, Stack, Typography } from "@mui/material";
import { ContainerStyled } from "../generalStyle/GeneralStyle";
import styled from "styled-components";
const StatistSection = styled(Box)`
  @media (max-width: 1155px) {
    & .wrapper {
      padding: 40px;
    }
    & h4 {
      font-size: 36px;
    }
    & ul {
      flex-wrap: wrap;
    }
    & li {
      width: 45%;
      padding: 26px;
      & strong {
        font-size: 32px;
      }
      & p {
        text-align: center;
      }
    }
  }
  @media (max-width: 840px) {
    & .wrapper {
      padding: 35px;
    }
    & h4 {
      font-size: 32px;
    }
    & ul {
      flex-wrap: wrap;
    }
    & li {
      width: 47%;
      padding: 20px;
      & strong {
        font-size: 32px;
      }
    }
  }
  @media (max-width: 734px) {
    & .wrapper {
      padding: 30px;
    }
    & h4 {
      font-size: 32px;
    }
    & li {
      max-width: 400px;
      width: 100%;
      & strong {
        font-size: 32px;
      }
    }
  }
  @media (max-width: 420px) {
    & .wrapper {
      padding: 30px;
    }
    & h4 {
      font-size: 28px;
    }
    & li {
      max-width: 400px;
      width: 100%;
      & strong {
        font-size: 26px;
      }
    }
  }
  @media (max-width: 420px) {
    & .wrapper {
      padding: 24px;
    }
    & h4 {
      font-size: 22px;
    }
    & li {
      width: 100%;
      & strong {
        font-size: 20px;
      }
      & p {
        font-size: 14px;
      }
    }
  }
`;
const Statist = () => {
  return (
    <StatistSection component={"section"} marginBottom={"50px"}>
      <ContainerStyled>
        <Stack
          className="wrapper"
          padding={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ backgroundColor: "#F5F5F7", borderRadius: "40px" }}
        >
          <Typography
            marginBottom={"20px"}
            textAlign={"center"}
            component={"h4"}
            fontSize={"40px"}
            fontWeight={700}
            color={"#1460F2"}
          >
            BI mutaxassislarining daromadi qancha?
          </Typography>
          <Box
            component={"ul"}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            gap={"36px"}
          >
            <Box
              component={"li"}
              maxWidth={"500px"}
              width={"100%"}
              padding={"32px"}
              sx={{
                backgroundImage: "url(./bgCard.jpg)",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                transition: "all 0.5s",
                "&:hover": {
                  boxShadow:
                    " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                },
              }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              borderRadius={"24px"}
            >
              <Typography
                component={"strong"}
                fontSize={"40px"}
                color={"#E26020"}
                fontWeight={600}
                marginBottom={"2px"}
              >
                2 000 000+
              </Typography>
              <Typography component={"p"} fontSize={"16px"} color={"#000000b7"}>
                Dunyo bo’ylab bo’sh ish o’rinlari
              </Typography>
            </Box>
            <Box
              component={"li"}
              maxWidth={"500px"}
              width={"100%"}
              padding={"32px"}
              sx={{
                backgroundImage: "url(./bgCard.jpg)",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                transition: "all 0.5s",
                "&:hover": {
                  boxShadow:
                    " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                },
              }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              borderRadius={"24px"}
            >
              <Typography
                component={"strong"}
                fontSize={"40px"}
                color={"#E26020"}
                fontWeight={600}
                marginBottom={"2px"}
              >
                400$-2 000$+
              </Typography>
              <Typography component={"p"} fontSize={"16px"} color={"#000000b7"}>
                O’zbekistondagi maoshlar
              </Typography>
            </Box>
            <Box
              component={"li"}
              maxWidth={"500px"}
              width={"100%"}
              padding={"32px"}
              sx={{
                backgroundImage: "url(./bgCard.jpg)",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                transition: "all 0.5s",
                "&:hover": {
                  boxShadow:
                    " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                },
              }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              borderRadius={"24px"}
            >
              <Typography
                component={"strong"}
                fontSize={"40px"}
                color={"#E26020"}
                fontWeight={600}
                marginBottom={"2px"}
              >
                6 000$+
              </Typography>
              <Typography component={"p"} fontSize={"16px"} color={"#000000b7"}>
                AQSHdagi boshlang’ich maoshlar
              </Typography>
            </Box>
          </Box>
        </Stack>
      </ContainerStyled>
    </StatistSection>
  );
};

export default Statist;
