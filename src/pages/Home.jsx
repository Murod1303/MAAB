import { Box } from "@mui/material";
import Hero from "../components/heroSection/Hero";
import Grands from "../components/grandSection/Grands";
import Referens from "../components/referesesSection/Referens";
import Statist from "../components/statis/Statist";
import Chance from "../components/chanceSection/Chance";
import Courses from "../components/courses/Courses";
import Response from "../components/response/Response";
import FormWrapper from "../components/formSection/FormWrapper";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Grands />
      <Referens />
      <Statist />
      <Chance />
      <Courses />
      <Response />
      <FormWrapper />
    </Box>
  );
};

export default Home;
/* created by Murod Shernazaroff */
