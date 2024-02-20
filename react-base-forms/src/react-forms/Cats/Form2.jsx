import { useState } from "react";

export default function Form2() {
  const [cats, setCats] = useState(getCatsFromLocalStorage);
  const [newCatName, setNewCatName] = useState("");
  const [weight, setWeight] = useState("");

  function getCatsFromLocalStorage() {
    const cats = JSON.parse(localStorage.getItem("cats") || "[]");
    return cats;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Vardas"
        value={newCatName}
        onChange={(e) => {
          setNewCatName(e.target.value);
        }}
      />
      <input
        className="weightInput"
        type="number"
        placeholder="Svoris (kg)"
        value={weight}
        min={0}
        max={40}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const newArray = [
            ...cats,
            {
              name: newCatName,
              weight: weight,
            },
          ];
          setCats(newArray); //cat, pakeitimas yra tiks užsakytas
          localStorage.setItem("cats", JSON.stringify(newArray));
          setNewCatName("");
          setWeight("");
        }}
      >
        Pridėti katiną
      </button>
      {/* <p>{catNames}</p> */}
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>
            {cat.name} {cat.weight}kg
          </li>
        ))}
      </ul>
    </div>
  );
}
