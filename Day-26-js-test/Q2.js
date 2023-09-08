// Palindrome Check
// Write a JavaScript function that checks if a given string is a 
//palindrome (reads the same backward as forward). Return true if it's a palindrome;
// otherwise, return false.

// Example:
// Input: "racecar"
// Output: true

var str = "racecar"

function palindrome(str){
    var result = true;
    for(var i = 0; i < (str.length/2); i++){
        if(str[i] != str[str.length-(i+1)]){
            return result = false 
            
        }
        // console.log(str[str.length-(i+1)])
    }
    return result
}
console.log(palindrome(str))