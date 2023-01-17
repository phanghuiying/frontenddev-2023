import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import CounterWithCallbacks from "./components/CounterWithCallbacks";
import List from "./components/List";
import { useState } from "react";
import MoreHooks from "./components/MoreHooks";
import CounterUseReducer from "./components/CounterUseReducer";

import { CounterProvider, initState } from "./context/CounterContext";
import CounterWithContext from "./components/CounterWithContext";

function App() {
  const [count, setCount] = useState<number>(100);

  const increment = (): void => {
    setCount((prev: number): number => prev + 1);
  };

  const decrement = (): void => {
    setCount((prev: number): number => prev - 1);
  };

  return (
    <>
      <Heading title={"Happy New Year!"} />
      <Section>Lorem ipsum dolor.........</Section>
      <Counter />
      <CounterWithCallbacks increment={increment} decrement={decrement}>
        Alternate count value is {count}
        <MoreHooks />
      </CounterWithCallbacks>
      <List
        items={["Bird", "Cat", "Dog"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
      <CounterUseReducer>
        {(num: number) => <>Current count with useReducer: {num}</>}
      </CounterUseReducer>
      <CounterProvider
        count={initState.count}
        message={initState.message}
      >
        <CounterWithContext>
          {(num: number) => <>Current Count with useContext: {num}</>}
        </CounterWithContext>
      </CounterProvider>
    </>
  );
}

export default App;
