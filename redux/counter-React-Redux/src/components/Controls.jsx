// import { useDispatch } from "react-redux";
// const Controls = () => {

//   const dispatch = useDispatch();

//   const handleIncreament = () =>{
//        dispatch({type: "INCREMENT"});
//   }

//   const handleDecreament = () =>{
//         dispatch({ type: "DECREMENT" });
//   }
//    return (
//      <>
//        <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
//          <button
//            type="button"
//            className="btn btn-primary"
//            onClick={handleIncreament}
//          >
//            +1
//          </button>
//          <button
//            type="button"
//            className="btn btn-success"
//            onClick={handleDecreament}
//          >
//            -1
//          </button>
//        </div>
//        <div className="d-grid gap-22 d-sm-flex justify-content-sm-center">
//          <input type="text" placeholder="Enter Number"  className="number-input"/>
//          <button
//            type="button"
//            className="btn btn-info"
//            onClick={handleDecreament}
//          >
//            Add
//          </button>
//          <button
//            type="button"
//            className="btn btn-danger"
//            onClick={handleDecreament}
//          >
//            Substract
//          </button>
//        </div>
//      </>
//    );
// }

// export default Controls;

import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;