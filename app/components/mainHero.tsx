"use client";

import config from "@/config";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

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
          {config.app.name}, <br />
          <Text
            mt={"-0.4em"}
            fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
            color={useColorModeValue("blue.700", "brand.400")}
          >
            where comfort meets affordability.
          </Text>
        </Heading>
        <Text colorScheme="brand" fontSize={{ base: "lg", md: "xl" }}>
          At {config.app.name}, we pride ourselves on delivering superior
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
          <NextLink href="/services" passHref>
            <Button
              bg={useColorModeValue("blue.300", "brand.700")}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "blue.500",
              }}
            >
              Schedule Now
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button variant={"link"} colorScheme={"brand"} size={"sm"}>
              Learn more about us
            </Button>
          </NextLink>
        </Stack>
      </Stack>
    </Container>
  );
}
