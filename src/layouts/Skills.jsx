import { Box, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import CustomHeading from '../components/CustomHeading';
import InteractiveCard from '../components/InteractiveCard';
import Section from '../components/Section';

const skillGroups = [
    {
        title: 'Frontend engineering',
        description: 'Responsive product experiences built with reusable, maintainable UI patterns.',
        skills: ['TypeScript & JavaScript', 'React & Next.js', 'Redux Toolkit & RTK Query', 'React Hook Form', 'Sass & responsive UI', 'Component libraries & Storybook'],
        accent: 'cyan.300',
        spotlight: 'rgba(103, 232, 249, 0.16)',
    },
    {
        title: 'Backend engineering',
        description: 'Service-side development for APIs, data workflows, persistence, and file processing.',
        skills: ['Kotlin', 'Spring Boot', 'REST APIs & service contracts', 'Spring Data JPA', 'PostgreSQL & Flyway', 'Coroutines & Gradle'],
        accent: 'purple.300',
        spotlight: 'rgba(167, 139, 250, 0.16)',
    },
    {
        title: 'Cloud and systems',
        description: 'Experience contributing to distributed and event-driven product workflows.',
        skills: ['AWS S3', 'SNS & SQS workflows', 'Node.js & TypeScript services', 'Serverless Framework', 'Event-driven architecture', 'Git & collaborative delivery'],
        accent: 'blue.300',
        spotlight: 'rgba(147, 197, 253, 0.16)',
    },
];

const Skills = () => (
    <Section id="skills">
        <CustomHeading
            eyebrow="Capabilities"
            heading="Across the product stack."
            description="A front-end foundation expanded through hands-on backend, data, cloud, and service integration work."
        />

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
            {skillGroups.map((group) => (
                <InteractiveCard key={group.title} minH="100%" p={{ base: 6, md: 7 }} borderRadius="26px" hoverBorderColor={group.accent} spotlightColor={group.spotlight}>
                    <Box boxSize="10px" mb={6} borderRadius="full" bg={group.accent} boxShadow={`0 0 20px var(--chakra-colors-${group.accent.replace('.', '-')})`} />
                    <Heading as="h3" color="var(--portfolio-heading)" fontSize="xl">
                        {group.title}
                    </Heading>
                    <Text mt={3} color="var(--portfolio-muted)" fontSize="sm" lineHeight="1.7">
                        {group.description}
                    </Text>
                    <Grid mt={7} gap={2}>
                        {group.skills.map((skill) => (
                            <Text key={skill} py={2.5} color="var(--portfolio-text)" fontSize="sm" borderBottom="1px solid" borderColor="var(--portfolio-border-soft)">
                                {skill}
                            </Text>
                        ))}
                    </Grid>
                </InteractiveCard>
            ))}
        </SimpleGrid>
    </Section>
);

export default Skills;
