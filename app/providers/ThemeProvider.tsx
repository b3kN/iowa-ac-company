"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  useColorMode,
} from "@chakra-ui/react";
import { setCookie } from "cookies-next";
import React from "react";

const Theme = extendTheme({
  initialColorMode: "system",
  useSystemColorMode: true,
});

export const ThemeProvider = ({
  colorMode,
  children,
}: {
  colorMode?: any;
  children: React.ReactNode;
}) => {
  return (
    <CacheProvider>
      <ChakraProvider
        colorModeManager={{
          type: "cookie",
          ssr: true,
          get: (init) => colorMode ?? init,
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
    </CacheProvider>
  );
};