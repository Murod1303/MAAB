import { Box } from "@mui/material";
import Hero from "../components/heroSection/Hero";
import Grands from "../components/grandSection/Grands";
import Referens from "../components/referesesSection/Referens";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Grands />
      <Referens />
    </Box>
  );
};

export default Home;
