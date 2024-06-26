"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  createIcon,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 4, md: 7 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Bob's Heating & Cooling, <br />
            <Text
              mt={"-0.25em"}
              fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
              color={useColorModeValue("green.700", "green.400")}
            >
              where comfort meets affordability.
            </Text>
          </Heading>
          <Text color={useColorModeValue("gray.500", "gray.100")}>
            At Bob's Heating & Cooling, we pride ourselves on delivering
            superior heating and cooling solutions that enhance your home's
            comfort without breaking the bank.
            <br />
            <br />
            With our commitment to quality craftsmanship and customer
            satisfaction, we ensure that every home enjoys optimal climate
            control throughout the year.
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
              bg={useColorModeValue("green.700", "green.400")}
              rounded={"full"}
              px={6}
              _hover={{
                bg: useColorModeValue("green.900", "green.500"),
              }}
            >
              Get Started
            </Button>
            <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
