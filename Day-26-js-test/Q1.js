// Question: Pattern Printing
// Create a program that prints the following pattern using astreach (*) using for loops:
// Input - 5 

var input = 4;
var str = ""

function PrintStar1(input) {
    for (var i = 1; i <= input; i++) {
        for (var j = 1; j <= i; j++) {
            str = str.concat("* ")
        }
        if (i != input) {
            str = str.concat("\n")
        }
    }
    return str
}
function PrintStar2(input) {
    for (var i = 1; i <= input; i++) {
        var pattern = ""
        for (var j = 1; j <= i; j++) {
            pattern += "* "
        }
        console.log(pattern)
    }
}
function PrintStar3(input) {
    for(var i = 1 ; i <= input; i++){
            console.log("$ ".repeat(i));
        }
}

PrintStar2(input)   
// console.log(PrintStar1(input));
// PrintStar3(input);
