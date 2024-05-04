import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import { CiMenuBurger } from "react-icons/ci";
import {
  Box,
  FormControl,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { ContainerStyled } from "../generalStyle/GeneralStyle";
import Menu from "../menu/Menu";

export const SocialsLi = styled.li`
  & a svg {
    width: 24px;
    height: 24px;
    fill: #9a999b;
    transform: scale(1);
    transition: transform 0.3s linear, fill 0.3s linear;
  }
  & a {
    display: inline-block;
    width: 100%;
    height: 100%;
    &:hover svg {
      fill: #285fe9;
      transform: scale(1.1);
    }
  }
`;
export const DividerSpan = styled.span`
  display: inline-block;
  width: 2px;
  height: 30px;
  background-color: #ebebeb;
  border-radius: 20px;
`;

const HeaderStyled = styled(Box)`
  margin-bottom: 40px;
  & .hamburgerMune {
    display: none;
    & svg {
      width: 24px;
      height: 24px;
      fill: #000;
    }
  }
  & .contactBTN {
    box-shadow: inset 0 0 0 0 #54b3d6;
    color: #54b3d6;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    &:hover {
      box-shadow: inset 300px 50px 10px 10px #54b3d6;
      color: white;
    }
  }
  @media (max-width: 724px) {
    margin-bottom: 30px;
    ${SocialsLi} {
      & a svg {
        width: 20px;
        height: 20px;
        fill: #9a999b;
      }
    }
    & .logoMaab {
      width: 130px;
    }
    & .telMaab {
      font-size: 16px;
    }
    & .contactBTN {
      & span {
        font-size: 14px;
      }
      & svg {
        width: 16px;
        height: 16px;
      }
    }
    @media (max-width: 532px) {
      margin-bottom: 20px;
      & .topHeader {
        display: none;
      }
      & .contactWrapperTel {
        display: none;
      }
      & .hamburgerMune {
        display: inline-block;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [lang, setLang] = useState("uz");
  const handleChange = (event) => {
    setLang(event.target.value);
  };
  return (
    <HeaderStyled
      position={"relative"}
      component={"header"}
      paddingY={"16px"}
      sx={{
        boxShadow: " 0px 0px 171px -44px rgba(0,0,0,0.62)",
        border: "none",
      }}
    >
      <ContainerStyled>
        <Stack
          className="topHeader"
          direction={"row"}
          alignItems={"center"}
          spacing={"40px"}
          justifyContent={"space-between"}
          marginBottom={"16px"}
        >
          <Link
            href="#"
            color={"#5D5D5F"}
            sx={{ textDecoration: "none" }}
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
          >
            <TiLocationOutline />
            <Typography
              sx={{
                scale: "1",
                transition: "color 0.2s, borderBottom 0.2s, scale 0.5s",
                "&:hover": {
                  borderBottom: "1px solid #285fe9",
                  color: "#285fe9",
                  scale: "1.1",
                },
              }}
            >
              Manzilimiz
            </Typography>
          </Link>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"40px"}
            justifyContent={"flex-end"}
          >
            <Stack component={"ul"} direction={"row"} spacing={"23px"}>
              <SocialsLi>
                <a href="#">
                  <FaTelegram />
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
            </Stack>
            <DividerSpan></DividerSpan>
            <FormControl
              size="100px"
              sx={{ border: "none", backgroundColor: "transparent" }}
              variant="standard"
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={"uz"}>Uzbek</MenuItem>
                <MenuItem value={"ru"}>Russian</MenuItem>
                <MenuItem value={"en"}>English</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <img
            className="logoMaab"
            src="./MAAB.png"
            alt="MAAB's logo"
            height={40}
            width={150}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"24px"}
            className="contactWrapperTel"
          >
            <Link
              color={"#FB5F12"}
              sx={{
                textDecoration: "none",
                lineHeight: "30px",
                fontWeight: "500",
                fontSize: "20px",
                transition: "color 0.3s, scale 0.3s",
                "&:hover": {
                  color: "#ea1538",
                  scale: "1.03",
                },
              }}
              href="tel:+998991112233"
              className="telMaab"
            >
              +998 (99) 111-22-33
            </Link>
            <Link
              color={"#fff"}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#353437",
                padding: "12px 24px",
                borderRadius: "24px",
                textDecoration: "none",
              }}
              className="contactBTN"
              href="#"
            >
              <Typography className="contactBTNText" component={"span"}>
                Aloqada bo’ling
              </Typography>
              <BsTelephoneFill />
            </Link>
          </Stack>
          <div className="hamburgerMune">
            <CiMenuBurger onClick={toggleDrawer(true)} />
            <Menu open={open} toggleDrawer={toggleDrawer} />
          </div>
        </Stack>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
