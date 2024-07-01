/**
 * @jest-environment jsdom
 */

import Contact from "@/contact/page";
import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";

it("renders homepage unchanged", () => {
  const { container } = render(
    <ChakraProvider>
      <Contact />
    </ChakraProvider>,
  );

  expect(container).toMatchSnapshot();
});
