import { useState } from "react";

function Section() {
  const [countOfClicks, setClicks] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [decrement, setDecrement] = useState(1);
  const [value, setValue] = useState("reiksme");

  // let countOfClicks = 0;

  //   function increaseValue() {
  //     setClicks(countOfClicks + 1);
  //   }

  //   function decreaseValue() {
  //     setClicks(countOfClicks - 1);
  //   }

  //   function handleClick(value) {
  //     setClicks(countOfClicks + value);
  //   }

  return (
    <section>
      <p>Count of clicks: {countOfClicks} </p>
      <i>Increment count: {increment}</i> <br />
      <i>Decrement count: {decrement}</i>
      <div>
        <button
          onClick={() => {
            setClicks(countOfClicks + increment);
          }}
        >
          Increase value
        </button>
        <button
          onClick={() => {
            setClicks(countOfClicks - decrement);
          }}
        >
          Decrease value
        </button>
        <button
          onClick={() => {
            setIncrement(increment + 1);
          }}
        >
          Increase increment
        </button>
        <button
          onClick={() => {
            setDecrement(decrement - 1);
          }}
        >
          Increase decrement
        </button>
      </div>
      <p>{value}</p>
      <button
        onClick={() => {
          setValue((prevValue) => {
            console.log(prevValue);
            return prevValue + "a";
          });
        }}
      >
        Click me
      </button>
    </section>
  );
}

export default Section;
