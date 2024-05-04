import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import styled from "styled-components";

const SocialsLi = styled.li`
  & a svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;
const Footer = () => {
  return (
    <Box
      component={"footer"}
      padding={"80px"}
      sx={{ backgroundColor: "#0C081A" }}
    >
      <Container
        maxWidth={"1680px"}
        sx={{ margin: "0 auto", padding: "0 16px", width: "100%" }}
      >
        <Box sx={{ backgroundColor: "#ffffff19" }} borderRadius={"40px"}>
          <Box
            component={"ul"}
            padding={"64px 72px 34px 72px"}
            display={"flex"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <Box
              component={"li"}
              display={"flex"}
              alignItems={"flex-start"}
              flexDirection={"column"}
            >
              <Link href={"#"} marginBottom={"40px"}>
                <img
                  src="./MAAB.png"
                  alt="MAAB's logo"
                  width={328}
                  height={82}
                />
              </Link>
              <Link
                href="tel:+998991112233"
                display={"inline-block"}
                fontSize={"28px"}
                fontWeight={500}
                color={"#fff"}
                marginBottom={"20px"}
                sx={{ textDecoration: "none" }}
              >
                +998 97 783 90 45
              </Link>
              <Stack component={"ul"} direction={"row"} spacing={"23px"}>
                <SocialsLi>
                  <a href="#">
                    <FaTelegram className="socials" />
                  </a>
                </SocialsLi>
                <SocialsLi>
                  <a href="#">
                    <AiFillInstagram />
                  </a>
                </SocialsLi>
                <SocialsLi>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </SocialsLi>
                <SocialsLi>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </SocialsLi>
                <SocialsLi>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </SocialsLi>
              </Stack>
            </Box>
            <Box component={"li"}>
              <Typography
                display={"inline-block"}
                component={"strong"}
                fontSize={"24px"}
                fontWeight={600}
                marginBottom={"24px"}
                color={"#fff"}
              >
                Kurslarimiz
              </Typography>
              <Stack
                component={"ul"}
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                gap={"24px"}
              >
                <Box component={"li"}>
                  <Link
                    href="#"
                    fontSize={"18px"}
                    sx={{ textDecoration: "none" }}
                    color={"#fff"}
                  >
                    Data analytics
                  </Link>
                </Box>
                <Box component={"li"}>
                  <Link
                    href="#"
                    fontSize={"18px"}
                    sx={{ textDecoration: "none" }}
                    color={"#fff"}
                  >
                    Data engineer
                  </Link>
                </Box>
                <Box component={"li"}>
                  <Link
                    href="#"
                    fontSize={"18px"}
                    sx={{ textDecoration: "none" }}
                    color={"#fff"}
                  >
                    Cloud data engineering
                  </Link>
                </Box>
              </Stack>
            </Box>
            <Box component={"li"}>
              <Typography
                display={"inline-block"}
                component={"strong"}
                fontSize={"24px"}
                fontWeight={600}
                marginBottom={"24px"}
                color={"#fff"}
              >
                Manyular
              </Typography>
              <Stack
                component={"ul"}
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                gap={"24px"}
              >
                <Box component={"li"}>
                  <Link
                    href="#"
                    fontSize={"18px"}
                    sx={{ textDecoration: "none" }}
                    color={"#fff"}
                  >
                    Grantlar
                  </Link>
                </Box>
                <Box component={"li"}>
                  <Link
                    href="#"
                    fontSize={"18px"}
                    sx={{ textDecoration: "none" }}
                    color={"#fff"}
                  >
                    Sertifikatlarimiz
                  </Link>
                </Box>
                <Box component={"li"}>
                  <Link
                    href="#"
                    fontSize={"18px"}
                    sx={{ textDecoration: "none" }}
                    color={"#fff"}
                  >
                    Ustozlar
                  </Link>
                </Box>
              </Stack>
            </Box>
            <Box component={"li"} maxWidth={"470px"} width={"100%"}>
              <Typography
                display={"inline-block"}
                component={"strong"}
                fontSize={"24px"}
                fontWeight={600}
                marginBottom={"24px"}
                color={"#fff"}
              >
                Biz bilan bog’laning
              </Typography>
              <Stack
                component={"ul"}
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                gap={"24px"}
              >
                <Box component={"li"}>
                  <Link
                    href="#"
                    fontSize={"16px"}
                    sx={{ textDecoration: "none" }}
                    color={"#fff"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    <TiLocationOutline
                      style={{
                        width: "48px",
                        height: "48px",
                        marginLeft: "-7px",
                      }}
                    />
                    <span>
                      Tashkent, Mirabad district, Oybeka, 18/1 ATRIUM Business
                      Center on the 5th floor-1.
                    </span>
                  </Link>
                </Box>
                <Box component={"li"}>
                  <Link
                    href="#"
                    fontSize={"16px"}
                    sx={{ textDecoration: "none" }}
                    color={"#fff"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    <MdOutlineMail style={{ width: "24px", height: "24px" }} />
                    <span>info@maab.uz</span>
                  </Link>
                </Box>
                <Box component={"li"}>
                  <Link
                    href="#"
                    fontSize={"16px"}
                    sx={{ textDecoration: "none" }}
                    color={"#fff"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    <BsTelephoneFill
                      style={{ width: "20px", height: "20px" }}
                    />
                    <span>+998 97 783 90 45</span>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
