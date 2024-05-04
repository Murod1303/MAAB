// import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import { motion, useScroll } from "framer-motion";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <Home />
      {/* <Footer /> */}
    </>
  );
}

export default App;
/* created by Murod Shernazaroff */
