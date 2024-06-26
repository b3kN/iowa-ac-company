"use client";

import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function MainHero() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        as={Box}
        display={"flex"}
        justifyContent={"center"}
        textAlign={"center"}
        minH="calc(100vh - 4rem)"
        spacing={{ base: 10, md: 16 }}
        py={{ base: 16, md: 20 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "5xl", md: "7xl" }}
          lineHeight={"110%"}
        >
          Bob's Heating & Cooling, <br />
          <Text
            mt={"-0.4em"}
            fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
            color={"green.500"}
          >
            where comfort meets affordability.
          </Text>
        </Heading>
        <Text colorScheme="green" fontSize={{ base: "lg", md: "xl" }}>
          At Bob's Heating & Cooling, we pride ourselves on delivering superior
          heating and cooling solutions that enhance your home's comfort without
          breaking the bank.
          <br />
          <br />
          With our commitment to quality craftsmanship and customer
          satisfaction, we ensure that every home enjoys optimal climate control
          throughout the year.
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          mt={5}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"green"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.900",
            }}
          >
            Schedule Now
          </Button>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more about us
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
