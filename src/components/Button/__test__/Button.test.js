import { fireEvent, render, screen } from "@testing-library/react";
import Button from '../Button'

const mockedGetter = jest.fn()

test("button is rendered", () => {
    render(<Button getter={mockedGetter} />)
    const element = screen.getByText(/get another brew/i)
    fireEvent.click(element)
    expect(mockedGetter).toBeCalled()
  })
  test("button is called", () => {
    render(<Button getter={mockedGetter} />)
    const element = screen.getByText(/get another brew/i)
    expect(element).toBeInTheDocument()
  })
