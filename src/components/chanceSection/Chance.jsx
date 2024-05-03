import { Box, Container, Link, Stack, Typography } from "@mui/material";

const Chance = () => {
  return (
    <Box component={"section"} marginBottom={"125px"}>
      <Container
        maxWidth={"1680px"}
        sx={{ margin: "0 auto", padding: "0 16px", width: "100%" }}
      >
        <Stack
          padding={"70px"}
          borderRadius={"40px"}
          overflow={"hidden"}
          sx={{
            backgroundImage: "url(./regars.jpg)",
            backgroundSize: "100% ",
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
      </Container>
    </Box>
  );
};

export default Chance;
