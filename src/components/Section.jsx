import { Box } from "@chakra-ui/react";
import React from "react";

const Section = ({ id, children }) => {
  return (
    <Box
      as="section"
      id={id}
      py={{ base: 16, md: 24 }}
      px={{ base: 5, md: 8 }}
      maxW="6xl"
      mx="auto"
      scrollMarginTop="88px"
    >
      {children}
    </Box>
  );
};

export default Section;
