import {
  ChangeEvent,
  ReactElement,
  ReactNode,
  createContext,
  useReducer,
  useCallback,
} from "react";

type StateType = {
  count: number;
  message: string;
};

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

export const initState = {
  count: 200,
  message: "",
};

// define action type with enum
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, message: action.payload ?? "" };
    default:
      throw new Error();
  }
};

type useCounterContextType = {
  state: StateType;
  increment: () => void;
  decrement: () => void;
  handlePayload: (e: ChangeEvent<HTMLInputElement>) => void;
};

// custom hook, that will call useReducer for us and return: state, dispatch increment, dispatch decrement, dispatch handlePayload
const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  }, []);

  const decrement = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  }, []);

  const handlePayload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  }, []);

  return { state, increment, decrement, handlePayload };
};

// this is not a TYPE, it is an init OBJECT for counter CONTEXT
// it is an initial OBJECT
const initContextState: useCounterContextType = {
  state: initState,
  increment: () => {}, // just some placeholder empty function matching the signature of the type
  decrement: () => {},
  handlePayload: (e: ChangeEvent<HTMLInputElement>) => {},
};

// create the counter context using the initialised context state above

export const CounterContext =
  createContext<useCounterContextType>(initContextState);

// for each context created, we need a context provider
type ChildrenType = {
  children: ReactNode | undefined;
};

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
