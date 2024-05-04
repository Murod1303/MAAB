import { Box, Stack, Typography } from "@mui/material";
import AccordionComp from "../accordion/Accordion";
import { ContainerStyled } from "../generalStyle/GeneralStyle";
import styled from "styled-components";
const ResponseSection = styled(Box)`
  @media (max-width: 920px) {
    & h4 {
      font-size: 32px;
    }
    & p {
      font-size: 15px;
      width: 80%;
    }
  }
  @media (max-width: 720px) {
    & h4 {
      font-size: 26px;
    }
    & p {
      font-size: 14px;
    }
  }
  @media (max-width: 420px) {
    & h4 {
      font-size: 20px;
    }
    & p {
      font-size: 13px;
    }
  }
`;
const Response = () => {
  return (
    <ResponseSection
      component={"section"}
      marginBottom={"80px"}
      padding={"80px 0 120px 0"}
      sx={{ backgroundColor: "#F5F5F7" }}
    >
      <ContainerStyled>
        <Stack>
          <Box marginBottom={"40px"}>
            <Typography
              component={"h4"}
              fontSize={"36px"}
              fontWeight={700}
              textAlign={"center"}
              marginBottom={"16px"}
            >
              {"Ko‘p so‘ralgan savollar"}
            </Typography>
            <Typography
              component={"p"}
              maxWidth={"800px"}
              width={"100%"}
              margin={"0 auto"}
              textAlign={"center"}
              fontSize={"16px"}
              fontWeight={300}
            >
              {
                "Прежде чем брать студентов на наши курсы для начинающих, мы проверяем их навыки английского языка, математики и решения задач. "
              }
            </Typography>
          </Box>
          <AccordionComp />
        </Stack>
      </ContainerStyled>
    </ResponseSection>
  );
};

export default Response;
