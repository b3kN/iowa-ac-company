"use client";

import Theme from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { setCookie } from "cookies-next";
import React from "react";

export const ThemeProvider = ({
  colorMode,
  children,
}: {
  colorMode?: any;
  children: React.ReactNode;
}) => {
  return (
    <ChakraProvider
      colorModeManager={{
        type: "cookie",
        ssr: true,
        get: (init) => {
          return colorMode ?? init;
        },
        set: (value) => {
          setCookie("chakra-ui-color-mode", value);
        },
      }}
      theme={Theme}
    >
      <ColorModeScript
        initialColorMode={Theme.initialColorMode}
        type="cookie"
      />
      {children}
    </ChakraProvider>
  );
};
