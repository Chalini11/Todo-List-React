
import { screen,render } from "@testing-library/react";
import Heading from "../Heading";
test("should display heading",() =>{
    
    render(<Heading/>);
    const header = screen.getByRole("heading", {name:"ToDoList"});
    expect(header).toBeVisible();
    
})