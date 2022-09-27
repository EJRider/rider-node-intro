let typesOfPets = ['dogs', 'cats', 'snakes', 'lizards', 'birds', 'weasel'];

let namesOfPets = ['Harold', 'Tripp', 'Garfeild', 'Bobert', 'Harvey', 'Weselton'];


// module.exports = {
//     types: typesOfPets,
//     names: namesOfPets
// }

function getAPet(){
    return `${namesOfPets[3]} the ${typesOfPets[3]}`;
}

module.exports = getAPet;