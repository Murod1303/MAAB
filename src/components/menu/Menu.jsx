/* eslint-disable react/prop-types */
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { SocialsLi } from "../header/Header";
import { useState } from "react";
const ButtonBtn = styled(Button)`
  & svg {
    width: 32px;
    height: 32px;
    fill: #000;
  }
`;

const Menu = ({ open, toggleDrawer }) => {
  const [lang, setLang] = useState("uz");
  const handleChange = (event) => {
    setLang(event.target.value);
  };
  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      anchor="right"
      role="presentation"
    >
      <Box
        width={"100vw"}
        height={"100%"}
        zIndex={10}
        padding={"24px 16px"}
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
        gap={"24px"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <img src="./MAAB.png" alt="" width={133} height={40} />
          <ButtonBtn
            // sx={{ borderRadius: "100%" }}
            // variant="outlined"
            onClick={toggleDrawer(false)}
          >
            <IoMdClose />
          </ButtonBtn>
        </Box>
        <Stack
          width={"100%"}
          direction={"row"}
          alignItems={"center"}
          spacing={"40px"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={"10px"}
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
        <Stack
          width={"100%"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          spacing={"24px"}
          className="contactWrapperTel"
          gap={"10px"}
        >
          <Link
            color={"#FB5F12"}
            sx={{
              textDecoration: "none",
              lineHeight: "30px",
              fontWeight: "500",
              fontSize: "16px",
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
              padding: "12px 12px",
              borderRadius: "24px",
              textDecoration: "none",
            }}
            className="contactBTN"
            href="#"
          >
            <Typography
              className="contactBTNText"
              component={"span"}
              fontSize={"14px"}
            >
              Aloqada bo’ling
            </Typography>
            <BsTelephoneFill />
          </Link>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default Menu;
