import {
  Button,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function PictureHero() {
  return (
    <Flex
      w={"full"}
      h={"20em"}
      backgroundImage={"url(banner.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Stack direction={"row"}>
            <NextLink href="/services" passHref>
              <Button
                bg={"brand.700"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Schedule Service
              </Button>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Contact Us
              </Button>
            </NextLink>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
