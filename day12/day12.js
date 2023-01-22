console.log('Anzum Rahman')

//Example 1
let msg = 'This is an outside msg'

function displayMsg(){
    let msg = 'Hello World!'
}

// Example 2
var fullMoon = true;
let species = 'human'

if (fullMoon){
    let species = 'wolf'
    console.log(`FULL MOON! Lupin is a ${species}`)
}
console.log(`NOT full moon! Lupin is ${species}`)

// example 3
let message = 'Hello World!'
console.log(message)
message = 'Good evening!'
console.log(message)

// example 4 skip

// example 5 
for(var i = 0; i<10; i++){
    console.log(i)
}
console.log(`The last value of i is ${i}`)

// example 6
let sum = function (num1, num2){
    return num1 + num2
}
let square = function(num){
    return Math.pow(num, 2)
}

// Example 7
console.log('----------------- example 7 -------------------')
function callTwice(rep){
    rep();
    rep();
   }
   function rolldie(){
    const roll = Math.floor(Math.random()*6+1)
    console.log(roll)
   }
   callTwice(rolldie)

// Example 8
console.log('----------------- example 8 -------------------')
function makeBetweenFunc(min, max){
    return function(num){
        if (num>min){
            return true
        }
        else if(num<=max){
            return false
        }
        else{
            return "CAN'T COMPARE"
        }
    }
}
let child = mkaeBetweenFunc(3,20)
console.log(child('peter'))

// Example 9 skip

// Example 10
console.log('----------------- example 10 -------------------')

const myMath = {
    area(side){return side*side},
    perimeter(side){return side*4}
}

// Example 11
const cat ={
    name:'Mickey',
    color: 'white with brown spots',
    breed: 'unknown',
    meow(){console.log(this.name)}
}

// Example 12
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg(){this.eggCount++; return 'EGG'}
}

// Example 13
console.log('----------------- example 13 -------------------')
function yell(msg){
    try{console.log(msg.toUpperCase().repeat(3))}
    catch{
        console.log('Please pass a string next time!')
    }
}

function yellagain(msg){
    try{console.log(msg.toUpperCase().repeat(3))}
    catch(e){
        console.log(e)
        console.log('Please pass a string next time!')
    }
}