import { ReactNode } from "react";
import { useCounterHook } from "./context/CounterContext";
import { useCounterTextHook } from "./context/CounterContext";
type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const { count, increment, decrement } = useCounterHook();
  const { text, handleTextInput } = useCounterTextHook();
  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{text}</h2>
    </>
  );
};

export default Counter;
