const shirtWidth = 19;
const shirtLength = 28.5;
const shirtSleeve = 8.3;

// your code goes here
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S");
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    console.log("M");
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    console.log("L");
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    console.log("XL");
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    console.log("2XL");
} else if ((shirtWidth >= 28 && shirtWidth < 30) && (shirtLength >= 34 && shirtLength < 35) && (shirtSleeve >= 10.13 && shirtSleeve < 10.38)) {
    console.log("3XL");
} else {
  console.log("N/A");
}


8.13, 8.38, 8.63, 8.88, 9.63, 10.13


const eatsPlants = false;
const eatsAnimals = false;
let category;

// your code goes here
category = !eatsPlants ? "carnivore" 
	: !eatsAnimals ? "herbivore"
	: "omnivore";


const eatsPlants = false;
const eatsAnimals = false;
let category;
// your code goes here
category = !eatsPlants ? "carnivore"
	: !eatsAnimals ? "herbivore"
	: eatsAnimals ? "omnivore" : "undefined";



// Corrected code from Session lead *****
const eatsPlants = false;
const eatsAnimals = false;
let category;

// your code goes here
category = eatsAnimals && eatsPlants 
   ? "omnivore"
   : eatsPlants 
        ? "herbivore"
	    : eatsAnimals 
              ? "carnivore" 
              : "undefined";
// Example of a switch from Udacity
const option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}

//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

experiencePoints() = winBattle() ? return (10 : 1);

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// nothing; case "forward"

//#3 return value when moveCommand("back");
// returns case "back" and "you arrived home"

//#4 return value when moveCommand("right");
// case "right" and "you found a river"

//#5 return value when moveCommand("left");
// nothing; case "left"

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
