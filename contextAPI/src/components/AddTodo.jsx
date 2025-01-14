import { useState,useContext, useRef} from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState(); 
  // const todoNameElement = useRef();
  // const dueDateElement = useRef();
  // The state of the every component will be differrent, for ex if we have used a componennt two time then also there states will be different  

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    // noOfClicks.current += 1;
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    // console.log(`noOfClicks are: ${noOfClicks.current}`); 
  };

  const handleAddButtonClicked = (ev) => {
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            // ref={todoNameElement}
            value={todoName}
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input type="date" 
          value={dueDate} 
          // ref={dueDateElement}
          onChange={handleDateChange}
         />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <BiSolidCartAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

// import { useRef } from "react";
// import { BiSolidCartAdd } from "react-icons/bi";

// function AddTodo({onNewItem}) {
//   const todoNameElement = useRef();
//   const dueDateElement = useRef();

//   const handleAddButtonClicked = (ev) => {
//     ev.preventDefault();
//     const todoName = todoNameElement.current.value;
//     const dueDate = dueDateElement.current.value;
//     console.log(`${todoName} due on: ${dueDate}`);
//     todoNameElement.current.value ="";
//     dueDateElement.current.value = "";

//     onNewItem(todoName, dueDate);

//   }


//   return (
//     <div className="container text-center">
//       <div className="row kg-row">
//         <div className="col-6">
//           <input
//             type="text"
//             placeholder="Enter Todo Here"
//             ref={todoNameElement}
//           />
//         </div>

//         <div className="col-4">
//           <input type="date" ref={dueDateElement} />
//         </div>
//         <div className="col-2">
//           <button
//             type="button"
//             className="btn btn-success kg-button"
//             onClick={handleAddButtonClicked}
//           >
//             <BiSolidCartAdd />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default AddTodo;


