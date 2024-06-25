/**
 * @jest-environment jsdom
 */

import Contact from "@/contact/page";
import { render } from "@testing-library/react";

it("renders homepage unchanged", () => {
  const { container } = render(<Contact />);

  expect(container).toMatchSnapshot();
});
