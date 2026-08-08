import { Grid, GridItem } from "@chakra-ui/react";
import Section from "../components/Section";
import Avatar from "../components/Avatar";
import Heading from "../components/Heading";

const Banner = () => (
  <Section id="profile">
    <Grid
      minH={{ base: "auto", lg: "calc(100vh - 120px)" }}
      templateColumns={{ base: "1fr", lg: "minmax(0, 1.25fr) minmax(320px, 0.75fr)" }}
      gap={{ base: 12, lg: 16 }}
      alignItems="center"
    >
      <GridItem>
        <Heading />
      </GridItem>
      <GridItem>
        <Avatar />
      </GridItem>
    </Grid>
  </Section>
);

export default Banner;
