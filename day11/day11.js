/*
console.log('Anzum Rahman')
// Example 1
function msg(){
    console.log('Hello World!')
}

msg()
msg()
msg()

// exmaple 2
function printCount(){
    for(let i = 3; i>0 ; i = -1){
        console.log(`Counting = ${i}`)
    }
}

// example 3
function greeting(name){
    console.log(`Welcome to the program ${name}`)
}

// example 4
function upperMessage(message){
    let upper = message.toUpperCase();
    console.log(upper)
}

let user = prompt('Enter a message')
upperMessage(user);

// example 5
function greet(firstName, lastName){
    console.log(`Welcome ${firstName} ${lastName[0].toUpperCase()}`)
}

// example 6
function printMsg(message, numCount){
    for(let counter = 1; counter <= numCount; counter++){
        console.log(`Counter = ${counter} = ${message}`)
    }
}

// example 7
function isSnakeEyes(dice1, dice2){
    if(dice1===1 && dice === 1){
        console.log('Snake Eyes!')
    }
    else{
        console.log('Oops! Not Snake Eyes!')
    }
}

// example 8
function sumXY(){
    let x = 7, y = 3;
    return x+y
    console.log('This line is after the return')
}

// example 9
function doubleNumber(number){
    let dNumber = number*2
    return dNumber
    dNumber = number*3
}

let a = -5, b = 8, c =2
let number1 = sumNum(b,c)
let number2 = sumNum(a,c)

// example 10
function sumNum(num1, num2){
    let sum = num1+num2
    return sum
}

// example 11
function weather(temperature){
    if(temperature>=75){
        return true
    }
    else{
        return false
    }
}

let userWeather = parseInt(prompt('Ask the user to enter a temperature'))
let userT = weather(userWeather)

// example 12
function lastElement(arrayInput){
    if(arrayInput.length !==0){
        return "You didn't enter an array"
    }
    else if(arrayInput.length !==0){
        let lastIndex = arrayInput.length -1
        return arrayInput[lastIndex]
    }
    else{
        return "Array is empty"
    }
}
let array1 = ['lion', 23, false, 'orange', 89]
let arrayAnswer = lastElement(array1)

// example 13 - js built-in functions
let num=Math.PI

// example 14
function pickNum(){
    let pick =-10 + Math.floor(Math.random()*10)
    return pick
}
*/

// Activity 8

//1
function checkName() {
    while (true) {
        var name = prompt("Please enter your name: ");
        if (name === null || name === "") {
            name = prompt("You forgot to enter a name. Enter a name again: ");
        } else if (isNaN(name)) {
            console.log("Welcome " + name.toUpperCase() + " to the class!");
            break;
        } else {
            name = prompt(name + " is invalid! Enter a name again: ");
        }
    }
}

checkName();

//2
function checkNum() {
    while (true) {
        var num = prompt("Please enter a number: ");
        if (isNaN(num)) {
            alert("Invalid input, please enter a valid number.");
        } else {
            if (num % 2 === 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}

var result = checkNum();
console.log(result);

//3
function lottery(numOfGames) {
    for (let i = 0; i < numOfGames; i++) {
        console.log("Ticket " + (i + 1) + ":");
        for (let j = 0; j < 5; j++) {
            let randomNum = Math.floor(Math.random() * 100);
            console.log(randomNum);
        }
    }
}

lottery(3);
