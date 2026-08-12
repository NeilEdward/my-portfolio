import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Grid, Heading, SimpleGrid, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion, useReducedMotion } from 'framer-motion';

import CustomHeading from '../components/CustomHeading';
import InteractiveCard from '../components/InteractiveCard';
import Section from '../components/Section';

const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const services = [
    {
        number: '01',
        title: 'Business web applications',
        description: 'Responsive React and TypeScript product experiences designed around real users and operational workflows.',
        accent: 'cyan.300',
        spotlight: 'rgba(103, 232, 249, 0.16)',
    },
    {
        number: '02',
        title: 'Internal tools and dashboards',
        description: 'Focused interfaces for managing data, approvals, reporting, and the day-to-day work behind a business.',
        accent: 'purple.300',
        spotlight: 'rgba(167, 139, 250, 0.16)',
    },
    {
        number: '03',
        title: 'API-backed workflow systems',
        description: 'Frontend, backend, and integration work that connects product interfaces to maintainable services and data flows.',
        accent: 'blue.300',
        spotlight: 'rgba(147, 197, 253, 0.16)',
    },
];

const process = [
    ['Understand', 'Clarify the users, workflow, constraints, and definition of success.'],
    ['Shape', 'Turn the problem into a focused solution and practical delivery plan.'],
    ['Build', 'Develop the interface, services, and integrations as one connected system.'],
    ['Improve', 'Validate the experience, resolve edge cases, and refine what matters.'],
];

const Services = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <Section id="services">
            <Flex mb={{ base: 8, md: 12 }} direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-end' }} justify="space-between" gap={6}>
                <CustomHeading
                    eyebrow="What I build"
                    heading="Useful software for real business workflows."
                    description="I take on selected freelance web application work, from product interfaces and internal tools to backend APIs and cloud integrations."
                    mb={0}
                />
                <Flex flexShrink={0} px={4} py={2.5} align="center" gap={2} border="1px solid" borderColor="cyan.300" borderRadius="full" bg="rgba(34, 211, 238, 0.07)">
                    <Box boxSize="7px" borderRadius="full" bg="cyan.300" boxShadow="0 0 16px #67e8f9" />
                    <Text color="var(--portfolio-cyan-text)" fontSize="sm" fontWeight="medium">
                        Available for selected freelance work · GMT+8
                    </Text>
                </Flex>
            </Flex>

            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
                {services.map((service) => (
                    <InteractiveCard key={service.title} p={{ base: 6, md: 7 }} borderRadius="26px" hoverBorderColor={service.accent} spotlightColor={service.spotlight}>
                        <Text color={service.accent} fontFamily="heading" fontSize="sm">
                            {service.number}
                        </Text>
                        <Heading mt={6} as="h3" color="var(--portfolio-heading)" fontSize="xl" lineHeight="1.3">
                            {service.title}
                        </Heading>
                        <Text mt={4} color="var(--portfolio-muted)" fontSize="sm" lineHeight="1.8">
                            {service.description}
                        </Text>
                    </InteractiveCard>
                ))}
            </SimpleGrid>

            <Box mt={{ base: 8, md: 12 }} p={{ base: 6, md: 9 }} border="1px solid" borderColor="var(--portfolio-border)" borderRadius="30px" bg="rgba(139, 92, 246, 0.07)">
                <Flex direction={{ base: 'column', md: 'row' }} align={{ md: 'center' }} justify="space-between" gap={5}>
                    <Box>
                        <Text color="var(--portfolio-purple-text)" fontSize="sm" fontWeight="semibold" letterSpacing="0.14em" textTransform="uppercase">
                            How I work
                        </Text>
                        <Heading mt={3} as="h3" color="var(--portfolio-heading)" fontSize={{ base: '2xl', md: '3xl' }} letterSpacing="-0.03em">
                            Clear from problem to delivery.
                        </Heading>
                    </Box>
                    <Button
                        as="a"
                        href="#contact"
                        variant="outline"
                        minH="48px"
                        px={6}
                        color="var(--portfolio-heading)"
                        borderColor="var(--portfolio-border-strong)"
                        borderRadius="full"
                        rightIcon={<ArrowForwardIcon />}
                        _hover={{ bg: 'var(--portfolio-hover)', borderColor: 'cyan.200' }}
                    >
                        Discuss a project
                    </Button>
                </Flex>
                <Box position="relative" mt={8}>
                    <Box position="absolute" top="0" left="0" right="0" display={{ base: 'none', lg: 'block' }} h="1px" bg="var(--portfolio-border-soft)" />
                    <MotionBox
                        position="absolute"
                        top="0"
                        left="0"
                        display={{ base: 'none', lg: 'block' }}
                        h="1px"
                        bgGradient="linear(to-r, cyan.300, purple.300, blue.300)"
                        transformOrigin="left"
                        initial={shouldReduceMotion ? false : { scaleX: 0 }}
                        whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        width="100%"
                    />
                    <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
                        {process.map(([title, description], index) => (
                            <MotionBox
                                key={title}
                                pt={5}
                                borderTop={{ base: '1px solid', lg: 'none' }}
                                borderColor="var(--portfolio-border)"
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                            >
                                <Text color="var(--portfolio-faint)" fontFamily="heading" fontSize="xs">
                                    0{index + 1}
                                </Text>
                                <Text mt={3} color="var(--portfolio-heading)" fontWeight="semibold">
                                    {title}
                                </Text>
                                <Text mt={2} color="var(--portfolio-soft)" fontSize="sm" lineHeight="1.7">
                                    {description}
                                </Text>
                            </MotionBox>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Section>
    );
};

export default Services;
