// Sukurkite klasę, skirtą darbui su spalvomis, pagrindinių spalvos kodų gavimui norimais formatais bei dviejų spalvų sujungimui. klasė Color turės:

// privačius laukus:
// red, green, blue; - (sveikųjų skaičių reikšmės nuo 0 iki 255);

// Konstruktorių: sukuriamas objektas iš RGB reikšmių; Jei bent viena paduodama reikšmė yra didesnė nei 255 arba mažesnė nei 0, išmesti error pasinaudojant: 
// throw new Error(‘Blogos reikšmės’);

// Geterius:
// a. rgb - gražinantis RGB spalvos kodą, kaip string reikšmę
// b. hsl - gražinantis HSL spalvos kodą, kaip string reikšmę
// c. hex - gražinantis HEX spalvos kodą, kaip string reikšmę


class Color {
    constructor(red, green, blue) {
        if (this.validateColor(red) && this.validateColor(green) && this.validateColor(blue)) {
            this.red = red;
            this.green = green;
            this.blue = blue;
        } else {
            throw new Error('Blogos reikmės');
        }
    }

    validateColor(value) {
        if (value < 0) {
            console.error("Reikmė negali būti mažesnė nei 0");
            return false;
        }
        if (value > 255) {
            console.error("Reikmė negali būti didesnė nei 255");
            return false;
        }
        return true; // Return true if value is within the valid range
    }

    get rgb() {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }

    get hsl() {
        //RGB colors between 0 and 1
        const r = this.red / 255;
        const g = this.green / 255;
        const b = this.blue / 255;

        //min and max values of RGB
        const max = Math.max(r,g,b);
        const min = Math.min(r,g,b);

        //calculate the lightness
        const lightness = (max + min) / 2;

        //saturation
        const d = max - min;
        const saturation = lightness > 0.5 ? d / (2-max - min) : d / (max + min);

        //calculate the hue
        let hue;
        switch (max) {
            case r:
                hue = ((g - b) / d + (g < b ? 6 : 0)) * 60;
                break;
            case g:
                hue = ((b - r) / d + 2) * 60;
                break;
            case b:
                hue = ((r - g) / d + 4) * 60;
                break;
            default:
                hue = 0;
                break;
        }
        return `hsl(${Math.round(hue)},${Math.round(saturation * 100)},${Math.round(lightness * 100)})`;
    }

    get hex() {
        const toHex = (value) => {
            const hex = value.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };

        const hexRed = toHex(this.red);
        const hexGreen = toHex(this.green);
        const hexBlue = toHex(this.blue);

        return `#${hexRed}${hexGreen}${hexBlue}`
    }

}

const spalva = new Color(255, 0, 125);
console.log(spalva.rgb);
console.log(spalva.hsl);
console.log(spalva.hex);