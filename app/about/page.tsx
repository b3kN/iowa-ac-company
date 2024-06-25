"use client";

import { Box, Button, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import styles from "./about.module.css";

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
      maxW="sm"
      mb={4}
    >
      <Heading as="h3" size="lg" mb={2}>
        {title}
      </Heading>
      <Text fontSize="md" mb={4}>
        {description}
      </Text>
      <Button colorScheme="teal" size="md">
        Learn More
      </Button>
    </Box>
  );
}

export default function About() {
  return (
    <Container maxW="container.xl" p={4}>
      <Box bg="gray.100" p={8} borderRadius="md" textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Heating & Cooling Services
        </Heading>
        <Text fontSize="lg" mb={4}>
          We provide top-notch heating and cooling services to keep your home comfortable all year round.
        </Text>
        <Stack direction="row" spacing={4} justify="center">
          <Button colorScheme="teal" size="lg">
            Learn More
          </Button>
          <Button colorScheme="blue" size="lg">
            Contact Us
          </Button>
        </Stack>
      </Box>

      <Flex mt={10} direction={{ base: "column", md: "row" }} justify="space-around">
        <ServiceCard
          title="Heating Services"
          description="Expert heating repair, installation, and maintenance services."
        />
        <ServiceCard
          title="Cooling Services"
          description="Professional air conditioning repair, installation, and maintenance services."
        />
      </Flex>
    </Container>
  );
}
