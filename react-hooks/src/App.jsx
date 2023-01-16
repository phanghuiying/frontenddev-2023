import { useState, useCallback } from "react";
import Fibonacci from "./components/Fibonacci";
import SearchBar from "./components/SearchBar";
import UseTransitionExample from "./components/UseTransitionExample";
import UseReducerExample from "./components/UseReducerExample";
import FormInput from "./components/FormInput";
import Video from "./components/Video";
import PreviousPrice from "./components/PreviousPrice";

function App() {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  // does not enclose a state. Pure function.
  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  return (
    //   <Fibonacci userNumber={userNumber} setUserNumber={setUserNumber} />
    //   <input
    //     type="text"
    //     value={randomInput}
    //     placeholder="Random Input"
    //     onChange={(e) => setRandomInput(e.target.value)}
    //   />
    //   <p>{randomInput}</p>

    //   <UseReducerExample />
    // <UseTransitionExample />
    <main className="App">
      <PreviousPrice />
      
    </main>
  );
}

export default App;
