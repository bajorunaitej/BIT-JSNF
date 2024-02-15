// Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.

function Text({ text1, text2 }) {
  return (
    <div>
      <h1 style={{ fontSize: "2rem" }}>{text1}</h1>
      <h2 style={{ fontSize: "1.5rem" }}>{text2}</h2>
    </div>
  );
}

export default function H1_H2() {
  return <Text text1={"Labai puiki diena"} text2={"Noriu miego"} />;
}
