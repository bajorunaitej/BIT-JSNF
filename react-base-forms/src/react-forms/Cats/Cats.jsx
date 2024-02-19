// Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti. Rodyti visų įvestų katinukų sąrašą. Puslapiui persikrovus, katinukų sąrašas turi išlikti nepakitęs. Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio. Skaičiuoti ir atvaizduoti bendrą katinukų svorį.

import { useState, useEffect } from "react";

export default function Cats() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [cat, setCat] = useState([]);

  function save() {
    const newCat = { name, weight };
    setCat((prevCats) => [...prevCats, newCat]);
    const currentId = localStorage.getItem("currentId") || "1";
    const existingCatJSON = localStorage.getItem("cats") || "[]";
    const existingCat = JSON.parse(existingCatJSON);
    // const newCat = {
    //   id: currentId,
    //   name: cat.name,
    //   weight: cat.weight,
    // };
    existingCat.push(newCat);
    localStorage.setItem("cats", JSON.stringify(existingCat));
    localStorage.setItem("currentId", `${+currentId + 1}`);
    // Cats(newCat);
    setName("");
    setWeight(0);
  }

  useEffect(() => {
    const savedCats = JSON.parse(localStorage.getItem("cats")) || [];
    setCat(savedCats);
  }, []);
  //   const Submit = () => {
  //     setCat(...cat, { name, weight });
  //   };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Cat's name"
          value={name}
          onChange={handleNameChange}
          className="border border-black w-fit p-1 mr-1"
        />
        <input
          type="number"
          placeholder="Cat's weight"
          value={weight}
          onChange={handleWeightChange}
          className="border border-black w-fit p-1 "
        />
      </div>
      <button onClick={save}>Submit</button>
      <div>
        <ol>
          {cat
            .slice()
            .sort((a, b) => a.weight - b.weight)
            .map((cat, index) => (
              <li key={index}>
                {index + 1}. Cat: {cat.name} - {cat.weight} kg
              </li>
            ))}
        </ol>
        <strong>Average weight: </strong>
      </div>
    </div>
  );
}
