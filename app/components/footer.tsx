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
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYelp,
  FaYoutube,
} from "react-icons/fa";

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
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"Facebook"} href={"#"}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Yelp"} href={"#"}>
            <FaYelp />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
