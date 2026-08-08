import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading as ChakraHeading, Text } from "@chakra-ui/react";
import { Github, LinkedIn } from "../utils/SVGIcons";
import Account from "./Account";

const Heading = () => (
  <Box maxW="3xl">
    <Flex
      display="inline-flex"
      mb={6}
      px={4}
      py={2}
      align="center"
      gap={2}
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius="full"
      bg="whiteAlpha.50"
      backdropFilter="blur(12px)"
    >
      <Box boxSize="8px" borderRadius="full" bg="cyan.300" boxShadow="0 0 18px #67e8f9" />
      <Text color="whiteAlpha.800" fontSize="sm" fontWeight="medium">
        Junior Software Engineer at Lexagle
      </Text>
    </Flex>

    <ChakraHeading
      as="h1"
      color="white"
      fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
      lineHeight={{ base: "1.05", md: "0.98" }}
      letterSpacing="-0.055em"
    >
      I turn complex workflows into
      <Text
        as="span"
        display="block"
        bgGradient="linear(to-r, cyan.200, purple.300)"
        bgClip="text"
      >
        reliable software.
      </Text>
    </ChakraHeading>

    <Text
      mt={7}
      maxW="2xl"
      color="whiteAlpha.700"
      fontSize={{ base: "lg", md: "xl" }}
      lineHeight="1.8"
    >
      I&apos;m Neil, a software engineer working across React and TypeScript interfaces,
      Kotlin and Spring Boot services, and the systems that connect them. I turn complex
      workflows into maintainable product experiences.
    </Text>

    <Flex mt={9} direction={{ base: "column", sm: "row" }} align={{ sm: "center" }} gap={4}>
      <Button
        as="a"
        href="#experience"
        size="lg"
        minH="52px"
        px={7}
        color="gray.950"
        bg="cyan.200"
        borderRadius="full"
        rightIcon={<ArrowForwardIcon />}
        _hover={{ bg: "cyan.100", transform: "translateY(-2px)" }}
      >
        View experience
      </Button>
      <Button
        as="a"
        href="#contact"
        size="lg"
        minH="52px"
        px={7}
        color="white"
        bg="whiteAlpha.50"
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="full"
        rightIcon={<EmailIcon />}
        _hover={{ bg: "whiteAlpha.100", transform: "translateY(-2px)" }}
      >
        Contact me
      </Button>
    </Flex>

    <Flex mt={8} align="center" gap={3} wrap="wrap">
      <Account label="GitHub" link="https://github.com/neildc14">
        <Github boxSize={5} />
      </Account>
      <Account label="LinkedIn" link="https://www.linkedin.com/in/neiledwarddelacruz">
        <LinkedIn boxSize={5} />
      </Account>
      <Text pl={{ base: 0, sm: 2 }} color="whiteAlpha.500" fontSize="sm">
        San Jose City, Nueva Ecija
      </Text>
    </Flex>
  </Box>
);

export default Heading;
