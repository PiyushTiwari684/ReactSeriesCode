import { useState } from 'react';
import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
function App() {

  const [calVal,setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
        setCalVal("");
    }else if(buttonText === '='){
         const result = eval(calVal);
         setCalVal(result);
    }else{

      const newdisplayVal = calVal+buttonText;
      setCalVal(newdisplayVal);
    }
  };

  return(
    <div className={styles.calculator} id ="calculator">
        <Display displayVal = {calVal}></Display>
        <ButtonsContainer onButtonClick= {onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
