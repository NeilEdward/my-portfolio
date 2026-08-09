import { Box, Link } from '@chakra-ui/react';

import About from './layouts/About';
import Banner from './layouts/Banner';
import Contact from './layouts/Contact';
import Experience from './layouts/Experience';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Impact from './layouts/Impact';
import Proof from './layouts/Proof';
import Services from './layouts/Services';
import Skills from './layouts/Skills';

function App() {
    return (
        <Box minH="100vh" position="relative" overflowX="clip" bg="var(--portfolio-bg)" transition="background 0.2s ease">
            <Link
                href="#main-content"
                position="fixed"
                top={3}
                left={3}
                zIndex={100}
                px={4}
                py={2.5}
                color="gray.950"
                fontWeight="semibold"
                borderRadius="full"
                bg="cyan.200"
                transform="translateY(-160%)"
                transition="transform 0.2s ease"
                _focus={{ transform: 'translateY(0)', boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.35)' }}
            >
                Skip to content
            </Link>
            <div className="ambient-orb ambient-orb--cyan" aria-hidden="true" />
            <div className="ambient-orb ambient-orb--violet" aria-hidden="true" />
            <Header />
            <Box as="main" id="main-content" position="relative" zIndex={1}>
                <Banner />
                <Proof />
                <Experience />
                <Impact />
                <Skills />
                <Services />
                <About />
                <Contact />
            </Box>
            <Footer />
        </Box>
    );
}

export default App;
