import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import "./App.css";
import Container from './components/Container';
import FoodInput from './components/FoodInput';
// import foodItems from './components/foodItem';
function App(){
  let [foodItems,setFoodItems] = useState([
    "Dahi",
    "Daliya",
    "Protien Powder",
  ]);

  const onKeyDown = (ev) => {
    if(ev.key === 'Enter'){
      let newFoodItem = ev.target.value;
      let newItems = [...foodItems,newFoodItem];
      setFoodItems(newItems);
    }
   
  }; 
  return (
    <>
      <Container>
        <h1>Healthy foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}
export default App;