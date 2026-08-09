import { Box, Heading, Text } from '@chakra-ui/react';

const CustomHeading = ({ eyebrow, heading, description, mb = { base: 8, md: 12 } }) => {
    return (
        <Box mb={mb} maxW="2xl">
            {eyebrow && (
                <Text mb={3} color="cyan.200" fontSize="sm" fontWeight="semibold" letterSpacing="0.16em" textTransform="uppercase">
                    {eyebrow}
                </Text>
            )}
            <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} lineHeight="1.05" letterSpacing="-0.04em" color="white">
                {heading}
            </Heading>
            {description && (
                <Text mt={4} color="whiteAlpha.700" fontSize={{ base: 'md', md: 'lg' }}>
                    {description}
                </Text>
            )}
        </Box>
    );
};

export default CustomHeading;
