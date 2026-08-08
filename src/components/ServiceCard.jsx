import React from 'react';

import { Box, Text, useColorMode, Center, Image } from '@chakra-ui/react';

const ServiceCard = ({ img, heading, intro }) => {
    const { colorMode } = useColorMode();
    return (
        <Box mb={8}>
            <Center>
                <Image src={img} alt="development icons" boxSize={16} />
            </Center>
            <Text as="h4" fontSize="xl" fontWeight="semibold" letterSpacing="wider" textAlign="center" color={colorMode === 'dark' ? '#81E6D9' : 'white'}>
                {heading}
            </Text>
            <Text pt={4} textAlign="center" fontSize="lg" fontWeight="normal" color={colorMode === 'dark' ? 'gray.300' : 'white'}>
                {intro}
            </Text>
        </Box>
    );
};

export default ServiceCard;
