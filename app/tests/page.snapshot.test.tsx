/**
 * @jest-environment jsdom
 */

import Home from "@/page";
import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";

it("renders homepage unchanged", () => {
  const { container } = render(
    <ChakraProvider>
      <Home />
    </ChakraProvider>,
  );

  expect(container).toMatchSnapshot();
});
