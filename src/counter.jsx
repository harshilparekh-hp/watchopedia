import React from "react";
import { useState } from "react";

// function rendering(){
//   console.log("rendering from function");
//   return 7;
// }

const Counter = () => {
  const [stateCounter, setStateCounter] = useState(() => {
    return { counter: 5 };
  });

  const [stateTitle, setStateTitle] = useState(() => {
    return { title: "Fun" };
  });

  // const [counter, setStateCounter] = useState(rendering()); - NOT AN IDEAL WAY TO USE HOOK
  // returns an array with two separate values. 1. state value, 2. function to update state

  function incrementCounter() {
    setStateCounter((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter + 1,
      };
    });
  }

  function decrementCounter() {
    setStateCounter((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter - 1,
      };
    });
  }

  return (
    <div className="col-12 col-md-12 offset-md-5 border text-black">
      <span className="h2 pt-4 m-2 text-black-50">
        {stateTitle.title} Counter
      </span>
      <button className="btn btn-success m-1" onClick={incrementCounter}>
        +1
      </button>
      <button className="btn btn-danger m-1" onClick={decrementCounter}>
        -1
      </button>{" "}
      <br />
      <span className="h4">
        Counter: &nbsp;
        <span className="text-success">{stateCounter.counter} </span>
      </span>
    </div>
  );
};

export default Counter;
