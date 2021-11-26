//project extra testing

import { render, screen } from "@testing-library/react";
import Malt from "../Malt";

const mockData = {
    name: "maltName",
    amount: ["value", "unit"]
}
test("renders malt name", () => {
    render(<Malt malt= {mockData} />);
    const element = screen.getByText(/maltName/i);
    expect(element).toBeInTheDocument();
  });

  test("renders malt value", () => {
    render(<Malt malt= {mockData.amount} />);
    const element = screen.getByText(/value/i);
    expect(element).toBeInTheDocument();
  });

  test("renders malt unit", () => {
    render(<Malt malt= {mockData.amount} />);
    const element = screen.getByText(/unit/i);
    expect(element).toBeInTheDocument();
  });