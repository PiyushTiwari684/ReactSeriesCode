import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
    
      todoItems: [],
      addNewItem:() =>{},
      deleteItem: () => {},
      
});

const todoItemReducer = (currentTodoItem, action) => {
  let newTodoItems = currentTodoItem;

  if(action.type === "NEW_ITEM"){
     newTodoItems = [
      ...currentTodoItem,
      {name:action.payload.itemName,dueDate:action.payload.itemDueDate},
    ];
  }else if(action.type === "DELETE_ITEM"){
     newTodoItems = currentTodoItem.filter(
       (item) => item.name !== action.payload.itemName
     );
     
  }

  return newTodoItems;
};

const TodoItemsContextProvider= ({children}) =>{
        const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, []);

        const addNewItem = (itemName, itemDueDate) => {
          const newItemAction = {
            type: "NEW_ITEM",
            payload: {
              itemName,
              itemDueDate,
            },
          };

          dispatchTodoItem(newItemAction);
        };

        const deleteItem = (todoItemName) => {
          const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
              itemName: todoItemName,
            },
          };

          dispatchTodoItem(deleteItemAction);
        };

        return (
          <TodoItemsContext.Provider
            value={{
              todoItems: todoItems,
              addNewItem: addNewItem,
              deleteItem: deleteItem,
            }}
          >
            {children}
          </TodoItemsContext.Provider>
        );
}

export default TodoItemsContextProvider;