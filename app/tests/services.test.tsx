/**
 * @jest-environment jsdom
 */

import Contact from "@/contact/page";
import { render, screen } from "@testing-library/react";

describe("Contact", () => {
  it("renders about heading", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
