import { render, screen } from "@testing-library/react";
import App from "./App";
// import {random} from "./utils/random"
import fetch from 'jest-fetch-mock'

describe("async call to render Home component", () => {
  test("happy, with data - testing the async call", async () => {
    fetch.mockResponseOnce(JSON.stringify([{ test: "data" }]));
    render(<App />)
    const element = await screen.findByTestId('homeComponent')
    expect(element).toBeInTheDocument()
  })
  test("sad, no data - testing the async call",  async () => {
    fetch.mockResponseOnce(JSON.stringify({}))
    render(<App />)
    const element = await screen.getByText(/loading.../i)
    expect(element).toBeInTheDocument()
  })
})
describe("app component", () => {
  test("renders text brew brew", () => {
    render(<App />);
    const headElement = screen.getByText(/brew brew/i);
    expect(headElement).toBeInTheDocument();
  });
  test("navBar in document", () => {
    render(<App />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

});


