import { extendTheme } from "@chakra-ui/react";
import { type StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: Record<string, any> | StyleFunctionProps) => ({
    "html, body": {
      bg: mode("gray.200", "gray.800")(props),
    },
  }),
};

const Theme = extendTheme({
  styles,
  initialColorMode: "system",
  useSystemColorMode: true,
});

export default Theme;
