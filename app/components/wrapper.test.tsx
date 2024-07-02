/**
 * @jest-environment jsdom
 */

import config from "@/config";
import { ChakraProvider } from "@chakra-ui/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Wrapper from "./wrapper";

const { captchaKey } = config.app;

describe("Home", () => {
  it("renders Wrapper", () => {
    render(
      <GoogleReCaptchaProvider reCaptchaKey={captchaKey}>
        <ChakraProvider>
          <Wrapper>Render Wrapper</Wrapper>
        </ChakraProvider>
      </GoogleReCaptchaProvider>,
    );

    const darkModeToggle = screen.getByTestId("themeToggle");
    expect(darkModeToggle).toBeVisible();
    expect(screen.getByTestId("moon")).toBeVisible();
  });

  it("renders Wrapper and toggles dark mode", () => {
    render(
      <GoogleReCaptchaProvider reCaptchaKey={captchaKey}>
        <ChakraProvider>
          <Wrapper>Test Dark Mode</Wrapper>
        </ChakraProvider>
      </GoogleReCaptchaProvider>,
    );

    const darkModeToggle = screen.getByTestId("themeToggle");
    expect(darkModeToggle).toBeVisible();
    expect(screen.getByTestId("moon")).toBeVisible();
    fireEvent.click(darkModeToggle);

    expect(screen.getByTestId("sun")).toBeVisible();
    fireEvent.click(darkModeToggle);

    expect(screen.getByTestId("moon")).toBeVisible();
  });

  it("renders Wrapper in mobile perspective", async () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 400,
    });

    Object.defineProperty(window, "innerHeight", {
      writable: true,
      value: 700,
    });

    render(
      <GoogleReCaptchaProvider reCaptchaKey={captchaKey}>
        <ChakraProvider>
          <Wrapper>Test mobile navigation</Wrapper>
        </ChakraProvider>
      </GoogleReCaptchaProvider>,
    );

    expect(window.innerWidth).toBe(400);
    expect(window.innerHeight).toBe(700);

    const hamburgerButton = screen.getByTestId("mobileToggle");
    expect(hamburgerButton).toBeVisible();
    fireEvent.click(hamburgerButton);

    const homeButton = screen.getByTestId("mobileNav");
    expect(homeButton).toBeVisible();
  });
});
