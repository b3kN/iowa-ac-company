/**
 * @jest-environment jsdom
 */

import Home from "@/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders home heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
