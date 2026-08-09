import { Stack } from '@chakra-ui/react';

import { CustomNavLink } from './CustomLink';

const DesktopNav = () => (
    <Stack direction="row" spacing={1} align="center">
        <CustomNavLink link="Experience" path="#experience" />
        <CustomNavLink link="Impact" path="#impact" />
        <CustomNavLink link="Services" path="#services" />
        <CustomNavLink link="About" path="#about" />
        <CustomNavLink link="Contact" path="#contact" />
    </Stack>
);

export default DesktopNav;
