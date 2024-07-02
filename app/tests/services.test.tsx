/**
 * @jest-environment jsdom
 */

import Services from "@/services/page";
import { render, screen } from "@testing-library/react";

describe("Contact", () => {
  it("renders about heading", () => {
    render(<Services />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
