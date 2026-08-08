import React from 'react';

import { Box, Card, CardBody, CardHeader, Center, Heading, useColorMode } from '@chakra-ui/react';

import backend from '../assets/icons/backend.png';
import frontend from '../assets/icons/frontend.png';
import web_design from '../assets/icons/web_design.png';
import CustomeDivider from '../components/CustomeDivider';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const { colorMode } = useColorMode();
    return (
        <Section>
            <Box position="relative">
                <Center>
                    <Card
                        size="lg"
                        position="absolute"
                        top={-40}
                        zIndex={1}
                        width="100%"
                        bgColor={colorMode === 'dark' ? 'blue.900' : 'blue.600'}
                        boxShadow="0px 11px 3px -3px rgba(0,0,0,0.1)"
                    >
                        <CardHeader>
                            <Center>
                                <Heading as="h3" size="xl" fontWeight="semibold" color={colorMode === 'dark' ? 'gray.300' : 'white'}>
                                    What I can Provide?
                                </Heading>
                            </Center>
                            <CustomeDivider />
                        </CardHeader>
                        <CardBody display="flex" flexDirection={{ base: 'column', md: 'row' }} justifyContent="space-between" gap={10}>
                            <div data-aos="flip-left" style={{ flex: 1 }}>
                                <ServiceCard
                                    img={frontend}
                                    heading="Frontend Development"
                                    intro="I am proficient in utilizing HTML, CSS, UI frameworks, and JavaScript library especially ReactJS, to create frontend for websites."
                                />
                            </div>
                            <div data-aos="flip-left" style={{ flex: 1 }}>
                                <ServiceCard
                                    img={backend}
                                    heading="Backend Development"
                                    intro="I am skilled in using NodeJS, Express, MongoDB to provide high-quality backend development services."
                                />
                            </div>
                            <div data-aos="flip-left" style={{ flex: 1 }}>
                                <ServiceCard
                                    img={web_design}
                                    heading="Web Design"
                                    intro="I am profecient in web design using Figma for professional and visually appealing services."
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Center>
            </Box>
        </Section>
    );
};

export default Services;
