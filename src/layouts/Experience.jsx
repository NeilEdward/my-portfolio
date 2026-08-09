import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, Heading, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';

import CustomHeading from '../components/CustomHeading';
import Section from '../components/Section';

const roles = [
    {
        company: 'Lexagle',
        role: 'Junior Software Engineer',
        period: '2025 — Present',
        current: true,
        summary: 'Delivering enterprise product features across a large React and TypeScript application and Kotlin and Spring Boot backend services.',
        highlights: [
            'Build responsive product flows using React, TypeScript, Redux Toolkit, RTK Query, and shared component systems.',
            'Implement backend service logic, API contracts, persistence changes, file-processing workflows, and asynchronous processing in Kotlin.',
            'Work with PostgreSQL, Flyway, AWS, and event-driven flows while collaborating across service boundaries.',
        ],
        skills: ['React', 'TypeScript', 'Kotlin', 'Spring Boot', 'PostgreSQL', 'AWS', 'RTK Query'],
    },
    {
        company: 'RDF Feeds, Livestock & Foods Inc.',
        role: 'Junior Frontend Developer',
        period: '2023 — August 2025',
        current: false,
        summary: 'Developed and maintained a financial platform covering transactions, payments, reporting, and end-to-end accounting workflows.',
        highlights: [
            'Built reusable React UI components, integrated API endpoints, and implemented form validation.',
            'Streamlined workflows from purchase and job orders through vouchering, clearing, and cheque release.',
            'Delivered automated reports and general-ledger features while resolving issues with back-end and support teams.',
        ],
        skills: ['React', 'REST APIs', 'Financial systems', 'Responsive UI'],
    },
];

const Experience = () => (
    <Section id="experience">
        <CustomHeading
            eyebrow="Experience"
            heading="Building software for real workflows."
            description="From financial operations to product engineering, I focus on practical systems that are easier to use and maintain."
        />

        <Stack spacing={6}>
            {roles.map((role, index) => (
                <Grid
                    key={role.company}
                    templateColumns={{ base: '1fr', md: '220px minmax(0, 1fr)' }}
                    gap={{ base: 6, md: 10 }}
                    p={{ base: 6, md: 9 }}
                    border="1px solid"
                    borderColor={role.current ? 'cyan.300' : 'whiteAlpha.200'}
                    borderRadius={{ base: '24px', md: '30px' }}
                    bg={role.current ? 'rgba(34, 211, 238, 0.07)' : 'rgba(255, 255, 255, 0.045)'}
                    boxShadow={role.current ? '0 24px 80px rgba(34, 211, 238, 0.08)' : 'none'}
                    backdropFilter="blur(18px)"
                >
                    <Box>
                        <Flex mb={4} align="center" gap={3}>
                            <Text color="whiteAlpha.500" fontFamily="heading" fontSize="sm">
                                0{index + 1}
                            </Text>
                            {role.current && (
                                <Text px={3} py={1} color="cyan.100" fontSize="xs" fontWeight="semibold" borderRadius="full" bg="rgba(34, 211, 238, 0.12)">
                                    Current role
                                </Text>
                            )}
                        </Flex>
                        <Text color="whiteAlpha.500" fontSize="sm">
                            {role.period}
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h3" color="white" fontSize={{ base: '2xl', md: '3xl' }} letterSpacing="-0.03em">
                            {role.role}
                        </Heading>
                        <Text mt={1} color={role.current ? 'cyan.200' : 'purple.200'} fontWeight="semibold">
                            {role.company}
                        </Text>
                        <Text mt={5} maxW="3xl" color="whiteAlpha.700" lineHeight="1.8">
                            {role.summary}
                        </Text>
                        <List mt={6} spacing={3}>
                            {role.highlights.map((highlight) => (
                                <ListItem key={highlight} display="flex" color="whiteAlpha.700" lineHeight="1.7">
                                    <ListIcon as={CheckCircleIcon} mt="6px" color={role.current ? 'cyan.300' : 'purple.300'} />
                                    {highlight}
                                </ListItem>
                            ))}
                        </List>
                        <Flex mt={7} wrap="wrap" gap={2}>
                            {role.skills.map((skill) => (
                                <Text
                                    key={skill}
                                    px={3}
                                    py={1.5}
                                    color="whiteAlpha.700"
                                    fontSize="xs"
                                    fontWeight="medium"
                                    border="1px solid"
                                    borderColor="whiteAlpha.200"
                                    borderRadius="full"
                                    bg="blackAlpha.200"
                                >
                                    {skill}
                                </Text>
                            ))}
                        </Flex>
                    </Box>
                </Grid>
            ))}
        </Stack>
    </Section>
);

export default Experience;
