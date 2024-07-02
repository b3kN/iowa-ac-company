/**
 * @jest-environment jsdom
 */

import config from "@/config";
import Contact from "@/contact/page";
import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

it("renders homepage unchanged", () => {
  const { container } = render(
    <GoogleReCaptchaProvider reCaptchaKey={config.app.captchaKey}>
      <ChakraProvider>
        <Contact />
      </ChakraProvider>
    </GoogleReCaptchaProvider>,
  );

  expect(container).toMatchSnapshot();
});
