//project extra testing

import { render, screen } from "@testing-library/react";
import Hops from "../Hops";

const mockData = {
    name: "hopsName",
    amount: ["value", "unit"]
}
test("renders hops name", () => {
    render(<Hops hops= {mockData.name} />);
    const element = screen.getByText(/hopsName/i);
    expect(element).toBeInTheDocument();
  });

test("renders hops unit", () => {
    render(<Hops hops= {mockData.value} />);
    const element = screen.getByText(/unit/i);
    expect(element).toBeInTheDocument();
  });