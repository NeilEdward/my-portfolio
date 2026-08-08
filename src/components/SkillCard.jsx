import React from 'react';

import { Card, CardHeader, Divider, Heading, SimpleGrid, useColorMode } from '@chakra-ui/react';

const SkillCard = ({ children, heading }) => {
    const { colorMode } = useColorMode();
    return (
        <Card
            variant="outline"
            mt={10}
            p={{ base: 4, md: 6 }}
            // bgColor={colorMode === "light" && "blue.800"}
            bgColor="none " //
            borderColor={colorMode === 'light' && 'blue.800'} //
        >
            <CardHeader p={0}>
                <Heading as="h4" size="lg" fontWeight="regular" mb={2} color={colorMode === 'dark' ? 'gray.300' : 'blackAlpha.800'}>
                    {heading}
                </Heading>
                <Divider />
            </CardHeader>

            <SimpleGrid mt={10} columns={{ base: 2, md: 4, lg: 6 }} placeItems="center" spacing={10}>
                {children}
            </SimpleGrid>
        </Card>
    );
};

export default SkillCard;
