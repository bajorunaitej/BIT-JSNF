// Sukurti klasę ColorPalette, kuri turi:

// Statinius geterius, grąžinsiančius Color Objektą:
// WHITE
// BLACK
// BROWN
// PINK
// RED
// ORANGE
// YELLOW
// GREEN
// CYAN
// BLUE
// PURPLE

// Statinį metodą, kuris sujungia dvi spalvas - gražina Color objektą

class Color{
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    get rgb() {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }

    static combineColors(color1, color2) {
        const combineRed = Math.min(255, color1.red + color2.red);
        const combineGreen = Math.min(255, color1.green + color2.green);
        const combineBlue = Math.min(255, color1.blue + color2.blue);

        return new Color(combineRed, combineGreen, combineBlue);
    }
}

class ColorPalette{
    static get WHITE() {
        return new Color(255, 255, 255);
    }

    static get BLACK() {
        return new Color(0, 0, 0);
    }

    static get BROWN() {
        return new Color(165, 42, 42);
    }

    static get PINK() {
        return new Color(255, 192, 203);
    }

    static get RED() {
        return new Color(255, 0, 0);
    }

    static get ORANGE() {
        return new Color(255, 165, 0);
    }

    static get YELLOW() {
        return new Color(255, 255, 0);
    }

    static get GREEN() {
        return new Color(0, 255, 0);
    }

    static get CYAN() {
        return new Color(0, 255, 255);
    }

    static get BLUE() {
        return new Color(0, 0, 255);
    }

    static get PURPLE() {
        return new Color(128, 0, 128);
    }
}

const purple = ColorPalette.PURPLE;
const green = ColorPalette.GREEN;
const combinedColors = Color.combineColors(purple, green);
console.log(purple.rgb);
console.log(green.rgb);
console.log(combinedColors.rgb);