// Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.

function Text({ text1, text2, textColor }) {
  return (
    <div>
      <h1 style={{ color: textColor, fontSize: "2rem" }}>{text1}</h1>
      <h2 style={{ color: textColor, fontSize: "1.5rem" }}>{text2}</h2>
    </div>
  );
}

export default function ThreeProps() {
  return (
    <Text
      text1={
        "Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2."
      }
      text2={
        "Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai."
      }
      textColor={"rgb(156,23,159)"}
    />
  );
}
