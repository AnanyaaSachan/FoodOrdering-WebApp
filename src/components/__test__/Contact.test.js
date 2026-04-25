import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact us page test cases", () => {
  test("Should load contact us component", ()=>{
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

});

test(("Should load button inside contact component"),()=>{
    render(<Contact/>);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});

test(("Should load inputName inside contact component"),()=>{
    render(<Contact/>);
    const inputName = screen.getByPlaceholderText("message")
    expect(inputName).toBeInTheDocument();
});

test(("Should load both the inputBoxes inside contact component"),()=>{
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2)
});  
})
