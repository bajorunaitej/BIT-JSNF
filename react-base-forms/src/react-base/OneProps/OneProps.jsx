// Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

function Text({ text }) {
  return <h1>{text}</h1>;
}

export default function OneProps() {
  return (
    <div>
      <Text text={"Props are the information that you pass to a JSX tag."} />
    </div>
  );
}
