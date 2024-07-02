/**
 * @jest-environment jsdom
 */

import config from "@/config";
import Contact from "@/contact/page";
import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

describe("Contact", () => {
  it("renders about heading", () => {
    render(
      <GoogleReCaptchaProvider reCaptchaKey={config.app.captchaKey}>
        <ChakraProvider>
          <Contact />
        </ChakraProvider>
      </GoogleReCaptchaProvider>,
    );

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
