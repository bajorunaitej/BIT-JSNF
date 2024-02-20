// Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo laukeliu. Įvedamas tekstas turi būti atvaizduojamas atskirai komponento apačioje. Select pasirinkimai sudaryti iš 5 skirtingų spalvų, 5 skirtingų fontų dydžių ir 5 skirtingų fontų (Arial, Times new Roman ar panašiai) Select pasirinkimų nustatymai turi keisti atvaizduojamo teksto išvaizdą

import { useState } from "react";

export default function Form4() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [fontSize, setFontSize] = useState("10px");
  const [font, setFont] = useState("Times New Roman");

  const colors = ["Red", "Black", "Purple", "Yellow", "Blue", "Orange", "Pink"];
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {colors.map((color, index) => (
          <option key={index}>{color}</option>
        ))}
        {/* <option>black</option>
        <option>red</option>
        <option>green</option>
        <option>blue</option>
        <option>orange</option> */}
      </select>
      <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
        <option>10px</option>
        <option>14px</option>
        <option>18px</option>
        <option>22px</option>
        <option>28px</option>
      </select>
      <select value={font} onChange={(e) => setFont(e.target.value)}>
        <option>Times New Roman</option>
        <option>Arial</option>
        <option>Verdana</option>
        <option>Helvetica</option>
        <option>Georgia</option>
      </select>
      <p
        style={{
          color: color,
          fontSize: fontSize,
          fontFamily: font,
        }}
      >
        {text}
      </p>
    </div>
  );
}
