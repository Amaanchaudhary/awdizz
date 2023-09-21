/*
Given an integer x, Return true if x is a palindrome , and false otherwise 
Example;
Input: X = 121
Output: true
Explaination: 121 reads as 121 from left to right and from right to left 
*/

var x = 121;

function Palindrome(x){
    isTrue = true;
    var str = x.toString(); 
    for(var i = 0 ; i < (str.length/2); i++){
        if(str[i]  != str[str.length - 1 - i]){
            isTrue = false
        }
    }
    return isTrue;
}
console.log(Palindrome(x))
