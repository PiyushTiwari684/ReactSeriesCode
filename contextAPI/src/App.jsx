import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css"
import { TodoItemsContextProvider } from "./store/todo-items-store";


/* we need to paas two things while using useReducer hook that is reducer function and initialState 
As we know that the reducer is the pure function so it should not be related to external things  
Reducer is the pure function which takes the action object and returns a new state */


function App() {
  // const [todoItems, setTodoItems] = useState([]);


  // const defaultTodoItems = [{ name: 'Buy Ghee ', dueDate: 'Today' }];

  return (
    <TodoItemsContextProvider >
     <center className="todo-container">
       <AppName />
       <AddTodo />
       <WelcomeMessage ></WelcomeMessage>
       <TodoItems></TodoItems>
     </center>
    </TodoItemsContextProvider>
  );
}

export default App;


// react always works in the async format 