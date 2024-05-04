import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
const AccordionWrapper = styled(Box)`
  @media (max-width: 940px) {
    align-items: center;
    flex-direction: column;
    & .title {
      font-size: 14px;
    }
  }
  @media (max-width: 450px) {
    & .title {
      font-weight: 500;
    }
    & .detail {
      font-size: 12px;
    }
  }
`;
const AccordionComp = () => {
  return (
    <AccordionWrapper
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      gap={"16px"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"16px"}
      >
        <Accordion sx={{ width: "100%" }} disableGutters>
          <AccordionSummary
            className="title"
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: 600 }}
          >
            {
              "  Bu sohada mening bilimim va tajriba yo’q. Darslarni o’zlashtirishda menda qiyinchiliklar bo’lmaydimi?"
            }
          </AccordionSummary>
          <AccordionDetails className="detail">
            {
              " Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin."
            }
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: "100%" }}>
          <AccordionSummary
            className="title"
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: 600 }}
          >
            Dasturlash foundation kursini boshlashdan oldin nimalarni bilish
            kerak?
          </AccordionSummary>
          <AccordionDetails className="detail">
            {
              " Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin."
            }
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"16px"}
      >
        <Accordion sx={{ width: "100%" }} disableGutters>
          <AccordionSummary
            className="title"
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: 600 }}
          >
            {
              "  Bu sohada mening bilimim va tajriba yo’q. Darslarni o’zlashtirishda menda qiyinchiliklar bo’lmaydimi?"
            }
          </AccordionSummary>
          <AccordionDetails className="detail">
            {
              " Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin."
            }
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: "100%" }}>
          <AccordionSummary
            className="title"
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: 600 }}
          >
            Dasturlash foundation kursini boshlashdan oldin nimalarni bilish
            kerak?
          </AccordionSummary>
          <AccordionDetails className="detail">
            {
              " Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin."
            }
          </AccordionDetails>
        </Accordion>
      </Box>
    </AccordionWrapper>
  );
};

export default AccordionComp;
