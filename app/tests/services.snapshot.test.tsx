/**
 * @jest-environment jsdom
 */

import Services from "@/services/page";
import { render } from "@testing-library/react";

it("renders homepage unchanged", () => {
  const { container } = render(<Services />);

  expect(container).toMatchSnapshot();
});
