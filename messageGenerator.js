// Code for Creature Generator --- Template for the Creature 
function CreatureListGenerator(name = 'Human', type = 'Animal', habitat = 'City') {
    let creature = {
        name,
        type,
        habitat
    };
    
    creatureList.push(creature)
}

// Creature Information Storage 

var creatureList = new Array();



// Creature Information input -  (For Administrator ) 
CreatureListGenerator('Clownfish', 'Fish', 'shallow, warm ocean waters with coral reefs')
CreatureListGenerator('Red Fox', 'Mammal', 'various types of forests, including temperate and boreal forests')
CreatureListGenerator('Bison', 'Mammal', 'open grasslands with abundant vegetation, such as prairies')
CreatureListGenerator('Common Frog', 'Amphibian', 'freshwater ponds and lakes')
CreatureListGenerator('Jaguar', 'Mammal', 'Warm, wet rainforests with dense vegetation and tall trees')
CreatureListGenerator('Arctic Hare', 'Mammal', 'Cold, treeless tundra regions with frozen surfaces')
CreatureListGenerator('Bees', 'Insect', 'diverse environments, from meadows to gardens')







// Function  - Message Generator 

function messageGenerator(input) {
    const numOfCreature = input.length
    const randomNum = Math.floor(Math.random() * (numOfCreature + 1))
    const nameOfCreature = input[randomNum].name
    const typeOfCreature = input[randomNum].type
    const habitatOfCreature = input[randomNum].habitat

    return `DO YOU KNOW that ${nameOfCreature} is ${typeOfCreature} who lives in ${habitatOfCreature}.`
}


//Testing Area 

console.log(messageGenerator(creatureList))
