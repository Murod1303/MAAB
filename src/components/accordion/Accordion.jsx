import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";

const AccordionComp = () => {
  return (
    <Box
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
        <Accordion sx={{ maxWidth: "600px", width: "100%" }} disableGutters>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: 600 }}
          >
            {
              "  Bu sohada mening bilimim va tajriba yo’q. Darslarni o’zlashtirishda menda qiyinchiliklar bo’lmaydimi?"
            }
          </AccordionSummary>
          <AccordionDetails>
            {
              " Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin."
            }
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ maxWidth: "600px", width: "100%" }}>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: 600 }}
          >
            Dasturlash foundation kursini boshlashdan oldin nimalarni bilish
            kerak?
          </AccordionSummary>
          <AccordionDetails>
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
        <Accordion sx={{ maxWidth: "600px", width: "100%" }} disableGutters>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: 600 }}
          >
            {
              "  Bu sohada mening bilimim va tajriba yo’q. Darslarni o’zlashtirishda menda qiyinchiliklar bo’lmaydimi?"
            }
          </AccordionSummary>
          <AccordionDetails>
            {
              " Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin."
            }
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ maxWidth: "600px", width: "100%" }}>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: 600 }}
          >
            Dasturlash foundation kursini boshlashdan oldin nimalarni bilish
            kerak?
          </AccordionSummary>
          <AccordionDetails>
            {
              " Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin."
            }
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default AccordionComp;
