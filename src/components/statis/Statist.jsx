import { Box, Container, Stack, Typography } from "@mui/material";

const Statist = () => {
  return (
    <Box component={"section"} marginBottom={"50px"}>
      <Container
        maxWidth="1680px"
        sx={{ width: "100%", marginX: "auto", padding: "0 16px" }}
      >
        <Stack
          padding={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ backgroundColor: "#F5F5F7", borderRadius: "40px" }}
        >
          <Typography
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
      </Container>
    </Box>
  );
};

export default Statist;
