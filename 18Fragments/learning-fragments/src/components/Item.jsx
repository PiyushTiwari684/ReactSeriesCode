import styles from "./item.module.css";
const Item = ({foodItems,bought, handleBuyButton}) =>{

  const handleBuyButtononcClicked = (event) =>{
    console.log(event);
    console.log(`${foodItems} being bought`)
  }
  return (
    <li  className= {`${styles["kg-item"]} list-group-item ${bought && "active"}`} >
      {/* {props.foodItems} */}
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}>Buy</button>

    </li>
  );
};

export default Item;