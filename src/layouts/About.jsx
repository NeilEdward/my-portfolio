import { Box, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import CustomHeading from '../components/CustomHeading';
import Section from '../components/Section';

const strengths = ['Adaptable learner', 'Collaborative teammate', 'Detail-oriented', 'Clear communicator'];

const About = () => (
    <Section id="about">
        <CustomHeading eyebrow="About" heading="Engineering with clarity and care." />
        <Grid templateColumns={{ base: '1fr', lg: '1.25fr 0.75fr' }} gap={6}>
            <Box p={{ base: 6, md: 9 }} border="1px solid" borderColor="var(--portfolio-border)" borderRadius="30px" bg="var(--portfolio-surface)" backdropFilter="blur(18px)">
                <Text color="var(--portfolio-text)" fontSize={{ base: 'lg', md: '2xl' }} lineHeight="1.7">
                    I&apos;m a software engineer who works across product interfaces, backend services, data flows, and integrations for complex business workflows.
                </Text>
                <Text mt={6} color="var(--portfolio-muted)" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">
                    My foundation is in front-end engineering, but my current work also includes Kotlin and Spring Boot services, persistence, file-processing pipelines, and
                    event-driven systems. I enjoy understanding the complete flow and making each layer more dependable.
                </Text>
                <SimpleGrid mt={9} columns={{ base: 1, sm: 2 }} spacing={3}>
                    {strengths.map((strength) => (
                        <Flex
                            key={strength}
                            px={4}
                            py={3}
                            align="center"
                            gap={3}
                            border="1px solid"
                            borderColor="var(--portfolio-border-soft)"
                            borderRadius="16px"
                            bg="var(--portfolio-chip)"
                        >
                            <Box boxSize="7px" borderRadius="full" bg="cyan.300" />
                            <Text color="var(--portfolio-muted)" fontSize="sm">
                                {strength}
                            </Text>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Box>

            <Box p={{ base: 6, md: 9 }} border="1px solid" borderColor="purple.300" borderRadius="30px" bg="rgba(139, 92, 246, 0.08)" backdropFilter="blur(18px)">
                <Text color="var(--portfolio-purple-text)" fontSize="sm" fontWeight="semibold" letterSpacing="0.12em" textTransform="uppercase">
                    Education
                </Text>
                <Heading mt={5} as="h3" color="var(--portfolio-heading)" fontSize="2xl" lineHeight="1.25">
                    Bachelor of Science in Information Technology
                </Heading>
                <Text mt={4} color="var(--portfolio-muted)">
                    College for Research &amp; Technology
                </Text>
                <Text mt={2} color="var(--portfolio-soft)" fontSize="sm">
                    Graduated 2023
                </Text>
                <Box mt={10} pt={7} borderTop="1px solid" borderColor="var(--portfolio-border)">
                    <Text color="var(--portfolio-soft)" fontSize="sm">
                        Based in
                    </Text>
                    <Text mt={2} color="var(--portfolio-heading)" fontFamily="heading" fontSize="xl" fontWeight="semibold">
                        San Jose City, Nueva Ecija
                    </Text>
                </Box>
            </Box>
        </Grid>
    </Section>
);

export default About;
