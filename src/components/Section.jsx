import React from 'react';

import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion, useReducedMotion } from 'framer-motion';

const MotionSection = chakra(motion.section, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Section = ({ id, children }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <MotionSection
            id={id}
            py={{ base: 16, md: 24 }}
            px={{ base: 5, md: 8 }}
            maxW="6xl"
            mx="auto"
            scrollMarginTop="88px"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </MotionSection>
    );
};

export default Section;
