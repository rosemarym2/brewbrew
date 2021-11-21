import { render, screen } from "@testing-library/react";
import Home from "../Home";
const trueMockData = {
    name:"nameTest"
}
const falseMockData = {
    name: ""
}
test("renders correct prop",  () => {
    render(<Home data={trueMockData}/>)
    const brewNameElement =  screen.getByTestId("data-name")
    expect(brewNameElement).toBeTruthy()
})
test("button is rendered", async () => {
    render(<Home data={trueMockData} />)
    const button = await screen.findByTestId('buttonMain')
    expect(button).toBeInTheDocument()
  })
