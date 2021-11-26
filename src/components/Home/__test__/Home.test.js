import { render, screen } from "@testing-library/react";
import Home from "../Home"

const mockData = {
name: "testname",
id: "isTest",
description: "testDescription"
}

test("renders loading", ()=>{
    render(<Home />)
    const element = screen.getByText(/loading.../i)
    expect(element).toBeInTheDocument()
}); 

test("renders text brew brew", ()=>{
    render(<Home data ={mockData}/>)
    const element = screen.getByRole("button")
    expect(element).toBeInTheDocument()
}); 