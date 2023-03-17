import {
  ChangeEvent,
  createContext,
  ReactElement,
  useReducer,
  useCallback,
  useContext,
} from "react";
//first step: instead of typeof initState, we can use the type StateType
type StateType = { count: number; text: string };

export const initState: StateType = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}
//what is enum? https://www.typescriptlang.org/docs/handbook/enums.html

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};
const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};
// build a custom hook to use the context
const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );

  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );

  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  }, []);

  return { state, increment, decrement, handleTextInput };
};
//super convient if you hover the useCounterContext, you can see the return types
type UseCounterContextType = ReturnType<typeof useCounterContext>;
// set initial state value
const initContextState: UseCounterContextType = {
  state: initState, //set initial state
  increment: () => {}, //set initial function
  decrement: () => {}, //set initial function
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {}, //set initial function
};
export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};
//... rest parameter, has to be the last parameter, children has to be the first parameter
export const CounterProvider = ({
  children,
  ...initState
}: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterHookTypeType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterHook = (): UseCounterHookTypeType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};

type UseCounterTextHookType = {
  text: string;
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterTextHook = (): UseCounterTextHookType => {
  const {
    state: { text },
    handleTextInput,
  } = useContext(CounterContext);
  return { text, handleTextInput };
};
