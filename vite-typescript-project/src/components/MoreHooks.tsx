import { ChangeEvent, useMemo, useRef } from "react";

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const someNumber = 25;

const MoreHooks = () => {
  const fibResult = useMemo<number>(() => fib(someNumber), [someNumber]); // memoize the result

  // if null! , it will force inputRef to be non-null, otherwise it will crash
  const inputRef = useRef<HTMLInputElement>(null);
  console.log("inputRef.current.value : ", inputRef?.current?.value)

  // whenever you type something in the textbox it is a changeevent
  const handleInputChange = (e: ChangeEvent) => {
    console.log(inputRef?.current?.value);
  };

  return (
    <>
      <h3>{fibResult}</h3>
      <input ref={inputRef} type="text" onChange={handleInputChange} />
    </>
  );
};

export default MoreHooks;
