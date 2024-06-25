/**
 * @jest-environment jsdom
 */

import About from "@/about/page";
import { render } from "@testing-library/react";

it("renders homepage unchanged", () => {
  const { container } = render(<About />);

  expect(container).toMatchSnapshot();
});
