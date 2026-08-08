import { Box } from '@chakra-ui/react';

import About from './layouts/About';
import Banner from './layouts/Banner';
import Contact from './layouts/Contact';
import Experience from './layouts/Experience';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Skills from './layouts/Skills';

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
