"use client";

import {
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  PhoneIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { setCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import SmallWithLogoLeft from "./footer";
import NavLink from "./navLink";
import styles from "./wrapper.module.css";

const Links = [
  {
    key: "About",
    url: "/about",
  },
  {
    key: "Services",
    url: "/services",
  },
  {
    key: "Contact",
    url: "/contact",
  },
];

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setCookie("chakra-ui-color-mode", colorMode);
  }, [colorMode]);

  return (
    <>
      <Box data-testid="wrapper" bg={useColorModeValue("gray.300", "gray.900")}>
        <Flex
          h={16}
          px={4}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            data-testid="mobileToggle"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link href={"/"}>
              <Image
                src={
                  colorMode === "light" ? "/bobslogo.png" : "/bobslogowhite.png"
                }
                width={120}
                height={60}
                alt="Bobs logo"
              />
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.key} label={link.key} url={link.url} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Box
              display={{ base: "none", md: "flex" }}
              fontSize={"xs"}
              fontWeight={"700"}
              fontStyle={"italic"}
              paddingEnd={6}
            >
              Quality Can Be Affordable
            </Box>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <Button data-testid="themeToggle" onClick={toggleColorMode}>
                {colorMode === "light" ? (
                  <MoonIcon data-testid="moon" />
                ) : (
                  <SunIcon data-testid="sun" />
                )}
              </Button>
              <Button as={"a"} href={"/contact"}>
                <PhoneIcon />
              </Button>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box data-testid="mobileNav" pb={4} display={{ md: "none" }}>
            <Box
              display={"flex"}
              justifyContent={"end"}
              bg={useColorModeValue("gray.200", "gray.700")}
              fontSize={"xs"}
              fontWeight={"700"}
              fontStyle={"italic"}
              padding={"0.5em 0.75em 0.5em 0"}
            >
              Quality Can Be Affordable
            </Box>
            <Stack as={"nav"} spacing={4} px={4} paddingTop={4}>
              {Links.map((link) => (
                <NavLink key={link.key} label={link.key} url={link.url} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box className={styles.wrapper}>{children}</Box>

      <SmallWithLogoLeft />
    </>
  );
}
