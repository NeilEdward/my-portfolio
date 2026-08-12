import React from 'react';

import { Box, chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion, useReducedMotion } from 'framer-motion';

const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const InteractiveCard = ({ children, hoverBorderColor = 'cyan.300', spotlightColor = 'rgba(103, 232, 249, 0.16)', ...props }) => {
    const cardRef = React.useRef(null);
    const shouldReduceMotion = useReducedMotion();

    const handlePointerMove = (event) => {
        if (shouldReduceMotion || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        cardRef.current.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
        cardRef.current.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
    };

    return (
        <MotionBox
            ref={cardRef}
            position="relative"
            overflow="hidden"
            border="1px solid"
            borderColor="var(--portfolio-border)"
            bg="var(--portfolio-surface)"
            backdropFilter="blur(18px)"
            onPointerMove={handlePointerMove}
            whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            _before={{
                content: '""',
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                opacity: 0,
                transition: 'opacity 0.25s ease',
                bg: `radial-gradient(220px circle at var(--spotlight-x, 50%) var(--spotlight-y, 20%), ${spotlightColor}, transparent 68%)`,
            }}
            _after={{
                content: '""',
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                borderRadius: 'inherit',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            }}
            _hover={{
                borderColor: hoverBorderColor,
                _before: { opacity: 1 },
            }}
            {...props}
        >
            <Box position="relative" zIndex={1}>
                {children}
            </Box>
        </MotionBox>
    );
};

export default InteractiveCard;
