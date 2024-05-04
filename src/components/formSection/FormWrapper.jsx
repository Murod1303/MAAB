import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { HiArrowSmRight } from "react-icons/hi";
import styled from "styled-components";
import { ContainerStyled } from "../generalStyle/GeneralStyle";
import { useState } from "react";

const InputWrite = styled.input`
  display: inline-block;
  width: 100%;
  height: 56px;
  padding: 12px 16px;
  border-radius: 16px;
  background-color: #f5f5f7;
`;
const FormSection = styled(Box)`
  @media (max-width: 1096px) {
    & .stackWrapper {
      padding: 30px 30px 30px 42px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & .textWrapper {
        width: 100%;
        margin-bottom: 32px;
        & h4 {
          width: 100%;
          text-align: center;
        }
        & p {
          width: 100%;
          text-align: center;
        }
      }
    }
    & .formWrapperForResposive {
      width: 100%;
    }
  }
  @media (max-width: 721px) {
    & .stackWrapper {
      padding: 24px;
      & h4 {
        font-size: 26px;
      }
    }
    & .formWrapperForResposive {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      & form {
        justify-content: center;
        flex-direction: column;
        & .forFullResponsive {
          width: 100%;
        }
        & .BtnAndCheckBox {
          & button {
            margin: 0 auto;
          }
          & .checkboxComp {
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 442px) {
    & .stackWrapper {
      padding: 24px 16px 16px 16px;
      & h4 {
        font-size: 20px;
      }
    }
    & .formWrapperForResposive {
      padding: 16px;
    }
    & .checkboxComp span {
      font-size: 12px;
    }
  }
  @media (max-width: 1329px) and (min-width: 1096px) {
    & .textWrapper {
      margin-top: 50px;
    }
    & .BtnAndCheckBox {
      & button {
        margin: 0 auto;
      }
      & .checkboxComp {
        width: 100%;
      }
    }
  }
`;
const FormWrapper = () => {
  const [valueLang, setValueLang] = useState("");
  const [valueLogic, setValueLogic] = useState("");
  return (
    <FormSection component={"section"} marginBottom={"80px"}>
      <ContainerStyled>
        <Stack
          className="stackWrapper"
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
          <Box width={"45%"} className="textWrapper">
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
            className="formWrapperForResposive"
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
                className="forFullResponsive"
                width={"45%"}
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
                className="forFullResponsive"
                width={"45%"}
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
                className="forFullResponsive"
                width={"45%"}
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
                  InputProps={{
                    style: {
                      borderRadius: "16px",
                    },
                  }}
                  id="gender-select"
                  select
                  label="Darajangiz"
                  margin="normal"
                  variant="outlined"
                  value={valueLang}
                  onChange={(e) => {
                    setValueLang(e?.target?.value);
                  }}
                  required
                  sx={{
                    width: "100%",
                    margin: "0",
                    backgroundColor: "#f5f5f7",
                  }}
                >
                  <MenuItem value={"ielts"}>IELTS</MenuItem>
                  <MenuItem value={"cefr"}>CEFR</MenuItem>
                </TextField>
              </Box>
              <Box
                className="forFullResponsive"
                width={"45%"}
                display={"flex"}
                alignItems={"flex-start"}
                flexDirection={"column"}
              >
                <Box
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
                  <TextField
                    InputProps={{
                      style: {
                        borderRadius: "16px",
                      },
                    }}
                    id="gender-select"
                    select
                    label="Bilim darajangiz"
                    margin="normal"
                    variant="outlined"
                    required
                    value={valueLogic}
                    onChange={(e) => {
                      setValueLogic(e?.target?.value);
                    }}
                    sx={{
                      width: "100%",
                      margin: "0",
                      backgroundColor: "#f5f5f7",
                    }}
                  >
                    <MenuItem value={"1"}>Junior</MenuItem>
                    <MenuItem value={"2"}>Middle</MenuItem>
                    <MenuItem value={"3"}>Senior</MenuItem>
                  </TextField>
                </Box>
              </Box>
              <Box
                className="BtnAndCheckBox"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                gap={"24px"}
              >
                <FormControlLabel
                  className="checkboxComp"
                  sx={{
                    width: "60%",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                  required
                  control={<Checkbox />}
                  label={`Arizani topshirish orqali siz shaxsiy ma'lumotlaringizni “Maxfiylik siyosati”ga muvofiq qayta ishlashga rozilik bildirasiz`}
                />
                <Button
                  type="submit"
                  sx={{ width: "200px", padding: "12px", borderRadius: "30px" }}
                  variant="contained"
                  endIcon={<HiArrowSmRight />}
                >
                  Arizani jo’natish
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </ContainerStyled>
    </FormSection>
  );
};

export default FormWrapper;
