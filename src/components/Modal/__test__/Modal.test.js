import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../Modal";

const mockData = {
    children: [<h3/>, <p/>],
    show: true,
    tips: true,
    setOppositeModal: () => {},
    setShow: () => {}
}
test("renders loading...", () => {
    render(<Modal children="" />);
    const element = screen.getByText(/loading.../i);
    expect(element).toBeInTheDocument();
  });

test("renders a header", () => {
    render(<Modal children={mockData.children} show={mockData.show}/>);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
});
test("render the close text", () => {
    render(<Modal children={mockData.children} show={mockData.show}/>);
    const element = screen.getByText(/close/i);
    expect(element).toBeInTheDocument();
});


test("element clicked triggers event", () => {
    render(<Modal 
        children={mockData.children}
        setOppositeModal={mockData.setOppositeModal}
        setShow={mockData.setShow}
    />)
    const element = screen.getByTestId("modalContainer")
    fireEvent.click(element)
    const tipElement = screen.getByText(/see pairing/i)
    expect(tipElement).toBeInTheDocument()
})

//project extra testing

test("element when clicked generates close btn", () => {
    render(<Modal 
        children={mockData.children}
        setOppositeModal={mockData.setOppositeModal}
        setShow={mockData.setShow}
    />)
    const element = screen.getByTestId("closeModal")
    fireEvent.click(element)
    const tipElement = screen.getByText(/close/i)
    expect(tipElement).toBeInTheDocument()
})