"use client";

import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FcGoogle } from "react-icons/fc";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  const { colorMode } = useColorMode();
  const d = new Date();
  const year = d.getFullYear();

  return (
    <Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image
          src={colorMode === "light" ? "/bobslogo.png" : "/bobslogowhite.png"}
          width={120}
          alt="Bobs logo"
        />
        <Text>© {year} Illustrious Online. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Google"} href={"https://g.co/kgs/ryat5b9"}>
            <FcGoogle />
          </SocialButton>
          <SocialButton
            label={"YellowPages"}
            href={
              "https://www.yellowpages.com/cedar-rapids-ia/mip/bobs-heating-service-551525620"
            }
          >
            <Image
              borderRadius="full"
              src={"yellowpages.svg"}
              width={10}
              alt="Bobs logo"
            />
          </SocialButton>
          <SocialButton
            label={"NextDoor"}
            href={
              "https://api.nextdoor.com/pages/bobs-heating-cooling-cedar-rapids-ia-1/"
            }
          >
            <Image src={"nextdoor.png"} width={10} alt="Bobs logo" />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
