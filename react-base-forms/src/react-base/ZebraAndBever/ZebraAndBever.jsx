// Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.

function Text({ props }) {
  let spalva = "black";
  if (props === 1) spalva = "blue";
  else if (props === 2) spalva = "red";

  return <h1 style={{ color: spalva }}>Zebrai ir Bebrai</h1>;
}

export default function ZebraAndBever() {
  return (
    <div>
      <Text props={1} />
    </div>
  );
}
