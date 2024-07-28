import { useState } from "react";
function Card() {
  const [count, setcount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  function handle() {
    setcount(count + 1);
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  let x1 = (
    <input
      type="text"
      name="aman"
      id=""
      value={inputValue}
      onChange={handleInputChange}
    />
  );
  return (
    <>
      <div className="aman">
        <p>hello</p>
        {x1}
        <img src="" height="100px" />
        <p>your entered value{inputValue}</p>
        <button onClick={handle}>counter {count}</button>
      </div>
    </>
  );
}

export default Card;
