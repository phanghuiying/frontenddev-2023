import { useState, useTransition, } from "react";

const UseTransitionExample = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition(); // isPending: a boolean to know whether it is still loading or not

  const handleClick = () => {
    setCount(count + 1); // urgent update

    startTransition(() => {
      // no transition, laggy
      const myArr = Array(20000)
        .fill(1)
        .map((el, i) => count + 20000 - i);
      setItems(myArr);
    });
  };

  const content = (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return content;
};
export default UseTransitionExample;
