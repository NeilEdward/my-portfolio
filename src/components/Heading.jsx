import { ArrowForwardIcon, DownloadIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading as ChakraHeading, Text } from '@chakra-ui/react';

import resume from '../assets/pdf/Neil-Edward-Dela-Cruz-Resume.pdf';
import { Github, LinkedIn } from '../utils/SVGIcons';

import Account from './Account';

const Heading = () => (
    <Box maxW="3xl">
        <Flex
            display="inline-flex"
            mb={6}
            px={4}
            py={2}
            align="center"
            gap={2}
            border="1px solid"
            borderColor="var(--portfolio-border)"
            borderRadius="full"
            bg="var(--portfolio-surface)"
            backdropFilter="blur(12px)"
        >
            <Box boxSize="8px" borderRadius="full" bg="cyan.300" boxShadow="0 0 18px #67e8f9" />
            <Text color="var(--portfolio-text)" fontSize="sm" fontWeight="medium">
                Junior Software Engineer at Lexagle
            </Text>
        </Flex>

        <ChakraHeading as="h1" color="var(--portfolio-heading)" fontSize={{ base: '4xl', sm: '5xl', md: '7xl' }} lineHeight={{ base: '1.05', md: '0.98' }} letterSpacing="-0.055em">
            I turn complex workflows into
            <Text as="span" display="block" bgGradient="linear(to-r, cyan.200, purple.300)" bgClip="text">
                reliable software.
            </Text>
        </ChakraHeading>

        <Text mt={7} maxW="2xl" color="var(--portfolio-muted)" fontSize={{ base: 'lg', md: 'xl' }} lineHeight="1.8">
            I&apos;m Neil, a software engineer building reliable products across React and TypeScript frontends, Kotlin and Spring Boot backend services, and the integrations that
            connect them. I translate complex business requirements into intuitive, maintainable software solutions.
        </Text>

        <Flex mt={9} direction={{ base: 'column', sm: 'row' }} align={{ sm: 'center' }} gap={4}>
            <Button
                as="a"
                href="#experience"
                size="lg"
                minH="52px"
                px={7}
                color="var(--portfolio-heading)"
                bg="rgba(34, 211, 238, 0.12)"
                border="1px solid"
                borderColor="rgba(103, 232, 249, 0.45)"
                borderRadius="full"
                fontWeight="semibold"
                rightIcon={<ArrowForwardIcon />}
                _hover={{
                    bg: 'rgba(34, 211, 238, 0.2)',
                    borderColor: 'cyan.200',
                    transform: 'translateY(-2px)',
                }}
                _focusVisible={{ boxShadow: '0 0 0 3px rgba(103, 232, 249, 0.3)' }}
            >
                View experience
            </Button>
            <Button
                as="a"
                href={resume}
                download="Neil-Edward-Dela-Cruz-Resume.pdf"
                size="lg"
                minH="52px"
                px={7}
                color="var(--portfolio-heading)"
                bg="var(--portfolio-surface)"
                border="1px solid"
                borderColor="var(--portfolio-border)"
                borderRadius="full"
                rightIcon={<DownloadIcon />}
                _hover={{ bg: 'var(--portfolio-hover)', transform: 'translateY(-2px)' }}
            >
                Download résumé
            </Button>
        </Flex>

        <Flex mt={8} align="center" gap={3} wrap="wrap">
            <Account label="GitHub" link="https://github.com/NeilEdward">
                <Github boxSize={5} />
            </Account>
            <Account label="LinkedIn" link="https://www.linkedin.com/in/neiledwarddelacruz">
                <LinkedIn boxSize={5} />
            </Account>
            <Text pl={{ base: 0, sm: 2 }} color="var(--portfolio-soft)" fontSize="sm">
                San Jose City, Nueva Ecija
            </Text>
        </Flex>
    </Box>
);

export default Heading;
