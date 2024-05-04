import { Box, Link, Stack, Typography } from "@mui/material";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import styled from "styled-components";
import { ContainerStyled } from "../generalStyle/GeneralStyle";

const SocialsLi = styled.li`
  & a svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;
const FooterSection = styled(Box)`
  padding: 30px;
  @media (max-width: 720px) {
    padding: 20px;
    & .bgColor .forBgPadding {
      padding: 54px 62px 34px 62px;
    }
    & .logo {
      width: 160px;
      height: 40px;
    }
    & .telFooter {
      font-size: 24px;
    }
    & .nestedLi {
      & strong {
        font-size: 20px;
      }
      & .footerLink a {
        font-size: 14px;
      }
    }
  }
  @media (max-width: 590px) {
    padding: 16px 0;
    & .bgColor .forBgPadding {
      padding: 34px 42px 34px 42px;
    }
    & .logo {
      width: 150px;
      height: 35px;
    }
    & .telFooter {
      font-size: 18px;
    }
    & .nestedLi {
      & strong {
        font-size: 16px;
      }
      & .footerLink a {
        font-size: 14px;
      }
    }
  }
`;
const Footer = () => {
  return (
    <FooterSection component={"footer"} sx={{ backgroundColor: "#0C081A" }}>
      <ContainerStyled>
        <Box
          className="bgColor"
          sx={{ backgroundColor: "#ffffff19" }}
          borderRadius={"40px"}
        >
          <Box
            component={"ul"}
            className="forBgPadding"
            padding={"64px 72px 34px 72px"}
            display={"flex"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            gap={"40px"}
            flexWrap={"wrap"}
          >
            <Box
              component={"li"}
              display={"flex"}
              alignItems={"flex-start"}
              flexDirection={"column"}
            >
              <Link href={"#"} marginBottom={"40px"}>
                <img
                  className="logo"
                  src="./MAAB.png"
                  alt="MAAB's logo"
                  width={328}
                  height={82}
                />
              </Link>
              <Link
                className="telFooter"
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
              <Box component={"ul"} display={"flex"} gap={"60px"}>
                <Box component={"li"} className="nestedLi">
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
                    className="footerLink"
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

                <Box component={"li"} className="nestedLi">
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
                    className="footerLink"
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
              </Box>
            </Box>
            <Box
              component={"li"}
              maxWidth={"470px"}
              width={"100%"}
              className="nestedLi"
            >
              <Typography
                display={"inline-block"}
                component={"strong"}
                fontSize={"24px"}
                fontWeight={600}
                marginBottom={"24px"}
                color={"#fff"}
                className="contactInfo"
              >
                Biz bilan bog’laning
              </Typography>
              <Stack
                className="footerLink"
                component={"ul"}
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                gap={"24px"}
              >
                <Box component={"li"} className="nestedLi">
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
      </ContainerStyled>
    </FooterSection>
  );
};

export default Footer;
