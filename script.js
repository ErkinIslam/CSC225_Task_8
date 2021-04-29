// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

const result = reverseThisString('Hello');
console.log(result);


// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    return string.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}

console.log(swapCase('Hello World'));


//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array) {
    return array.map(                
      function(temp) {               
        return (temp - 32) * 5 / 9
      }
    );
    
}
  var array = [23, 32, 41, 50, 59];
  var toC = toCelcius(array);
  console.log(toC);


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    var arrayResult = [];

    for(let i=0; i<array.length; i++){
        if(array[i] >= 75){
            arrayResult.push(true);
        }
        else{
            arrayResult.push(false);
        }
    }
    console.log(arrayResult);
}

passOrFail([20, 30, 50, 80, 90, 100]);



//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(array){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    var returnArray =[];

    for(let i=0; i<array.length; i++){
        returnArray.push(cardinalNumbers[i] + ' is ' + germanNumbers[i]);
    }
    console.log(returnArray);
}

germanNumbers([2,3,4,5,6]);

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var arrayPrimes = [];

    for (var counter = 2; counter <= numbers.length; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            arrayPrimes.push(counter);
        }
    }
    console.log(arrayPrimes);
}

returnPrimeNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" 
function multiples(){
    var arrayMultiples = [];
    for(let i=1; i<101; i++){
        if (i%3==0 && i%5==0){
            console.log('CSC225 RULES I LOVE JAVASCRIPT');
        }
        else if(i%3==0){
            console.log('CSC225 RULES');
        }
        else if(i%5==0){
            console.log('I LOVE JAVASCRIPT');
        }
        else{
            console.log(i);
        }
    }
}

multiples();