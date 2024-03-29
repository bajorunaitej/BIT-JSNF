// Sukurti komponentą su dviem range tipo įvedimais https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range vienu color įvedimu https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color ir mygtukais sukurti ir išsaugoti. Paspaudus mygtuką sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei juodu fonu. Keičiant range ir color įvedimus keičiasi ir kvadrato išvaizda. Kvadrato išvaizdą nustato įvedimai: range tipo įvedimai nuo 10 iki 200 ir nustato plotį ir aukštį pikseliais, color - fono spalvą. Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma ir į nustatymus nebereguoja. Vėl paspaudus mygtuką sukurti- atsiranda naujas reguliuojamas kvadratas.

export default function Form5() {
  return (
    <div>
      <div>
        <input type="range" name="height" min={10} max={200} />
        <label htmlFor="height">Height</label>
        <br />
        <input type="range" name="width" min={10} max={200} />
        <label htmlFor="width">Height</label>
        <br />
        <input type="color" name="color" value="#000" />
        <label htmlfor="color">Color</label>
        <br />
        <button>Create</button>
        <br />
        <button>Save</button>
      </div>
    </div>
  );
}
