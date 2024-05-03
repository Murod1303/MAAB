import { Box } from "@mui/material";
import Hero from "../components/heroSection/Hero";
import Grands from "../components/grandSection/Grands";
import Referens from "../components/referesesSection/Referens";
import Statist from "../components/statis/Statist";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Grands />
      <Referens />
      <Statist />
    </Box>
  );
};

export default Home;
