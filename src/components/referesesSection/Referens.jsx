import { Box, Container, Stack, Typography } from "@mui/material";
const Referens = () => {
  return (
    <Box
      component={"section"}
      marginBottom={"64px"}
      sx={{ boxShadow: "0px 0px 104px -57px rgba(0,0,0,0.36)" }}
    >
      <Container
        maxWidth={"1680px"}
        sx={{ width: "100%", margin: "0 auto", paddingX: "16px" }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"20px"}
          padding={"75px"}
          borderRadius={"40px"}
          sx={{
            backgroundImage: "linear-gradient(45deg, #0152EE 0%, #5F95FE 100%)",
          }}
        >
          <Typography
            component={"h3"}
            fontSize={"60px"}
            fontWeight={"500"}
            color={"#fff"}
          >
            Kurs kimlar uchun?
          </Typography>
          <Stack maxWidth={"1234px"} width={"100%"}>
            <Box
              component={"ul"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              flexWrap={"wrap"}
              gap={"20px 16px"}
            >
              <Box
                component={"li"}
                maxWidth={"390px"}
                width={"100%"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  left={0}
                  top={0}
                  width={"100%"}
                  height={"100%"}
                  sx={{ filter: "blur(5px)", backgroundColor: "#ffffff52" }}
                  overflow={"hidden"}
                  borderRadius={"20px"}
                ></Box>
                <Box
                  position={"relative"}
                  width={"100%"}
                  padding={"20px"}
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  zIndex={500}
                  border={"1px solid #fff"}
                  borderRadius={"20px"}
                  height={"186px"}
                >
                  <Typography
                    display={"inline-block"}
                    width={"100%"}
                    component={"strong"}
                    fontSize={"20px"}
                    fontWeight={600}
                    color={"#fff"}
                    textAlign={"left"}
                  >
                    IT sohasiga qiziquvchilar uchun
                  </Typography>
                  <Typography
                    component={"p"}
                    textAlign={"left"}
                    fontSize={"14px"}
                    color={"#ffffffbe"}
                  >
                    {
                      "BI (Business Intelligence)ni o'rganmoqchi bo'lganlar uchun"
                    }
                  </Typography>
                </Box>
              </Box>
              <Box
                component={"li"}
                maxWidth={"390px"}
                width={"100%"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  left={0}
                  top={0}
                  width={"100%"}
                  height={"100%"}
                  sx={{ filter: "blur(5px)", backgroundColor: "#ffffff52" }}
                  overflow={"hidden"}
                  borderRadius={"20px"}
                ></Box>
                <Box
                  position={"relative"}
                  width={"100%"}
                  padding={"20px"}
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  zIndex={500}
                  border={"1px solid #fff"}
                  borderRadius={"20px"}
                  height={"186px"}
                >
                  <Typography
                    display={"inline-block"}
                    width={"100%"}
                    component={"strong"}
                    fontSize={"20px"}
                    fontWeight={600}
                    color={"#fff"}
                    textAlign={"left"}
                  >
                    {
                      "Zamonaviy va eng talabgir kasb egasi bo'lishni xohlaganlar uchun."
                    }
                  </Typography>
                  <Typography
                    component={"p"}
                    textAlign={"left"}
                    fontSize={"14px"}
                    color={"#ffffffbe"}
                  >
                    {
                      "Hozirda BI mutaxassislariga bo'lgan talab kundan kunga ortib bormoqda va bu kursni o'rganish orqali yuqori daromadli kasb egasi bo'lishingiz mumkin."
                    }
                  </Typography>
                </Box>
              </Box>
              <Box
                component={"li"}
                maxWidth={"390px"}
                width={"100%"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  left={0}
                  top={0}
                  width={"100%"}
                  height={"100%"}
                  sx={{ filter: "blur(5px)", backgroundColor: "#ffffff52" }}
                  overflow={"hidden"}
                  borderRadius={"20px"}
                ></Box>
                <Box
                  position={"relative"}
                  width={"100%"}
                  padding={"20px"}
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  zIndex={500}
                  border={"1px solid #fff"}
                  borderRadius={"20px"}
                  height={"186px"}
                >
                  <Typography
                    display={"inline-block"}
                    width={"100%"}
                    component={"strong"}
                    fontSize={"20px"}
                    fontWeight={600}
                    color={"#fff"}
                    textAlign={"left"}
                  >
                    Masofadan ishlashni xohlovchilar uchun
                  </Typography>
                  <Typography
                    component={"p"}
                    textAlign={"left"}
                    fontSize={"14px"}
                    color={"#ffffffbe"}
                  >
                    {
                      "BI mutaxassislari istalgan joydan masofaviy ishlash imkoniyatiga ega. O'zbekistonda turgan xolda Yevropa va Amerika loyihalarida ishlashingiz mumkin."
                    }
                  </Typography>
                </Box>
              </Box>
              <Box
                component={"li"}
                maxWidth={"390px"}
                width={"100%"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  left={0}
                  top={0}
                  width={"100%"}
                  height={"100%"}
                  sx={{ filter: "blur(5px)", backgroundColor: "#ffffff52" }}
                  overflow={"hidden"}
                  borderRadius={"20px"}
                ></Box>
                <Box
                  position={"relative"}
                  width={"100%"}
                  padding={"20px"}
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  zIndex={500}
                  border={"1px solid #fff"}
                  borderRadius={"20px"}
                  height={"186px"}
                >
                  <Typography
                    display={"inline-block"}
                    width={"100%"}
                    component={"strong"}
                    fontSize={"20px"}
                    fontWeight={600}
                    color={"#fff"}
                    textAlign={"left"}
                  >
                    Mantiqiy va tanqidiy fikrlovchilar uchun
                  </Typography>
                  <Typography
                    component={"p"}
                    textAlign={"left"}
                    fontSize={"14px"}
                    color={"#ffffffbe"}
                  >
                    {
                      "BI mutaxassislari maʼlumotlar bazasi bilan ishlaganliklari uchun ulardan mantiqiy va tanqidiy fikrlash talab qilinadi."
                    }
                  </Typography>
                </Box>
              </Box>
              <Box
                component={"li"}
                maxWidth={"390px"}
                width={"100%"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  left={0}
                  top={0}
                  width={"100%"}
                  height={"100%"}
                  sx={{ filter: "blur(5px)", backgroundColor: "#ffffff52" }}
                  overflow={"hidden"}
                  borderRadius={"20px"}
                ></Box>
                <Box
                  position={"relative"}
                  width={"100%"}
                  padding={"20px"}
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  zIndex={500}
                  border={"1px solid #fff"}
                  borderRadius={"20px"}
                  height={"186px"}
                >
                  <Typography
                    display={"inline-block"}
                    width={"100%"}
                    component={"strong"}
                    fontSize={"20px"}
                    fontWeight={600}
                    color={"#fff"}
                    textAlign={"left"}
                  >
                    Ingliz tili darajasi B2 dan yuqori boʻlganlar uchun.
                  </Typography>
                  <Typography
                    component={"p"}
                    textAlign={"left"}
                    fontSize={"14px"}
                    color={"#ffffffbe"}
                  >
                    {
                      "Darslar asosan ingliz tilida o'tilganligi uchun o'quvchilardan ingliz tilini bilish talab qilinadi."
                    }
                  </Typography>
                </Box>
              </Box>
              <Box
                component={"li"}
                maxWidth={"390px"}
                width={"100%"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  left={0}
                  top={0}
                  width={"100%"}
                  height={"100%"}
                  sx={{ filter: "blur(5px)", backgroundColor: "#ffffff52" }}
                  overflow={"hidden"}
                  borderRadius={"20px"}
                ></Box>
                <Box
                  position={"relative"}
                  width={"100%"}
                  padding={"20px"}
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  zIndex={500}
                  border={"1px solid #fff"}
                  borderRadius={"20px"}
                  height={"186px"}
                >
                  <Typography
                    display={"inline-block"}
                    width={"100%"}
                    component={"strong"}
                    fontSize={"20px"}
                    fontWeight={600}
                    color={"#fff"}
                    textAlign={"left"}
                  >
                    Tezroq daromadga chiqishni xohlovchilar uchun
                  </Typography>
                  <Typography
                    component={"p"}
                    textAlign={"left"}
                    fontSize={"14px"}
                    color={"#ffffffbe"}
                  >
                    {
                      "10 oyda kursni bitirib, BI mutaxassisiga aylanish orqali tezda daromadli kasb egasina aylanishiningiz mumkin."
                    }
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Referens;
