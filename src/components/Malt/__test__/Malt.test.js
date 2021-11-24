import { render, screen } from "@testing-library/react";
import Malt from "../Malt";

const mockData = 
    {
      name: "maltdata",
      amount: {
        value: 0,
        unit: "kg",
      },
    }

test("ingredients", () => {
    render(<Malt malt={mockData}/>);
    const element = screen.getByText(/maltdata/i);
    expect(element).toBeInTheDocument();
  });

test("ingredients no data", () => {
    render(<Malt malt=""/>);
    const element = screen.getByText(/loading.../i);
    expect(element).toBeInTheDocument();
})