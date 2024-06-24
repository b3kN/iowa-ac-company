import { Link, useColorModeValue } from "@chakra-ui/react";

export default function NavLink({
  label,
  url,
}: { label: string; url: string }) {
  return (
    <Link
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
