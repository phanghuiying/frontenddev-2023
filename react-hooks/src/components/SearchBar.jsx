import { useDeferredValue, useState, useTransition, useEffect } from "react";

// counting 1 to 20K inside the array
const bigArray = [...Array(30000).keys()];

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(bigArray);
  const [isPending, startTransition] = useTransition();
  const deferredInput = useDeferredValue(inputValue);

  const handleInput = (e) => {
    setInputValue(e.target.value); // setting the input textfield (controlled form)
  };

  useEffect(() => {
    // search the bigArray only when deferredInput changes
    // want the UI to be updated first, BEFORE massive filtering is done
    startTransition(() => {
      console.log(
        "🚀 ~ file: SearchBar.jsx:26 ~ SearchBar ~ deferredInput",
        deferredInput
      );
      const filtered = bigArray.filter((item) =>
        item.toString().includes(deferredInput)
      );
      setList(filtered);
    });
  }, [deferredInput]);

  const content = (
    // change it to a little bit transparent when isPending
    <section style={isPending ? { opacity: 0.3 } : null}>
      <p>Searching for: {deferredInput || "All"}</p>
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleInput} />
      {content}
    </div>
  );
};

export default SearchBar;
