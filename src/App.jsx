import { useState } from "react";
import Counter from "./counter";
import Gallery from "./gallery";

export default function App() {
  //react hooks
  const [counter, setCounter] = useState(1);
  const [randomString, setRandomString] = useState("");

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function createRandomString() {
    setRandomString(Math.random());
  }
 
  return (
    <div>
      <Counter randomString={randomString} counter={counter} increment={increment} decrement={decrement} />

      <button onClick={createRandomString}>Click to generate</button>

      <Gallery/>
    </div>
  );
}
