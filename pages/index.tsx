import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h1>HOME</h1>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
}
