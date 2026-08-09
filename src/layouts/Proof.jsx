import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const proofPoints = [
    { value: 'Since 2023', label: 'Industry experience' },
    { value: 'Frontend + backend', label: 'End-to-end delivery' },
    { value: 'React + Kotlin', label: 'Primary product stack' },
    { value: 'Production systems', label: 'Business workflow focus' },
];

const Proof = () => (
    <Box as="section" aria-label="Professional overview" maxW="6xl" mx="auto" px={{ base: 5, md: 8 }} py={{ base: 4, md: 8 }}>
        <SimpleGrid
            columns={{ base: 2, lg: 4 }}
            border="1px solid"
            borderColor="var(--portfolio-border)"
            borderRadius={{ base: '24px', md: '28px' }}
            bg="var(--portfolio-surface)"
            overflow="hidden"
            backdropFilter="blur(18px)"
        >
            {proofPoints.map((point, index) => (
                <Box
                    key={point.value}
                    px={{ base: 4, md: 6 }}
                    py={{ base: 5, md: 6 }}
                    borderRight={{ base: index % 2 === 0 ? '1px solid' : 'none', lg: index < proofPoints.length - 1 ? '1px solid' : 'none' }}
                    borderBottom={{ base: index < 2 ? '1px solid' : 'none', lg: 'none' }}
                    borderColor="var(--portfolio-border-soft)"
                >
                    <Text color="var(--portfolio-heading)" fontFamily="heading" fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold">
                        {point.value}
                    </Text>
                    <Text mt={1} color="var(--portfolio-soft)" fontSize="xs">
                        {point.label}
                    </Text>
                </Box>
            ))}
        </SimpleGrid>
    </Box>
);

export default Proof;
