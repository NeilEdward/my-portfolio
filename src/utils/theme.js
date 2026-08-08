import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    fonts: {
        heading: `'Space Grotesk', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    styles: {
        global: {
            body: {
                bg: '#050816',
                color: 'whiteAlpha.900',
            },
            '::selection': {
                bg: 'cyan.300',
                color: 'gray.900',
            },
        },
    },
});

export default theme;
