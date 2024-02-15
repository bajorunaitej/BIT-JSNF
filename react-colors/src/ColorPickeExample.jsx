import { useState } from "react";

export default function ColorPickerEXample() {
  const [fontSize, setFontSize] = useState(20);

  const h3Style = { fontSize: fontSize + "px" };
  return (
    <div>
      {/* css objektuose */}
      <h3 style={h3Style}>Pasirinkite savo spalvą</h3>

      {/*  _ => {} → taip įvardytas parametras */}
      <button
        className="bg-red-400 p-3"
        onClick={() => setFontSize(fontSize - 1)}
      >
        -
      </button>
      <button
        className="bg-blue-400 p-3"
        onClick={() => setFontSize(fontSize + 1)}
      >
        +
      </button>
    </div>
  );
}
