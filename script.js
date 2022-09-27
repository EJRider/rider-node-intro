const typesOfPets = require("./storage.js");

console.log('Hello from serverland! 🦍');

let hat = 'Top Hat! 🎩'

console.log(`Look at my ${hat}`);

let results =  9+10;

console.log(`Nine plus ten is equal to ${results}`);

let testing = Math.sqrt(9)

console.log('Can javascript find square roots?', testing);

console.log('There is so much fun stuff you can do on here! I can\'t wait for you to find it all out!')

function crunchMachine(){
    console.log('Welcome to the crunch machine! This won\'t overload your computer ;) ');
    for(let i=0; i< results; i++){
        console.log("CRUNCH!");
    }
    return 'Mmmmm... Yummy data... 🤤';
}

console.log(crunchMachine());

console.log(typesOfPets());

console.log('From your testing it seems that you can only export one value at a time, Edan agrees with you');

