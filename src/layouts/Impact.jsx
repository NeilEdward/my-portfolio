import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, GridItem, Heading, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';

import CustomHeading from '../components/CustomHeading';
import Section from '../components/Section';

const impactStories = [
    {
        context: 'Lexagle · Current work',
        title: 'Enterprise product workflows',
        description: 'Contributing to enterprise features across product interfaces, backend services, persistence, file handling, and event-driven delivery.',
        problem: 'Complex product workflows need to stay clear for users while remaining dependable across multiple service boundaries.',
        contributions: [
            'Build responsive React and TypeScript interfaces for workflow-heavy product screens and user actions.',
            'Implement Kotlin and Spring Boot service logic, API contracts, persistence changes, and file-processing flows.',
            'Coordinate frontend, backend, storage, and asynchronous event paths across production features.',
        ],
        outcome: 'Helped turn multi-step business requirements into maintainable, traceable product workflows across the stack.',
        stack: ['React', 'TypeScript', 'Redux Toolkit', 'Kotlin', 'Spring Boot', 'PostgreSQL', 'AWS', 'Event-driven systems'],
        accent: 'cyan',
    },
    {
        context: 'RDF · 2023—2025',
        title: 'Financial operations platform',
        description: 'Developed and maintained an internal financial system supporting transactions, reporting, and accounting operations.',
        problem: 'Teams needed one reliable workflow across purchase and job orders, vouchering, clearing, cheque release, and reporting.',
        contributions: [
            'Built reusable React components, API integrations, and validation for transaction-heavy interfaces.',
            'Streamlined connected workflows from requests and approvals through payment and clearing stages.',
            'Delivered automated reports and General Ledger and Journal capabilities with backend and support teams.',
        ],
        outcome: 'Supported end-to-end accounting workflows and recurring financial reporting in one operational system.',
        stack: ['React', 'JavaScript', 'REST APIs', 'Form validation', 'Responsive UI', 'Financial systems'],
        accent: 'purple',
    },
];

const Impact = () => (
    <Section id="impact">
        <CustomHeading
            eyebrow="Selected engineering impact"
            heading="Work shaped around the problem, not just the stack."
            description="A closer look at the production systems I have helped build. Details are generalized to respect product and company confidentiality."
        />

        <Stack spacing={6}>
            {impactStories.map((story, index) => {
                const accentColor = story.accent === 'cyan' ? 'cyan.300' : 'purple.300';
                const accentText = story.accent === 'cyan' ? 'var(--portfolio-cyan-text)' : 'var(--portfolio-purple-text)';

                return (
                    <Grid
                        key={story.title}
                        templateColumns={{ base: '1fr', lg: 'minmax(0, 0.78fr) minmax(0, 1.22fr)' }}
                        border="1px solid"
                        borderColor="var(--portfolio-border)"
                        borderRadius={{ base: '26px', md: '32px' }}
                        bg="var(--portfolio-surface)"
                        overflow="hidden"
                        backdropFilter="blur(18px)"
                    >
                        <GridItem
                            p={{ base: 6, md: 9 }}
                            borderRight={{ lg: '1px solid' }}
                            borderBottom={{ base: '1px solid', lg: 'none' }}
                            borderColor="var(--portfolio-border-soft)"
                            bg={story.accent === 'cyan' ? 'rgba(34, 211, 238, 0.08)' : 'rgba(139, 92, 246, 0.08)'}
                        >
                            <Flex align="center" gap={3}>
                                <Text color="var(--portfolio-faint)" fontFamily="heading" fontSize="sm">
                                    0{index + 1}
                                </Text>
                                <Text color={accentText} fontSize="xs" fontWeight="semibold" letterSpacing="0.1em" textTransform="uppercase">
                                    {story.context}
                                </Text>
                            </Flex>
                            <Heading mt={7} as="h3" color="var(--portfolio-heading)" fontSize={{ base: '2xl', md: '3xl' }} lineHeight="1.2" letterSpacing="-0.035em">
                                {story.title}
                            </Heading>
                            <Text mt={4} color="var(--portfolio-muted)" lineHeight="1.8">
                                {story.description}
                            </Text>
                            <Flex mt={7} wrap="wrap" gap={2}>
                                {story.stack.map((technology) => (
                                    <Text
                                        key={technology}
                                        px={3}
                                        py={1.5}
                                        color="var(--portfolio-muted)"
                                        fontSize="xs"
                                        border="1px solid"
                                        borderColor="var(--portfolio-border)"
                                        borderRadius="full"
                                        bg="var(--portfolio-chip)"
                                    >
                                        {technology}
                                    </Text>
                                ))}
                            </Flex>
                        </GridItem>

                        <GridItem p={{ base: 6, md: 9 }}>
                            <Text color="var(--portfolio-faint)" fontSize="xs" fontWeight="semibold" letterSpacing="0.12em" textTransform="uppercase">
                                The problem
                            </Text>
                            <Text mt={3} color="var(--portfolio-text)" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                                {story.problem}
                            </Text>

                            <Text mt={7} color="var(--portfolio-faint)" fontSize="xs" fontWeight="semibold" letterSpacing="0.12em" textTransform="uppercase">
                                My contribution
                            </Text>
                            <List mt={4} spacing={3}>
                                {story.contributions.map((contribution) => (
                                    <ListItem key={contribution} display="flex" color="var(--portfolio-muted)" lineHeight="1.7">
                                        <ListIcon as={CheckCircleIcon} mt="6px" color={accentColor} />
                                        {contribution}
                                    </ListItem>
                                ))}
                            </List>

                            <Box mt={7} pt={6} borderTop="1px solid" borderColor="var(--portfolio-border-soft)">
                                <Text color="var(--portfolio-faint)" fontSize="xs" fontWeight="semibold" letterSpacing="0.12em" textTransform="uppercase">
                                    Outcome
                                </Text>
                                <Text mt={3} color="var(--portfolio-text)" lineHeight="1.7">
                                    {story.outcome}
                                </Text>
                            </Box>
                        </GridItem>
                    </Grid>
                );
            })}
        </Stack>
    </Section>
);

export default Impact;
