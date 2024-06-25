/**
 * @jest-environment jsdom
 */

import About from "@/about/page";
import { render, screen } from "@testing-library/react";

describe("About", () => {
  it("renders about heading", () => {
    render(<About />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
