import { useState, useCallback } from "react";
import Fibonacci from "./components/Fibonacci";
import UseReducerExample from "./components/UseReducerExample";

function App() {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  // does not enclose a state. Pure function.
  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  return (
    <main className="App">
      <Fibonacci userNumber={userNumber} setUserNumber={setUserNumber} />
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
      <UseReducerExample />
    </main>
  );
}

export default App;
