// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import { useState } from "react";
// import TodoItem from "./components/TodoItem";
// import Todoitems from "./components/Todoitems";

// function App() {
//   const initialTodoitems = [
//     { name: "Buy Milk", dueDate: "4/10/2023" },
//     {
//       name: "Go to College",
//       dueDate: "4/10/2023",
//     },
//   ];

//   const [todoitems, setTodoItems] = useState(initialTodoitems);

//   // add todo ki functionality add karni he

//   const handleNewItem = (itemName, itemDueDate) => {
//     console.log(`New Item Added : ${itemName} Date: ${itemDueDate}`);
//     const newTodoItems = [
//       ...todoitems,
//       { name: itemName, dueDate: itemDueDate },
//     ];
//     setTodoItems(newTodoItems);
//   };



//   return (
//     <center className="todo-container">
//       <AppName />
//       <AddTodo onNewItem={handleNewItem} />
//       <Todoitems todoitems={todoitems} />
//     </center>
//   );
//   // // (AddTodo) ap ki responsibility he items ko add karana jab bhi koi item add hoga to mera onNewItemmethod ko call karke uski dono values de dena baki me sambhal luga
// }
// export default App;

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems; 
    });
    
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;


// react always works in the async format 