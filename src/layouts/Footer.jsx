import { Flex, Image, Text } from '@chakra-ui/react';

import logo from '../assets/brand/neil-mark.png';

const Footer = () => (
    <Flex
        as="footer"
        position="relative"
        zIndex={1}
        maxW="6xl"
        mx="auto"
        px={{ base: 5, md: 8 }}
        py={10}
        direction={{ base: 'column', sm: 'row' }}
        align="center"
        justify="space-between"
        gap={4}
        borderTop="1px solid"
        borderColor="whiteAlpha.100"
    >
        <Flex align="center" gap={3}>
            <Image src={logo} alt="" boxSize="32px" />
            <Text color="whiteAlpha.700" fontSize="sm">
                Neil Edward Dela Cruz
            </Text>
        </Flex>
        <Text color="whiteAlpha.400" fontSize="sm">
            © {new Date().getFullYear()} · Built with React
        </Text>
    </Flex>
);

export default Footer;
