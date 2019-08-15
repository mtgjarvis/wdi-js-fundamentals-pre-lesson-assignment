// const inky = {};
// inky.color = 'Cyan';
// inky.personality = 'Shadow';
// console.log(inky);

// const ghosts = {inky:'Grey', blinky: 'Red', pinky: 'Piink', clyde: 'Orange'};
// console.log(ghosts)

// console.log(ghosts.inky);
// console.log(ghosts.blinky);

// console.log(ghosts['inky']);
// console.log(ghosts['blinky']);

// const ghostName = 'clyde';

// console.log(ghosts[ghostName]);

// ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde']
// for (let index = 0; index < ghosts.length; index++) {
//     console.log('Pac-Man eats ' + ghosts[index]);
// }

// pacman-if-else.js
// let powerPelletEaten = false;
// let ghosts = 4;

// while (true) {
//   console.log('Ghosts remaining: ' + ghosts);

//   if (powerPelletEaten == false) {
//     console.log('Pac-Man eats the power pellet.');
//     powerPelletEaten = true;
//   } else if (ghosts > 0) {
//     console.log('Pac-Man eats a ghost.');
//     ghosts--;
//   } else {
//     break;
//   }
// }

// console.log('Pac-Man returns home after a long day in the maze.');



// var ghost = 'Blinky';
// var colour;

// switch (ghost) {
//     case 'Inky':
//         colour = 'Cyan';
//         break;
//     case 'Blinky':
//         colour = 'Red';
//         break;
//     case 'Pinky':
//         colour = 'Pink';
//         break;
//     case 'clyde':
//         colour = 'Orange';
//         break;
// }

// console.log(`${ghost} is the colour ${colour}`);


//  Named function

function eatDot() {
    console.log("MUNCH!"):
}

// Anonymous function
// Here we assign the function to a variable instead of giving it a name directly
var eatDot = function() {
    console.log("MUNCH!");
  }
  
  // Arrow function (also anonymous)
  var eatDot = () => {
    console.log("MUNCH!");
  }
