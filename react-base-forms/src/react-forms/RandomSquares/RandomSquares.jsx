// Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į laukelį skaičių ir paspaudus mygtuką, atsiranda laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir paspaudus mygtuką, prie jau egzistuojančių kvadratėlių papildomai prisideda naujas laukelyje nurodytas kvadratėlių kiekis. Kiekvieno kvadratėlio viduryje turi būti pavaizduotas rand skaičius 100 - 200

import { useState } from "react";

const MyComponent = () => {
  const [redCount, setRedCount] = useState(0);
  const [blueCount, setBlueCount] = useState(0);
  const [redSquares, setRedSquares] = useState([]);
  const [blueSquares, setBlueSquares] = useState([]);

  const handleRedInputChange = (event) => {
    setRedCount(parseInt(event.target.value) || 0);
  };

  const handleBlueInputChange = (event) => {
    setBlueCount(parseInt(event.target.value) || 0);
  };

  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 100;

  const handleButtonClick = () => {
    const redSquaresArray = Array.from(
      { length: redCount },
      generateRandomNumber
    );
    const blueSquaresArray = Array.from(
      { length: blueCount },
      generateRandomNumber
    );
    setRedSquares(redSquaresArray);
    setBlueSquares(blueSquaresArray);
  };

  return (
    <div>
      <div className="border-solid border-2 border-sky-500 p-2 m-1 w-fit">
        <label htmlFor="redInput">Red Squares:</label>
        <input
          type="number"
          id="redInput"
          value={redCount}
          onChange={handleRedInputChange}
          placeholder="Enter red squares count"
          className="border border-black ml-2 w-[50px] p-1 text-center"
        />
      </div>
      <div className="border-solid border-2 border-sky-500 p-2 m-1 w-fit">
        <label htmlFor="blueInput">Blue Squares:</label>
        <input
          type="number"
          id="blueInput"
          value={blueCount}
          onChange={handleBlueInputChange}
          placeholder="Enter blue squares count"
          className="border border-black ml-2 w-[50px] p-1 text-center"
        />
      </div>
      <button
        onClick={handleButtonClick}
        className="border-solid border-2 border-sky-500 p-2 m-1"
      >
        Generate Squares
      </button>
      <div>
        {redSquares.map((num, index) => (
          <div
            key={`red${index}`}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "red",
              display: "inline-block",
              margin: "5px",
            }}
            className="text-white"
          >
            {num}
          </div>
        ))}
        {blueSquares.map((num, index) => (
          <div
            key={`blue${index}`}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "blue",
              display: "inline-block",
              margin: "5px",
            }}
            className="text-white"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
