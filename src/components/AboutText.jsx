import React from 'react';

import { Text, useColorMode } from '@chakra-ui/react';

const AboutText = ({ text }) => {
    const { colorMode } = useColorMode();
    return (
        <Text
            as="p"
            pb={4}
            textAlign="justify"
            textAlignLast="left"
            fontSize="lg"
            fontWeight="semibold"
            lineHeight="tall"
            textIndent={52}
            bgGradient={colorMode === 'dark' ? 'linear(to-r, #90CDF4, #3182CE)' : 'linear(to-r, blackAlpha.700, blackAlpha.800)'}
            bgClip="text"
        >
            {text}
        </Text>
    );
};

export default AboutText;
