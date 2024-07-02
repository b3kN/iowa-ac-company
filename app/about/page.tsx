"use client";

import PictureHero from "@/components/pictureHero";
import config from "@/config";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Box
        maxW="4xl"
        m="1em auto"
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        px={{ base: 2, lg: 0 }}
        pb={6}
      >
        <Heading
          as="h2"
          m="0.75em 0 1em"
          size={{ base: "2xl", lg: "3xl" }}
          noOfLines={1}
        >
          About Bob's
        </Heading>
        <Text>
          Established in 2003, {config.app.name} offers quality and
          professional services to Cedar Rapids, IA, and the surrounding area.
          Our services include the repair and installation of air conditioners
          and furnaces. We understand the importance of heating and cooling for
          your home, and our friendly staff will gladly attend to your needs.
          Give us a call today.
        </Text>
      </Box>
      <PictureHero />
      <Box
        maxW="4xl"
        m="1em auto"
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        px={{ base: 2, lg: 0 }}
        pb={6}
      >
        <Heading
          as="h3"
          m="0.75em 0 1em"
          size={{ base: "xl", lg: "2xl" }}
          noOfLines={1}
        >
          Success Stories
        </Heading>
        <Text pb={2}>
          Mauris id lacus vitae mauris tempor fermentum id sed leo. Donec
          hendrerit ex mauris, lobortis laoreet tellus gravida a. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Aenean dignissim accumsan tempor. Vestibulum condimentum mattis
          diam et aliquam. Aliquam erat volutpat. Vestibulum blandit gravida
          sagittis.
        </Text>
        <Text>
          Curabitur ac tellus sodales, bibendum neque et, ullamcorper nibh. Sed
          eleifend cursus lacus. Pellentesque ultricies condimentum sodales.
          Aenean vel gravida odio. Aliquam ultricies tellus eget nunc imperdiet,
          ac rutrum sapien finibus. Vestibulum ac massa dolor. Sed quam mauris,
          vulputate vitae rutrum sed, efficitur ac orci.
        </Text>
      </Box>
    </>
  );
}
