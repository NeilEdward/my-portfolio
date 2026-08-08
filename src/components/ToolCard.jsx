import React from 'react';

import { Card, Heading, Image, useColorMode } from '@chakra-ui/react';

const ToolCard = ({ type, img }) => {
    const { colorMode } = useColorMode();
    return (
        <Card
            size="sm"
            maxW={40}
            width="90%"
            variant="outline" //
            display="grid"
            placeItems="center"
            pt={4} //py
            // bgColor={colorMode === "light" && "blue.100"}
            // boxShadow="-5px 0px 36px -11px rgba(0,0,0,0.1"
            bgColor="none" //
            borderColor={colorMode === 'light' && 'blue.800'} //
        >
            <Image src={img} height={{ base: 12, lg: 12 }} width={{ lg: '50%' }} _hover={{ transform: 'scale(2)' }} transition="all .5s ease-in-out" />
            <Heading
                as="h2"
                size="sm"
                py={2}
                mt={2}
                textAlign="center"
                color={colorMode === 'dark' ? 'gray.300' : 'blackAlpha.800'} //blackAlpha.800 lightMode
            >
                {type}
            </Heading>
        </Card>
    );
};

export default ToolCard;
