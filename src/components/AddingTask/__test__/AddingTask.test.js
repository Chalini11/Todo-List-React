
import { screen,render, fireEvent } from "@testing-library/react";
import AddingTask from "../AddingTask";

const mocksetTodos = jest.fn();

describe("Text Field",()=>{

test("should display textfield for adding tasks",() =>{


    render(<AddingTask todos={[]} setTodos={mocksetTodos}/>);
    const placeholder = screen.getByPlaceholderText('Enter task here');
    expect(placeholder).toBeVisible();
    
})
test("should display new content on typing into the text field",()=>{

    render(<AddingTask todos={[]} setTodos={mocksetTodos}/>);
    const textbox = screen.getByPlaceholderText('Enter task here');
    fireEvent.click(textbox);
    fireEvent.change(textbox,{target:{value:"Task 1"}})
    expect(textbox.value).toBe("Task 1")

})
})

describe("Add Button",()=>{
    test("should display the button for adding tasks",() =>{
        render(<AddingTask todos={[]} setTodos={mocksetTodos}/>);
        const addButton = screen.getByRole("button",{name:"Add"});
        expect(addButton).toBeVisible();


    })


})