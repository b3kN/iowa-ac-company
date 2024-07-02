/**
 * @jest-environment jsdom
 */

import About from "@/about/page";
import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";

it("renders homepage unchanged", () => {
  const { container } = render(
    <ChakraProvider>
      <About />
    </ChakraProvider>,
  );

  expect(container).toMatchSnapshot();
});
