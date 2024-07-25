import { useState } from "react";
function Card() {
  const [count, setcount] = useState(0);
  function handle() {
    setcount(count + 1);
  }
  return (
    <>
      <button onClick={handle}>counter {count}</button>
    </>
  );
}

export default Card;
