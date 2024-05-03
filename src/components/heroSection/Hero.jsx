import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
const BoxWrapper = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(./maabLg.jpg);
  background-position: center;
  background-size: cover;
  border-radius: 56px;
  box-shadow: 0px 15px 46px 0px rgba(0, 0, 0, 0.56);
`;
const StartButton = styled.button`
  /* background-color: "#ffffff"; */
  border: none;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 55px;
  padding-right: 45px;
  & svg {
    margin-left: 10px;
    width: 76px;
    height: 76px;
    fill: #23bdee;
  }
`;

const Hero = () => {
  return (
    <Box component={"section"} marginBottom={"120px"}>
      <Container
        maxWidth={"1840px"}
        sx={{ margin: "0 auto", paddingX: "16px" }}
      >
        <BoxWrapper>
          <StartButton>
            <FaPlay />
          </StartButton>
          <Typography
            component={"h3"}
            fontSize={"56px"}
            color={"#fff"}
            sx={{
              textAlign: "center",
              width: "80%",
              position: "absolute",
              bottom: "40px",
            }}
          >
            Sizga zarur bo’lgan barcha bilim va ko’nikmalar shu yerda!
          </Typography>
        </BoxWrapper>
      </Container>
    </Box>
  );
};

export default Hero;
