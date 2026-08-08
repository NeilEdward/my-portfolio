import { Stack } from "@chakra-ui/react";
import { CustomNavLink } from "./CustomLink";

const DesktopNav = () => (
  <Stack direction="row" spacing={1} align="center">
    <CustomNavLink link="Home" path="#profile" />
    <CustomNavLink link="Experience" path="#experience" />
    <CustomNavLink link="Skills" path="#skills" />
    <CustomNavLink link="About" path="#about" />
    <CustomNavLink link="Contact" path="#contact" />
  </Stack>
);

export default DesktopNav;
