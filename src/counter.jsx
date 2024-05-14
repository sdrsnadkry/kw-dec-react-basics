import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(4);

  function increment() {
    setNumber(number + 1);
  }

  return (
    <div>
      <h1>Count - {number}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={increment}>Decrement</button>
    </div>
  );
}
