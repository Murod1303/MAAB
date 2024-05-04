import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";

const InputWrite = styled.input`
  display: inline-block;
  width: 100%;
  height: 56px;
  padding: 12px 16px;
  border-radius: 16px;
  background-color: #f5f5f7;
`;
const FormWrapper = () => {
  return (
    <Box component={"section"} marginBottom={"80px"}>
      <Container
        maxWidth={"1680px"}
        sx={{ margin: "0 auto", padding: "0 16px", width: "100%" }}
      >
        <Stack
          direction={"row"}
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          padding={"40px 40px 40px 52px"}
          sx={{
            background:
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,113,253,1) 50%, rgba(252,176,69,1) 100%)",
          }}
          borderRadius={"40px"}
        >
          <Box width={"45%"}>
            <Typography
              width={"80%"}
              component={"h4"}
              fontSize={"32px"}
              fontWeight={600}
              marginBottom={"15px"}
              color={"#fff"}
            >
              {
                "MAAB Academy bilan BI kelajagingizni oching! Hozir roʻyxatdan oʻting!"
              }
            </Typography>
            <Typography component={"p"} fontSize={"14px"} color={"#ffffffba"}>
              {
                "Kirish imtihonimizni topshiring va Grant yutib olish imkoniyatiga ega bo'ling"
              }
            </Typography>
          </Box>
          <Box
            padding={"40px"}
            width={"55%"}
            sx={{ backgroundColor: "#fff" }}
            borderRadius={"24px"}
          >
            <Typography
              display={"inline-block"}
              component={"strong"}
              marginBottom={"24px"}
              fontSize={"26px"}
              fontWeight={600}
            >
              Kursga yozilish
            </Typography>
            <Box
              component={"form"}
              marginLeft={"10px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              flexWrap={"wrap"}
              gap={"24px"}
            >
              <Box
                maxWidth={"400px"}
                width={"100%"}
                display={"flex"}
                alignItems={"flex-start"}
                flexDirection={"column"}
              >
                <Box
                  display={"inline-block"}
                  marginBottom={"10px"}
                  component={"label"}
                  htmlFor="name"
                  fontSize={"16px"}
                  fontWeight={500}
                  marginLeft={"5px"}
                >
                  Ismingiz
                </Box>
                <InputWrite type="text" id="name" placeholder="Name" />
              </Box>
              <Box
                maxWidth={"400px"}
                width={"100%"}
                display={"flex"}
                alignItems={"flex-start"}
                flexDirection={"column"}
              >
                <Box
                  display={"inline-block"}
                  marginBottom={"10px"}
                  component={"label"}
                  htmlFor="name"
                  fontSize={"16px"}
                  fontWeight={500}
                  marginLeft={"5px"}
                >
                  Telefon raqamingiz
                </Box>
                <InputWrite type="text" id="name" placeholder="+998" />
              </Box>
              <Box
                maxWidth={"400px"}
                width={"100%"}
                display={"flex"}
                alignItems={"flex-start"}
                flexDirection={"column"}
              >
                <Box
                  display={"inline-block"}
                  marginBottom={"10px"}
                  component={"label"}
                  htmlFor="name"
                  fontSize={"16px"}
                  fontWeight={500}
                  marginLeft={"5px"}
                >
                  Ingliz tili darajangiz
                </Box>
                <TextField
                  id="gender-select"
                  select
                  value={"1"}
                  margin="normal"
                  variant="outlined"
                  sx={{ width: "100%", margin: "0", borderRadius: "16px" }}
                >
                  <MenuItem value={"1"}>IELTS</MenuItem>
                </TextField>
              </Box>
              <Box
                maxWidth={"400px"}
                width={"100%"}
                display={"flex"}
                alignItems={"flex-start"}
                flexDirection={"column"}
              >
                <Box
                  display={"inline-block"}
                  marginBottom={"10px"}
                  component={"label"}
                  htmlFor="name"
                  fontSize={"16px"}
                  fontWeight={500}
                  marginLeft={"5px"}
                >
                  Mantiqiy bilim darajangiz
                </Box>
                <Box sx={{ minWidth: 120, width: "100%" }}>
                  <FormControl fullWidth sx={{ display: "flex" }}>
                    <Select
                      sx={{ borderRadius: "16px" }}
                      autoWidth={false}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Age"
                    >
                      <MenuItem
                        selected
                        // value={"j"}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>Junior</Typography>
                      </MenuItem>
                      <MenuItem
                        // value={"m"}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>Middle</Typography>
                      </MenuItem>
                      <MenuItem
                        // value={"s"}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>Senior</Typography>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FormWrapper;
