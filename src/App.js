import logo from './logo.svg';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Todo_page from './pages/todo_page';


function App() {
  return (
    <div className="App">
      <Heading/>
      <Routes>
        <Route path="/" element={<Todo_page/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
