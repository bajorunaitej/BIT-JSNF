let namesArray = ['alice', 'bob', 'charlie', 'david', 'emily', 'frank', 'grace', 'harry', 'isabella', 'jack', 'kate', 'liam', 'molly', 'nathan', 'olivia', 'peter', 'quinn', 'rachel', 'steve', 'tina'];
console.log(namesArray);

for(let i = 0; i < namesArray.length; i++) {
    namesArray[i][0].toUpperCase();
    console.log(namesArray);
}