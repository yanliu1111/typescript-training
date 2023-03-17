import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from "react";
interface User {
  id: number;
  username: string;
}
type fibonacciFunc = (n: number) => number;
const fibonacci: fibonacciFunc = (n) => {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2); //recursive function
};
const myNumber: number = 10; //type annotation, not type inference
// result: 55 = 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  //useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  //we definitly want to say it's an HTML input element becasue that what we are going to reference, but we could use a non-null assertion operator to say that we know it's not null 'null!'
  // but I use other way
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting");
    console.log("Users: ", users);
    return () => console.log("unmounting");
  }, [users]);
  //it would call this use effect into action when the users state changes, run once when the component mounts and run once when the component unmounts
  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 2),
    []
  );

  const result = useMemo<number>(() => fibonacci(myNumber), [myNumber]);
  //void means it doesn't return anything
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Increment</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default App;
