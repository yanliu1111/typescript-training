import { Children, ReactNode } from "react";
type CountProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};
const Counter = ({ setCount, children }: CountProps) => {
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount((prev: number) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
};

export default Counter;
