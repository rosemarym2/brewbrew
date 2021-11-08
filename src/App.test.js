import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app component", () => {
  test("renders learn react link", () => {
    render(<App />);
    const headElement = screen.getByText(/brew brew/i);
    expect(headElement).toBeInTheDocument();
  });
  test("navBar in document", () => {
    render(<App />)
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument() 
  })
});
