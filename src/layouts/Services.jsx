import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import CustomHeading from '../components/CustomHeading';
import Section from '../components/Section';

const services = [
    {
        number: '01',
        title: 'Business web applications',
        description: 'Responsive React and TypeScript product experiences designed around real users and operational workflows.',
    },
    {
        number: '02',
        title: 'Internal tools and dashboards',
        description: 'Focused interfaces for managing data, approvals, reporting, and the day-to-day work behind a business.',
    },
    {
        number: '03',
        title: 'API-backed workflow systems',
        description: 'Frontend, backend, and integration work that connects product interfaces to maintainable services and data flows.',
    },
];

const process = [
    ['Understand', 'Clarify the users, workflow, constraints, and definition of success.'],
    ['Shape', 'Turn the problem into a focused solution and practical delivery plan.'],
    ['Build', 'Develop the interface, services, and integrations as one connected system.'],
    ['Improve', 'Validate the experience, resolve edge cases, and refine what matters.'],
];

const Services = () => (
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
                <Text color="cyan.100" fontSize="sm" fontWeight="medium">
                    Available for selected freelance work · GMT+8
                </Text>
            </Flex>
        </Flex>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
            {services.map((service) => (
                <Box
                    key={service.title}
                    p={{ base: 6, md: 7 }}
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    borderRadius="26px"
                    bg="rgba(255, 255, 255, 0.045)"
                    backdropFilter="blur(18px)"
                >
                    <Text color="cyan.200" fontFamily="heading" fontSize="sm">
                        {service.number}
                    </Text>
                    <Heading mt={6} as="h3" color="white" fontSize="xl" lineHeight="1.3">
                        {service.title}
                    </Heading>
                    <Text mt={4} color="whiteAlpha.600" fontSize="sm" lineHeight="1.8">
                        {service.description}
                    </Text>
                </Box>
            ))}
        </SimpleGrid>

        <Box mt={{ base: 8, md: 12 }} p={{ base: 6, md: 9 }} border="1px solid" borderColor="whiteAlpha.200" borderRadius="30px" bg="rgba(139, 92, 246, 0.055)">
            <Flex direction={{ base: 'column', md: 'row' }} align={{ md: 'center' }} justify="space-between" gap={5}>
                <Box>
                    <Text color="purple.200" fontSize="sm" fontWeight="semibold" letterSpacing="0.14em" textTransform="uppercase">
                        How I work
                    </Text>
                    <Heading mt={3} as="h3" color="white" fontSize={{ base: '2xl', md: '3xl' }} letterSpacing="-0.03em">
                        Clear from problem to delivery.
                    </Heading>
                </Box>
                <Button
                    as="a"
                    href="#contact"
                    variant="outline"
                    minH="48px"
                    px={6}
                    color="white"
                    borderColor="whiteAlpha.300"
                    borderRadius="full"
                    rightIcon={<ArrowForwardIcon />}
                    _hover={{ bg: 'whiteAlpha.100', borderColor: 'cyan.200' }}
                >
                    Discuss a project
                </Button>
            </Flex>
            <Grid mt={8} templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
                {process.map(([title, description], index) => (
                    <Box key={title} pt={5} borderTop="1px solid" borderColor="whiteAlpha.200">
                        <Text color="whiteAlpha.400" fontFamily="heading" fontSize="xs">
                            0{index + 1}
                        </Text>
                        <Text mt={3} color="white" fontWeight="semibold">
                            {title}
                        </Text>
                        <Text mt={2} color="whiteAlpha.500" fontSize="sm" lineHeight="1.7">
                            {description}
                        </Text>
                    </Box>
                ))}
            </Grid>
        </Box>
    </Section>
);

export default Services;
