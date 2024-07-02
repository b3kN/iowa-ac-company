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
  colors: {
    brand: {
      100: "#2967b3",
      400: "#195fb5",
      700: "#0d5ab8",
      900: "#0054ba",
    },
  },
  initialColorMode: "system",
  useSystemColorMode: true,
});

export default Theme;
