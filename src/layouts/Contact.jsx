import { ArrowForwardIcon, EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, FormControl, FormLabel, Grid, Heading, Input, Link, Select, SimpleGrid, Text, Textarea } from '@chakra-ui/react';

import Section from '../components/Section';
import useInput from '../hooks/useInput';

const fieldStyles = {
    color: 'var(--portfolio-heading)',
    bg: 'var(--portfolio-field-bg)',
    borderColor: 'var(--portfolio-border)',
    borderRadius: '14px',
    _placeholder: { color: 'var(--portfolio-faint)' },
    _hover: { borderColor: 'var(--portfolio-border-strong)' },
    _focusVisible: { borderColor: 'cyan.300', boxShadow: '0 0 0 1px #67e8f9' },
};

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';

const Contact = () => {
    const [, mailBind] = useInput();
    const [, messageBind] = useInput();

    return (
        <Section id="contact">
            <Grid
                templateColumns={{ base: '1fr', lg: '0.8fr 1.2fr' }}
                gap={{ base: 10, lg: 16 }}
                p={{ base: 6, md: 10, lg: 12 }}
                border="1px solid"
                borderColor="var(--portfolio-border)"
                borderRadius={{ base: '28px', md: '36px' }}
                bg="var(--portfolio-surface-strong)"
                boxShadow="var(--portfolio-shadow)"
                backdropFilter="blur(22px)"
            >
                <Box>
                    <Text color="var(--portfolio-cyan-text)" fontSize="sm" fontWeight="semibold" letterSpacing="0.16em" textTransform="uppercase">
                        Contact
                    </Text>
                    <Heading mt={4} as="h2" color="var(--portfolio-heading)" fontSize={{ base: '3xl', md: '5xl' }} lineHeight="1.08" letterSpacing="-0.04em">
                        Let&apos;s build something useful.
                    </Heading>
                    <Text mt={5} color="var(--portfolio-muted)" fontSize="lg" lineHeight="1.8">
                        Have a role, product challenge, or web application in mind? Share the essentials and I&apos;ll get back to you as soon as I can.
                    </Text>
                    <Flex mt={8} direction="column" align="flex-start" gap={4}>
                        <Link
                            href="mailto:neiledwarddelacruz1999@gmail.com"
                            display="inline-flex"
                            alignItems="center"
                            gap={3}
                            color="var(--portfolio-text)"
                            _hover={{ color: 'var(--portfolio-cyan-text)' }}
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
                            color="var(--portfolio-text)"
                            _hover={{ color: 'var(--portfolio-purple-text)' }}
                        >
                            <ExternalLinkIcon />
                            <Text fontSize="sm">Connect on LinkedIn</Text>
                        </Link>
                    </Flex>
                </Box>

                <Box>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value={web3FormsAccessKey} />
                        <input type="hidden" name="subject" value="New portfolio inquiry" />
                        <input type="hidden" name="from_name" value="Neil Portfolio Contact" />
                        <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                        <FormControl isRequired>
                            <FormLabel color="var(--portfolio-muted)" fontSize="sm">
                                Name
                            </FormLabel>
                            <Input name="name" placeholder="Your name" minH="48px" {...fieldStyles} />
                        </FormControl>
                        <FormControl mt={5} isRequired>
                            <FormLabel color="var(--portfolio-muted)" fontSize="sm">
                                Email
                            </FormLabel>
                            <Input type="email" name="email" placeholder="you@example.com" minH="48px" {...fieldStyles} {...mailBind} />
                        </FormControl>
                        <SimpleGrid mt={5} columns={{ base: 1, sm: 2 }} spacing={5}>
                            <FormControl>
                                <FormLabel color="var(--portfolio-muted)" fontSize="sm">
                                    Project type
                                </FormLabel>
                                <Select name="projectType" placeholder="Select a project" minH="48px" {...fieldStyles} sx={{ '> option': { bg: 'var(--portfolio-bg)' } }}>
                                    <option value="Web application">Web application</option>
                                    <option value="Internal tool or dashboard">Internal tool or dashboard</option>
                                    <option value="Frontend improvement">Frontend improvement</option>
                                    <option value="API or backend integration">API or backend integration</option>
                                    <option value="Other">Other</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel color="var(--portfolio-muted)" fontSize="sm">
                                    Expected timeline
                                </FormLabel>
                                <Select name="timeline" placeholder="Select a timeline" minH="48px" {...fieldStyles} sx={{ '> option': { bg: 'var(--portfolio-bg)' } }}>
                                    <option value="Within 1–2 months">Within 1–2 months</option>
                                    <option value="Within 3–6 months">Within 3–6 months</option>
                                    <option value="Flexible">Flexible</option>
                                    <option value="Just exploring">Just exploring</option>
                                </Select>
                            </FormControl>
                        </SimpleGrid>
                        <FormControl mt={5} isRequired>
                            <FormLabel color="var(--portfolio-muted)" fontSize="sm">
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
                            _hover={{ opacity: 0.9, transform: 'translateY(-2px)' }}
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
