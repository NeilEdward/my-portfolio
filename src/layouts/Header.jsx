import { Box, Flex, Image, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { motion, useScroll } from 'framer-motion';

import logo from '../assets/brand/neil-mark.png';
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
    const [isDesktop] = useMediaQuery('(min-width: 48rem)');
    const { scrollYProgress } = useScroll();

    return (
        <Box
            as="header"
            position="sticky"
            top={0}
            zIndex={20}
            borderBottom="1px solid"
            borderColor="var(--portfolio-border-soft)"
            bg="var(--portfolio-header)"
            backdropFilter="blur(20px)"
        >
            <Flex maxW="6xl" h="72px" mx="auto" px={{ base: 5, md: 8 }} align="center" justify="space-between">
                <Link
                    href="#profile"
                    display="flex"
                    alignItems="center"
                    gap={3}
                    _hover={{ textDecoration: 'none' }}
                    _focusVisible={{ boxShadow: '0 0 0 3px rgba(103, 232, 249, 0.45)' }}
                >
                    <Image src={logo} alt="" boxSize="40px" />
                    <Text color="var(--portfolio-heading)" fontFamily="heading" fontWeight="semibold">
                        neil.dela.cruz
                    </Text>
                </Link>
                <Flex align="center" gap={2}>
                    {isDesktop ? <DesktopNav /> : <MobileNav />}
                    <ThemeToggle />
                </Flex>
            </Flex>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
        </Box>
    );
};

export default Header;
