import { Box, Container, Stack, Typography } from "@mui/material";
import AccordionComp from "../accordion/Accordion";

const Response = () => {
  return (
    <Box
      component={"section"}
      marginBottom={"80px"}
      padding={"80px 0 120px 0"}
      sx={{ backgroundColor: "#F5F5F7" }}
    >
      <Container
        maxWidth={"1680px"}
        sx={{ margin: "0 auto", padding: "0 16px", width: "100%" }}
      >
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
      </Container>
    </Box>
  );
};

export default Response;
