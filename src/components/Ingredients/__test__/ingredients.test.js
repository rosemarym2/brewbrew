import { render, screen } from "@testing-library/react";
import Ingredients from "../Ingredients";

const mockData = {
  hops: [
    {
      name: "hopdata",
      amount: {
        value: 0,
        unit: "kg",
      },
    },
  ],
  malt: [
    {
      name: "maltdata",
      amount: {
        value: 0,
        unit: "kg",
      },
    },
  ],
  yeast: "yeastdata",
};

test("ingredients", () => {
  render(<Ingredients ingredients={mockData} />);
  const element = screen.getByText(/ingredients/i);
  expect(element).toBeInTheDocument();
});
