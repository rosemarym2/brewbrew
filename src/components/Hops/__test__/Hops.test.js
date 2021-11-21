import { render, screen } from "@testing-library/react";
import Hops from "../Hops";
const mockData = {
  name: "hopdata",
  amount: {
    value: 0,
    unit: "kg",
  },
};
test("hops", () => {
  render(<Hops hop={mockData} />);
  const element = screen.getByText(/hopdata/i);
  expect(element).toBeInTheDocument();
});
test("hops", () => {
    render(<Hops hop="" />);
    const element = screen.getByText(/loading.../i);
    expect(element).toBeInTheDocument();
  });
