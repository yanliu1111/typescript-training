import Counter from "./Counter";
import { CounterProvider } from "./context/CounterContext";
import { initState } from "./context/CounterContext";
function App() {
  return (
    <>
      <CounterProvider count="initState.conut" text="initState.text">
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  );
}
export default App;

// Note! the Provider only expects one child. Wrap the children in a fragment <> </> OR change the ChildrenType in context to: ReactElement | ReactElement[] | undefined
