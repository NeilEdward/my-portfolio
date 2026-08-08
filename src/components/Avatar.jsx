import { Box, Flex, Image, Text } from '@chakra-ui/react';

import profile from '../assets/images/pfp1.png';

const Avatar = () => (
    <Box position="relative" maxW="420px" mx="auto">
        <Box position="absolute" inset="12%" bgGradient="linear(to-br, cyan.300, purple.500)" filter="blur(56px)" opacity={0.35} aria-hidden="true" />
        <Box
            position="relative"
            p={3}
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="32px"
            bg="rgba(255, 255, 255, 0.06)"
            boxShadow="0 28px 80px rgba(0, 0, 0, 0.36)"
            backdropFilter="blur(18px)"
            transform={{ lg: 'rotate(2deg)' }}
        >
            <Image src={profile} alt="Neil Edward Dela Cruz" width="100%" aspectRatio={1} objectFit="cover" borderRadius="24px" />
        </Box>
        <Flex
            position="absolute"
            right={{ base: 1, md: -6 }}
            bottom={{ base: -5, md: 5 }}
            px={5}
            py={4}
            align="center"
            gap={3}
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="20px"
            bg="rgba(9, 14, 35, 0.84)"
            boxShadow="0 18px 50px rgba(0, 0, 0, 0.35)"
            backdropFilter="blur(18px)"
        >
            <Box boxSize="10px" borderRadius="full" bg="purple.300" boxShadow="0 0 18px #c4b5fd" />
            <Box>
                <Text color="white" fontSize="sm" fontWeight="semibold">
                    Full-stack product engineering
                </Text>
                <Text color="whiteAlpha.600" fontSize="xs">
                    Industry experience since 2023
                </Text>
            </Box>
        </Flex>
    </Box>
);

export default Avatar;
