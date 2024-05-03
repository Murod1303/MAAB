import { Box } from "@mui/material";
import Hero from "../components/heroSection/Hero";
import Grands from "../components/grandSection/Grands";
import Referens from "../components/referesesSection/Referens";
import Statist from "../components/statis/Statist";
import Chance from "../components/chanceSection/Chance";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Grands />
      <Referens />
      <Statist />
      <Chance />
    </Box>
  );
};

export default Home;
/* created by Murod Shernazaroff */
