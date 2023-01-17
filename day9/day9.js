console.log('Type your name');
// if statement
let day = true;
let night = false;

if (day){
console.log(`The condition or statement is ${day}`)
}

let num1 = '20'; //string data
let num2 = 20; //numerical data

if(num1==num2){
    console.log(`${num1} and ${num2} are exactly the same`)
}
// example 1
let goodMood = true;
let gotSleep = false;

if(goodMood !== gotSleep){
    console.log('Today is a good day!');
}
else{
    console.log('I am mood!');
}
// example 2
let a = 5, b = 4, equalNum;
if(a===b){
    equalNum = true;
}
else{
    equalNum = false;
}

// example 3

let n1 = 5, n2 = 8;
if (n1===n2){
    console.log('The numbers are equal')
}
else if(n1>n2){
    console.log('number 1 is greater than number 2')
}
else if(n2>n1){
    console.log('number 1 is less than number 2')
}
else{
    console.log('INVALID ENTRY')
}

// example 4

let colors =['red','blue','green','yellow','orange']
 let userPick = parseInt(prompt("Select a color from 1 to 5")) // parseInt ()
 let selectColor = colors[userPick - 1]
 if(selectColor === 'red'){
 console.log('The selected color is red!')
 }
 else if (selectColor =='blue'){
 console.log('The selected color is blue!')
 }
 else if (selectColor =='green'){
 console.log('The selected color is green!')
 }
 else if (selectColor =='yellow'){
 console.log('The selected color is yellow!')
 }
 else if (selectColor =='orange'){
 console.log('The selected color is orange!')
 }
 else{
 console.log('INVALID!')
 }

 // example 5

 let userInput = prompt('Enter a number');
 let checkInput = parseInt(userInput);
 checkInput = isNaN(checkInput);

 if(checkInput){
    console.log(`${userInput} is a string or a character`)
 }
 else{
    console.log(`${userInput} is a number!`)
 }

 // example 6

 let password= prompt("Enter a password");
if (password.length>=6){
console.log("Password has 6+ characters!");
 if (password.indexOf(' ')===-1){
 console.log(`${password} Great! Password has no space!`)}
 else{
console.log("Warning! Password can't have space! ")}
}
else{console.log("Password has less than 6 characters! ");}

// example 7

let name = prompt('Enter a name! ');

if(name){
    console.log(`Welcome to the program ${name}`)
}
else{
    console.log('You did not enter a name!')
}

// activity 6
let userInput = prompt("Enter a value (string or number)");

if (isNaN(userInput)) {
  console.log(userInput + " is a string.");
} else if (userInput < 0) {
  console.log(userInput + " is a negative number.");
} else if (userInput >= 0) {
  console.log(userInput + " is a positive number.");
}