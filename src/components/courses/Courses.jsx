import { Box, Stack, Typography } from "@mui/material";
import { ContainerStyled } from "../generalStyle/GeneralStyle";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const CoursesSection = styled(Box)`
  @media (max-width: 1030px) {
    & h3 {
      font-size: 30px;
    }
    & ul {
      gap: 30px;
    }
  }
  @media (max-width: 860px) {
    & h3 {
      font-size: 26px;
    }
    & p {
      font-size: 14px;
    }
    & ul {
      flex-wrap: wrap;
      gap: 20px;
    }

    & .typographyBox {
      & strong {
        font-size: 16px;
      }
      & p {
        font-size: 13px;
      }
    }
    & .bgCardTypog {
      padding: 16px;
      & span {
        font-size: 13px;
      }
      & strong {
        font-size: 15px;
      }
    }
  }
`;
const Courses = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <CoursesSection component={"section"} marginBottom={"50px"}>
      <ContainerStyled>
        <Stack>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            marginBottom={"20px"}
          >
            <Typography
              marginBottom={"5px"}
              component={"h3"}
              fontSize={"32px"}
              color={"#1460F2"}
              fontWeight={700}
              textAlign={"center"}
              data-aos="fade-down"
            >
              MAAB Akademiyasida BI imkoniyatlarini oching!
            </Typography>
            <Typography
              data-aos="fade-up"
              component={"p"}
              fontSize={"16px"}
              color={"#000000c4"}
              textAlign={"center"}
              width={"75%"}
            >
              {
                "Biz nafaqat nazariyani o'rgatamiz, balki o'quvchilarimizga qisqa vaqt ichida global miqyosda raqobatbardosh dasturchilar bo'lish imkoniyatini beradigan haqiqiy bilimlarni taqdim etamiz. Sizning kar’erangiz butkul o'zgarishi shu erdan boshlanadi"
              }
            </Typography>
          </Box>
          <Box>
            <Box
              component={"ul"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"50px"}
            >
              <Box
                maxWidth={"600px"}
                width={"100%"}
                component={"li"}
                sx={{
                  backgroundColor: "#F5F5F7",
                  transition: "all 0.5s",
                  "&:hover": {
                    boxShadow:
                      " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    backgroundColor: "#fff",
                  },
                }}
                borderRadius={"30px"}
                padding={"30px 0"}
              >
                <Box
                  className="typographyBox"
                  padding={"0 20px"}
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Typography
                    component={"strong"}
                    marginBottom={"18px"}
                    fontSize={"22px"}
                    fontWeight={600}
                    color={"#1460F2"}
                  >
                    DATA ENGINEERING
                  </Typography>
                  <Typography
                    component={"p"}
                    fontSize={"14px"}
                    color={"#000000bd"}
                    marginBottom={"34px"}
                  >
                    {
                      "Ishonchli ma'lumotlar infratuzilmasini qurishni o'rganing. Data Engineering sohasida muvaffaqiyatli kar’yera qurish uchun ma'lumotlar tizimlarini loyihalash va joriy etish ko'nikmalariga ega bo'ling. Haqiqiy loyihalar sizning amaliy tajribangizni oshiradi."
                    }
                  </Typography>
                </Box>
                <Box
                  className="bgCardTypog"
                  padding={"20px"}
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{
                    backgroundImage: "url(./bgCard.jpg)",
                    backgroundAttachment: "fixed",
                    backgroundSize: "100%",
                  }}
                >
                  <Typography component={"span"} fontSize={"14px"}>
                    Kurs narxi:
                  </Typography>
                  <Typography component={"strong"} fontWeight={600}>
                    {"23,975,000 so'm"}
                  </Typography>
                </Box>
              </Box>
              <Box
                maxWidth={"600px"}
                width={"100%"}
                component={"li"}
                sx={{
                  backgroundColor: "#F5F5F7",
                  transition: "all 0.5s",
                  "&:hover": {
                    boxShadow:
                      " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    backgroundColor: "#fff",
                  },
                }}
                borderRadius={"30px"}
                padding={"30px 0"}
              >
                <Box
                  className="typographyBox"
                  padding={"0 20px"}
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Typography
                    component={"strong"}
                    marginBottom={"18px"}
                    fontSize={"22px"}
                    fontWeight={600}
                    color={"#1460F2"}
                  >
                    DATA ANALYTICS
                  </Typography>
                  <Typography
                    component={"p"}
                    fontSize={"14px"}
                    color={"#000000bd"}
                    marginBottom={"34px"}
                  >
                    {
                      "Aniq tushunchalar va tahlillarga sho'ng'ing. Ma'lumotlardan mazmunli namunalarni olish, biznes qarorlarini qabul qilish imkoniyatlarini kengaytirish uchun ilg'or usullarni o'rganing. Bizning amaliy yondashuvimiz sizning ishga tayyor bo’lishingizni ta'minlaydi."
                    }
                  </Typography>
                </Box>
                <Box
                  className="bgCardTypog"
                  padding={"20px"}
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{
                    backgroundImage: "url(./bgCard.jpg)",
                    backgroundAttachment: "fixed",
                    backgroundSize: "100%",
                  }}
                >
                  <Typography component={"span"} fontSize={"14px"}>
                    Kurs narxi:
                  </Typography>
                  <Typography component={"strong"} fontWeight={600}>
                    {"23,975,000 so'm"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </ContainerStyled>
    </CoursesSection>
  );
};

export default Courses;
