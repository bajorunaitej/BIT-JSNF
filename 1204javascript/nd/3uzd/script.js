let kint = 'An American in Paris';
kint = kint.toLowerCase().replace(/[aeiouy]/g, '');
console.log(kint);

let strings = ["An american in Paris", "Breakfast at Tiffany's", "2001: A Space Odyssey", "It's a Wonderful Life"];

let i=0;
while(i<strings.length) {
    console.log(strings[i].toLowerCase().replace(/[aeiouy]/g, ''));
    i++;
}