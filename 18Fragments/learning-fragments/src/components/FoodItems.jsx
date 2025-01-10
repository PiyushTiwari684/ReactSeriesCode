import Item from "./Item";
import { useState } from "react";
const FoodItems = ({items}) =>{
  // let foodItems = ["Dal","green Vegetables", "Roti", "Salad","Milk"];
  
  let[activeItems,setActiveItems] = useState([]);
  
  let onBuyButton = (item, ev) =>{
     let newItem = [...activeItems, item];
     setActiveItems(newItem);
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
       <Item key ={item} 
       foodItems ={item} 
       bought = {activeItems.includes(item)}
       handleBuyButton={(ev) => onBuyButton(item, ev)}></Item>
      ))}
    </ul> 
  );
};

export default FoodItems;
