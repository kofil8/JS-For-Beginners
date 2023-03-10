// console.log("Hello World!");
// console.log(typeof "Kofil");
// console.log(typeof 23);
// console.log(typeof true);


//Strings

// const myVariable = "Mathematics";

// //The length property
// console.log("Every Good boy does fine".length);

// console.log(myVariable.charAt(6));
// console.log(myVariable.lastIndexOf("at"));
// console.log(myVariable.slice(6,8));

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// let index = 5;

// console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// // Expected output: "Using an index of 5 the character returned is u"

// index = -4;

// console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// // Expected output: "Using an index of -4 the character returned is d"


// console.log(myVariable.toUpperCase());
// console.log(myVariable.toLowerCase());
// console.log(myVariable.split(""))
// console.log("Hello, Kofil, I, can , do, any, thing".split(" "))
// console.log(myVariable.includes())

// console.log(`Hi this is Kofil ${index}`);



//Numbers 
// const myNumber = 42.92938;
// const myFloat = 42.0;
// const myString = "42.6778fdd";

// // console.log(Number(myString) === myNumber, Number(true));

// console.log(typeof Number.parseFloat(myString).toFixed(2));
// console.log(myFloat.toString());

// console.log(Number.parseFloat("3.343afaqf").toFixed(2).toString());

// console.log(isNaN("Kofil"));


//Math

// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(Math.PI + 34.23));
// console.log(Math.ceil(Math.PI));
// console.log(Math.floor(Math.PI));
// console.log(Math.pow(2,3));
// console.log(Math.min(2, 43, 343 ,4));
// console.log(Math.max(2, 43, 343 ,4));

// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10));


//Code Challenge

// const myName = "Mohammed Kofil";
// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

// let customerIsBanned = true;
// let soup = "Chicken noodle soup";
// let crackers = true;
// let reply;
// if(!customerIsBanned) {
//     reply = "No soup for you!";
// } else if(soup && crackers) {
//     reply = `Here's your oder of ${soup}`;
// }
// else {
//     reply = `Sorry, we're out of ${soup}`;
// }
// console.log(reply);


// let testScore = 89;
// let grade;
// const collegeStudent = true;

// if(testScore >= 90) {
//     grade = "A";
// } 
// else if(testScore >= 80) {
//     grade = "B";
// }
// else if(testScore >= 70) {
//     grade = "C";
// }
// else if(testScore >= 60) {
//     grade = "D";
// }
// else {
//     if(collegeStudent) {
//         grade = "U";
//     } else {
//         grade = "You're failed!"
//     }
    
// }
// console.log(grade);
 
// const playerOne = "rock";
// const computer = "paper";
// let reply;

// if (playerOne === computer) {
//     reply = '//tie game!';
// } else if (playerOne === "rock") {
//     if (computer === "paper") {
//         reply = '//computer wins';
//     } else {
//         reply = '//playerOne Wins';
//     }
// }
// else if (playerOne === "paper") {
//     if (computer === "scissors") {
//         reply = '//computer wins';
//     } else {
//         reply = '//playerOne Wins'
//     }
// } else {
//     if (computer === "rock") {
//         reply = '//computer wins';
//     } else {
//         reply = '//playerOne Wins;'
//     }
// }
// console.log(reply);

//Switch


// switch(Math.floor(Math.random() * 3 + 1)) {
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     default:
//         console.log("No Match");
// }

// let playerOne = "scissors";
// let computer = "rock";
// switch (playerOne) {
//     case computer:
//         console.log("Tie Game");
//         break;
//     case "rock":
//         if (computer === "paper") {
//             console.log("Computer Wins!");
//         } else {
//             console.log("PlayerOne wins!");
//         }
//         break;
//     case "paper":
//         if (computer === "scissors") {
//             console.log("Computer Wins!");
//         } else {
//             console.log("PlayerOne wins!");
//         }
//         break;
//     default:
//         if (computer === "rock") {
//             console.log("Computer Wins!");
//         } else {
//             console.log("PlayerOne wins!");
//         }
// }


//Ternary Operator

//syntax
//condition ? ifTrue : ifFalse;

// let soup ;
// let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
// console.log(response);

// let soup = "Chicken Noodle Soup";
// let isCustomerBanned = false;
// let soupAccess = isCustomerBanned ? "Sorry, no soup fo you!" : soup
// ? `Yes, we have ${soup} today.`
// : "Sorry, no soup today";
// console.log(soupAccess);

// let testScore = 89;
// let myGrade = testScore > 89 ? "A"
// : testScore > 79 ? "B"
// : testScore > 69 ? "C"
// : testScore > 59 ? "D"
// : "F";
// console.log(`My test grade is a ${myGrade}.`);


// let playerOne  = "rock";
// let computer = "scissors";

// let result = playerOne === computer ? "Tie Game!"
// : playerOne === "rock" && computer === "paper" ? "Computer Wins!"
// : playerOne === "paper" && computer === "scissors" ? "Computer Wins!"
// : playerOne === "scissors" && computer === "rock" ? "Computer Wins"
// : "PlayerOne wins!";
// console.log(result);

//User Input 
// alert("Hello World!")
// let myBoolean = confirm("Ok === True\nCancel === False");
// console.log(myBoolean);

// let name = prompt("Please enter your name: ");
// if (name) {
//    console.log(name.length); 
//    console.log(name.trim().length);
//    console.log(name.trim());
// } else {
//     console.log("You didn't enter your name! ");
// }




//***My First Interactive Game */

let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock, paper, or scissors?");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (
        playerOne === "rock" || 
        playerOne === "paper" || 
        playerOne === "scissors"
        ) {

            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";

            let result = playerOne === computer ? "Tie Game!"
            : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne Wins!`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok thanks for playing")

        } else {
            alert("You didn't enter rock, paper, or scissors.");
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.");
    }

} else {
    alert("Ok, maybe next time.");
}





