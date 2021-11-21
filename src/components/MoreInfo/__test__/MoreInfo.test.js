import { render, screen } from "@testing-library/react";
import MoreInfo from '../MoreInfo'

const mockPair = [
            "pairtest1",
            "paritest2"
        ]
const mockImg_url = "imgurl"

test("happy - heading is rendered", () => {
    render(<MoreInfo pairing={mockPair}/>)
    const element = screen.getByText(/More Info/i)
    expect(element).toBeInTheDocument()
  })
test("sad - loading is rendered", () => {
    render(<MoreInfo pairing=""/>)
    const element = screen.getByText(/loading.../i)
    expect(element).toBeInTheDocument()
})
test("image is rendered", () => {
    render(<MoreInfo pairing={mockPair} img_url={mockImg_url}/>)
    const element = screen.getByRole("img")
    expect(element).toBeInTheDocument()
})
test("no img_url, no image to be rendered", () => {
    render(<MoreInfo pairing={mockPair} img_url=""/>)
    const element = screen.getByText(/no image/i)
    expect(element).toBeInTheDocument()
})