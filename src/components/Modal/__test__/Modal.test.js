import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../Modal";

const mockData = {
        children: [<h3 />, <p />],
        show: true,
        tips: true,
        setOppositeModal: () => {},
        setShow: () => {}
}

test("modal test", () => {
    render(<Modal 
        children={mockData.children}
        show={mockData.show}
        tips={mockData.tips}
        setOppositeModal={mockData.setOppositeModal}
        setShow={mockData.setShow}
        />)
    const element = screen.getByRole("heading")
    expect(element).toBeInTheDocument()
})
test("modal sad test", () => {
    render(<Modal children="" />)
    const element = screen.getByText(/loading.../i)
    expect(element).toBeInTheDocument()
})
test("modal tips truthy - render tips", () => {
    render(<Modal children={mockData.children} tips={true} />)
    const element = screen.getByText(/see tips/i)
    expect(element).toBeInTheDocument()
})
test("modal tips falsey - render pairing", () => {
    render(<Modal children={mockData.children} tips={false} />)
    const element = screen.getByText(/see pairing/i)
    expect(element).toBeInTheDocument()
})
test("show truthy should render close option", () => {
    render(<Modal children={mockData.children} show={true} />)
    const element = screen.getByText(/close/i)
    expect(element).toBeInTheDocument()
})
test("show truthy should render close option", () => {
    render(<Modal children={mockData.children} show={false} tips={true}/>)
    const element = screen.getByText(/see tips/i)
    expect(element).toBeInTheDocument()
})
test("show truthy should render close option", () => {
    render(<Modal 
        children={mockData.children}
        setOppositeModal={mockData.setOppositeModal}
        setShow={mockData.setShow}
        />)
    const element = screen.getByTestId("modalContainer")
    fireEvent.click(element)
    const tipsElement = screen.getByText(/see pairing/i)
    expect(tipsElement).toBeInTheDocument()
})