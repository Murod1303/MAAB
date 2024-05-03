import { Box, Container, Typography } from "@mui/material";

const Grands = () => {
  return (
    <Box component={"section"} marginBottom={"100px"}>
      <Container maxWidth="1680px" sx={{ margin: "0 auto", paddingX: "16px" }}>
        <Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"34px"}
            component={"ul"}
          >
            <Box
              component={"li"}
              width={"33%"}
              sx={{
                backgroundColor: "#F5F5F7",
                borderRadius: "40px",
                padding: "24px",
              }}
            >
              <Box
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
                  Shartnoma asosida
                </Typography>
              </Box>
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
              width={"33%"}
              sx={{
                backgroundColor: "#F5F5F7",
                borderRadius: "40px",
                padding: "24px",
              }}
            >
              <Box
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
              </Box>
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
              width={"33%"}
              sx={{
                backgroundColor: "#F5F5F7",
                borderRadius: "40px",
                padding: "24px",
              }}
            >
              <Box
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
              </Box>
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
      </Container>
    </Box>
  );
};

export default Grands;
