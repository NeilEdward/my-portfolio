import React, { useRef, useEffect } from 'react';

import { Box, Text, Card, CardHeader, CardBody, Heading, CardFooter, Button, AspectRatio, Image, useColorMode, useMediaQuery } from '@chakra-ui/react';

import Account from '../components/Account';
import { Github } from '../utils/SVGIcons';

const ProjectCard = ({ image, heading, explanation, tools, link, github }) => {
    const { colorMode } = useColorMode();
    const [isDesktopSize] = useMediaQuery('(min-width: 1024px)');
    const boxRef = useRef(null);
    const cardRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (boxRef.current && isDesktopSize && image) {
            const image = boxRef.current.querySelector(`#${imageRef.current.id}`);
            const card = boxRef.current.querySelector(`#${cardRef.current.id}`);

            function mouseOver(toScaleUp, toScaleDown) {
                let scaledUp = toScaleUp;
                let scaledDown = toScaleDown;

                boxRef.current.addEventListener('mouseover', () => {
                    boxRef.current.style.boxShadow = 'inset 0px -80px 100px -4px rgba(0,0,0,0.1)';
                    scaledUp.style.marginLeft = '2.5rem';
                    scaledUp.style.transform = 'scale(1.1)';
                    scaledUp.style.transition = ' all 0.2s ease-in-out';
                    scaledDown.style.transform = 'scale(.9)';
                    scaledDown.style.transition = ' all 0.2s ease-in-out';
                });
            }
            function mouseLeave(scaledUp, scaledDown) {
                boxRef.current.addEventListener('mouseleave', () => {
                    boxRef.current.style.boxShadow = 'none';
                    scaledUp.style.marginLeft = '0';
                    scaledUp.style.transform = 'scale(1)';
                    scaledUp.style.transition = ' all 0.2s ease-in-out';
                    scaledDown.style.transform = 'scale(1)';
                    scaledDown.style.transition = ' all 0.2s ease-in-out';
                });
            }
            mouseOver(image, card);
            mouseLeave(image, card);
        }
    });

    return (
        <Box ref={boxRef} width="100%" display="flex" flexDirection={{ base: 'column', md: 'row' }} justifyContent="space-between" gap={2}>
            {image && (
                <AspectRatio ratio={16 / 9} width="100%">
                    <Image ref={imageRef} id={heading} src={image} alt="" width="100%" />
                </AspectRatio>
            )}
            <Card ref={cardRef} id={`card${heading}`} width={{ base: '100%', md: '50%' }}>
                <CardHeader>
                    <Heading as="h3" fontWeight="semibold" size="md">
                        {heading}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Text textAlign="left">{explanation}</Text>
                    <Box display="flex" flexWrap="wrap" pt={4} gap={2}>
                        {tools?.map((tool, i) => (
                            <Text key={i} px={4} bgColor="blue.600" color={colorMode === 'light' && 'white'}>
                                {tool}
                            </Text>
                        ))}
                    </Box>
                </CardBody>
                <CardFooter display="flex" gap={4}>
                    <Button
                        as="a"
                        href={link}
                        target="_blank"
                        size="sm"
                        bgColor="gray.500"
                        cursor="pointer"
                        _hover={{
                            transform: 'scale(1.05)',
                            transition: 'all 0.2s ease-in-out',
                            bgColor: 'blue.400',
                        }}
                        color={colorMode === 'light' && 'white'}
                    >
                        Visit site
                    </Button>
                    <Account label="github" link={github} size="sm">
                        <Github boxSize={6} color={colorMode === 'light' && 'blackAlpha.800'} />
                    </Account>
                </CardFooter>
            </Card>
        </Box>
    );
};

export default ProjectCard;
