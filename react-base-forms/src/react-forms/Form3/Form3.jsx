// Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50. Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitę

import { useState } from "react";

export default function Form3() {
  const [first, setFirst] = useState(100);
  const [second, setSecond] = useState(50);
  //   const [number, setNumber] = useState(10);

  return (
    <div>
      <div>
        <span>Pirmas skaičius</span>
        <input
          type="number"
          value={first}
          //   value={Number}
          onChange={(e) => {
            setFirst(e.target.value);
            setSecond(e.target.value / 2);
          }}
          //   onChange={(e) => {
          //     setNumber(e.target.value);
          //   }}
        />
      </div>
      <div>
        <span>Antras skaičius</span>
        <input
          type="number"
          value={second}
          //   value={number / 2}
          onChange={(e) => {
            setSecond(e.target.value);
            setFirst(e.target.value * 2);
          }}
          //   onChange={(e) => {
          //     setNumber(e.target.value / 2);
          //   }}
        />
      </div>
    </div>
  );
}
