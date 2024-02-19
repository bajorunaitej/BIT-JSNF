import { useState } from "react";
import { rand } from "../utils/rand";

function Square({ id }) {
  return <div className="box">{id}</div>;
}

export default function Form1() {
  const [boxArray, setBoxArray] = useState([]);
  const [numberOfBoxes, setNumberOfBoxes] = useState(0);
  //   function displayBox(box, index) {
  //     return <div key={index}>{box}</div>;
  //   }
  return (
    <div>
      <input
        type="number"
        min={0}
        value={numberOfBoxes}
        onChange={(e) => {
          setNumberOfBoxes(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const newBoxes = [];
          for (let i = 0; i < numberOfBoxes; i++) {
            newBoxes.push(<Square id={rand(100, 200)} />);
          }
          setBoxArray([...boxArray, ...newBoxes]);
          setNumberOfBoxes(0);
        }}
      >
        Create boxes
      </button>
      <div className="box-container">
        {boxArray.map((box, index) => (
          <div key={index}>{box}</div>
        ))}
      </div>
    </div>
  );
}
