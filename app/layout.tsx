import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Wrapper from "./components/wrapper";
import config from "./config";

export const metadata: Metadata = {
  title: config.app.name,
  description: "Quality work at affordable rates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookiesList = cookies();
  const colorMode = cookiesList.get("chakra-ui-color-mode");

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <ThemeProvider colorMode={colorMode?.value}>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
