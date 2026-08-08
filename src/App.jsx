import { Box } from "@chakra-ui/react";
import Header from "./layouts/Header";
import Banner from "./layouts/Banner";
import Experience from "./layouts/Experience";
import Skills from "./layouts/Skills";
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Box minH="100vh" position="relative" overflow="hidden" bg="#050816">
      <div className="ambient-orb ambient-orb--cyan" aria-hidden="true" />
      <div className="ambient-orb ambient-orb--violet" aria-hidden="true" />
      <Header />
      <Box as="main" position="relative" zIndex={1}>
        <Banner />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
