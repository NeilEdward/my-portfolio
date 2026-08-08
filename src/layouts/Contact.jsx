import {
  ArrowForwardIcon,
  EmailIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Section from "../components/Section";
import useInput from "../hooks/useInput";

const fieldStyles = {
  color: "white",
  bg: "blackAlpha.300",
  borderColor: "whiteAlpha.200",
  borderRadius: "14px",
  _placeholder: { color: "whiteAlpha.400" },
  _hover: { borderColor: "whiteAlpha.300" },
  _focusVisible: { borderColor: "cyan.300", boxShadow: "0 0 0 1px #67e8f9" },
};

const Contact = () => {
  const [, mailBind] = useInput();
  const [, messageBind] = useInput();

  return (
    <Section id="contact">
      <Grid
        templateColumns={{ base: "1fr", lg: "0.8fr 1.2fr" }}
        gap={{ base: 10, lg: 16 }}
        p={{ base: 6, md: 10, lg: 12 }}
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius={{ base: "28px", md: "36px" }}
        bg="rgba(255, 255, 255, 0.055)"
        boxShadow="0 32px 100px rgba(0, 0, 0, 0.28)"
        backdropFilter="blur(22px)"
      >
        <Box>
          <Text color="cyan.200" fontSize="sm" fontWeight="semibold" letterSpacing="0.16em" textTransform="uppercase">
            Contact
          </Text>
          <Heading mt={4} as="h2" color="white" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.08" letterSpacing="-0.04em">
            Let&apos;s build something useful.
          </Heading>
          <Text mt={5} color="whiteAlpha.600" fontSize="lg" lineHeight="1.8">
            Have a role, product challenge, or collaboration in mind? Send a message and I&apos;ll get back to you.
          </Text>
          <Flex mt={8} direction="column" align="flex-start" gap={4}>
            <Link
              href="mailto:neiledwarddelacruz1999@gmail.com"
              display="inline-flex"
              alignItems="center"
              gap={3}
              color="whiteAlpha.800"
              _hover={{ color: "cyan.200" }}
            >
              <EmailIcon />
              <Text fontSize="sm">neiledwarddelacruz1999@gmail.com</Text>
            </Link>
            <Link
              href="https://www.linkedin.com/in/neiledwarddelacruz"
              target="_blank"
              rel="noreferrer"
              display="inline-flex"
              alignItems="center"
              gap={3}
              color="whiteAlpha.800"
              _hover={{ color: "purple.200" }}
            >
              <ExternalLinkIcon />
              <Text fontSize="sm">Connect on LinkedIn</Text>
            </Link>
          </Flex>
        </Box>

        <Box>
          <form action="https://formsubmit.co/0b0b2cc2b07727d0fda5b0f785573caa" method="POST">
            <FormControl isRequired>
              <FormLabel color="whiteAlpha.700" fontSize="sm">
                Name
              </FormLabel>
              <Input name="name" placeholder="Your name" minH="48px" {...fieldStyles} />
            </FormControl>
            <FormControl mt={5} isRequired>
              <FormLabel color="whiteAlpha.700" fontSize="sm">
                Email
              </FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                minH="48px"
                {...fieldStyles}
                {...mailBind}
              />
            </FormControl>
            <FormControl mt={5} isRequired>
              <FormLabel color="whiteAlpha.700" fontSize="sm">
                Message
              </FormLabel>
              <Textarea
                name="message"
                placeholder="Tell me a little about what you have in mind..."
                minH="150px"
                resize="vertical"
                {...fieldStyles}
                {...messageBind}
              />
            </FormControl>
            <Button
              type="submit"
              mt={6}
              width="100%"
              minH="52px"
              color="gray.950"
              bgGradient="linear(to-r, cyan.200, purple.300)"
              borderRadius="full"
              rightIcon={<ArrowForwardIcon />}
              _hover={{ opacity: 0.9, transform: "translateY(-2px)" }}
            >
              Send message
            </Button>
          </form>
        </Box>
      </Grid>
    </Section>
  );
};

export default Contact;
