import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavLink({
  label,
  url,
}: { label: string; url: string }) {
  return (
    <Link
      as={NextLink}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={url}
    >
      {label}
    </Link>
  );
}
