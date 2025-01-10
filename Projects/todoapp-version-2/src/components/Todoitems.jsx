import TodoItem from "./TodoItem";
const TodoItems = ({ todoitems }) => {
  return (
    <>
      <div className="items-container">
        <TodoItem todoName={"Buy Milk"} todoDate={"4/10/2023"} />
        <TodoItem todoName={"Go to College"} todoDate={"4/10/2023"} />
      </div>
    </>
  );
};
export default TodoItems;