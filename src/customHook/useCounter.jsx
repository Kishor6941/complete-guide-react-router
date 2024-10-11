import React,{useState} from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  let incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return [counter , incrementCounter];
};

export default useCounter;
