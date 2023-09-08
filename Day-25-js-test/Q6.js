// Factorial Calculation:
// Create a function to calculate the factorial of a given number.

var num = 6;

function factorial(num){
    var fac = 1;
    for(var i = 1 ; i <= num ; i++){
        fac *= i
    }
    return fac;
}
console.log(factorial(num));