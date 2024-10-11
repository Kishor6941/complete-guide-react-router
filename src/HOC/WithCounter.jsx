import { useState } from "react";


const HOC = (OrignalCompoent) => {

  let NewComponent = () => {
    const [counter, setCounter] = useState(0);

    let incrementCounter = () => {
      setCounter((prev) => prev + 1);
    };
    return (
      <OrignalCompoent counter={counter} incrementCounter={incrementCounter} />
    );
  };

  return NewComponent;
};

export default HOC;
