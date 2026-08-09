import React from 'react';

import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, IconButton, useDisclosure } from '@chakra-ui/react';

import { HamburgerIcon } from '../utils/SVGIcons';

import { CustomNavLink } from './CustomLink';

const MobileNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const triggerRef = React.useRef();

    const handleNavigate = (path) => (event) => {
        event.preventDefault();
        onClose();

        window.setTimeout(() => {
            const target = document.querySelector(path);

            if (!target) return;

            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', path);
        }, 120);
    };

    return (
        <Box>
            <IconButton ref={triggerRef} icon={<HamburgerIcon boxSize={5} />} aria-label="Open navigation" variant="ghost" color="white" borderRadius="full" onClick={onOpen} />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={triggerRef} size="full">
                <DrawerOverlay />
                <DrawerContent bg="rgba(5, 8, 22, 0.96)" backdropFilter="blur(24px)">
                    <DrawerBody display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={5} fontSize="xl">
                        <CustomNavLink link="Home" path="#profile" py={3} onClick={handleNavigate('#profile')} />
                        <CustomNavLink link="Experience" path="#experience" py={3} onClick={handleNavigate('#experience')} />
                        <CustomNavLink link="Impact" path="#impact" py={3} onClick={handleNavigate('#impact')} />
                        <CustomNavLink link="Capabilities" path="#skills" py={3} onClick={handleNavigate('#skills')} />
                        <CustomNavLink link="Services" path="#services" py={3} onClick={handleNavigate('#services')} />
                        <CustomNavLink link="About" path="#about" py={3} onClick={handleNavigate('#about')} />
                        <CustomNavLink link="Contact" path="#contact" py={3} onClick={handleNavigate('#contact')} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default MobileNav;
