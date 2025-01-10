import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import Todoitems from "./components/Todoitems";

function App() {
  const todoitems = [
    {names : "Buy Milk",
     dueDate : "4/10/2023",
    },
    {
      name:"Go to College",
      dueDate: "4/10/2023"
    }
  ]

  // const [todoitems,setTodoItems] = useState(initialTodoitems) = {

  // }

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <Todoitems todoitems ={todoitems}/>
     
    </center>
  );
}
export default App;
