// import Cats from "./react-forms/RandomSquares/Cats/Cats";
// import MyComponent from "./react-forms/RandomSquares/RandomSquares";
// import ThreeProps from "./react-base/ThreeProps/ThreeProps";
// import H1_H2 from "./react-base/H1_H2/H1_H2";
// import ZebraAndBever from "./react-base/ZebraAndBever/ZebraAndBever";
// import OneProps from "./react-base/OneProps/OneProps";
// import RabbitColor from "./react-base/RabbitColor/RabbitColor";
// import Base1 from "./react-base/RabbitColor/Base1";
// import Base2 from "./react-base/OneProps/Base2";
// import Base4 from "./react-base/H1_H2/Base4";
// import Base5 from "./react-base/ThreeProps/Base5";
// import Base3 from "./react-base/ZebraAndBever/Base3";

import Form1 from "./react-forms/RandomSquares/Form1";

function App() {
  return (
    <div>
      {/* <RabbitColor /> */}
      {/* <OneProps /> */}
      {/* <ZebraAndBever /> */}
      {/* <H1_H2 /> */}
      {/* <ThreeProps /> */}
      {/* <MyComponent /> */}
      {/* <Cats /> */}
      {/* <Base2
        atributas1="tekstas"
        atributas2={4}
        atributas3={true}
        atributas4={new Date()}
        atributas5={() => {
          console.log("Anoniminė funckija");
        }}
        atributas6={["vienas", "du", "trys"]}
        atributas7={{ name: "Juste", age: 25 }}
        atributas8={
          class Zmogus {
            constructor(name, surname) {
              this.name = name;
              this.surname = surname;
            }
          }
        }
      /> */}
      {/* <Base3 mode={2} />
      <Base4 text1="pirmas" text2="antras" />
      <Base5 text1="Pirmas tekstas" text2="antras tekstas" color="pink" /> */}
      <Form1 />
    </div>
  );
}

export default App;
