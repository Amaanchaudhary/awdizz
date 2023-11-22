// Q1. Write a JS function that takes an arrayof strings as input and returns a new array 
// containing the length of those Strings
/*
var arr = ["amaan" , "faez"]

const length1 = (arr) => {
    var arr2 = []
    for(var i = 0 ; i < arr.length; i++){
        arr2.push(arr[i].length);
    }
    return arr2;
}
console.log(length1(arr))
*/

// Q2. Write a JS function that takes an arary of numbers as input and returns a new array 
// with only the even numbers from the original array
/*
    var arr = [1 , 2, 4, 5 ,6, 7 ]

    function EvenNumber(arr){
        var arr2 = []
        for(var i = 0 ; i < arr.length; i++){
            if(arr[i] % 2 == 0){
                arr2.push(arr[i])
            }
        }
        return arr2;
    }
    console.log(EvenNumber(arr));
*/
// Q3. Write a JS function that takes an array of number as input and returns the smallest
// number from the array
/*
    var arr = [11 , 40, 15, 77 ,7 , 10]

    function SmallestNum(arr){
        var Small = arr[0]
        for(var i = 1 ; i < arr.length; i++){
            Small = Small > arr[i]? arr[i] : Small; 

            // if(Small > arr[i]){
            //         Small = arr[i]
            //     }
        } 
        return Small;
    }

    console.log(SmallestNum(arr));
*/
// Q4. Write a JS function that takes an two array as input and returns a new array containing
// elements that are present in both array 
/*
    var arr1 = [1 ,2, 14, 5,7]
    var arr2 = [3 ,12, 14, 65, 7]

    function Same(arr1,arr2){
        var NewArr = []
        for(var i = 0 ; i < arr1.length ; i++){
            for(var j = 0; j < arr2.length ; j++){
                if(arr1[i] == arr2[j]){
                    NewArr.push(arr1[i])
                }
            }
        }
        return NewArr;
    }
    console.log(Same(arr1,arr2));
*/
// Q5. Sum of Array Elements:
// Write a JavaScript function to calculate the sum of all elements in an array.
/*
    var arr = [1 , 2 , 4 ,5 ,7,5]

    function Sum(arr){
        var total = 0;
        for(var i = 0 ; i < arr.length; i++){
            total = total + arr[i]
            // 0   =   0  +   1   ==  1
            // 1   =   1  +   2   ==  3
            // 3   =   3  +   4   ==  7
            // 7   =   7  +   5   ==  12
            // 12  =  12  +   7   ==  19
            // 19  =  19  +   5   ==  24
        }
        return total;
    }

    console.log(Sum(arr))
*/
// Q6.Find Maximum Value:
// Create a function to find the maximum value in an array of numbers.

/*
var arr = [11 , 40, 15, 77 ,7 , 10]

function GreatestNum(arr){
    var greater = arr[0]
    for(var i = 1 ; i < arr.length; i++){
       if(greater < arr[i]){
        greater = arr[i];
       }
    } 
    return greater;
}
console.log(GreatestNum(arr));
*/

// Q7.Calculate Average:
// Write a function to calculate the average of numbers in an array.
/*
    var array = [1 ,2 ,3 ,4 ,5]; //  15/5 == 3
    function Avg(array){
        var result = 0;
        var total = 0;
        for(var i = 0; i < array.length ; i++){
            total = total + array[i];
        }
        result = total/array.length;

        return result;
    }
    console.log(Avg(array))
*/
// Q8.Reverse Array:
// Implement a function that reverses the order of elements in an array without using 
// the reverse method.
/*
    var array = [1 , 2 , 3 , 4 , 5]; 
    function reverse(array){
        var newArray = []
        for(var i = array.length - 1 ; i >= 0 ; i--){
            newArray.push(array[i]);
        }
        return newArray;
    }
    console.log(reverse(array));
*/
// Q9.Even Number Count:
// Write a function that counts the number of even numbers in an array.
/*
    var arr = [1 , 2 , 3 ,4 ,5, 6, 7]

    function EvenCount(arr){
        var count = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] % 2 == 0){
                count++;
            }
        }
        return count;
    }
    console.log(EvenCount(arr));
*/
// Q10.Factorial Calculation:
// Create a function to calculate the factorial of a given number.
/*
    var array = [1 ,2, 3, 4 ,5] 
    
    function factorial(array){
        var fac = 1;
        for(var i = 0 ; i < array.length; i++){
            fac = fac * array[i];
            // 1   =  1  *   1      ==  1
            // 1   =  1  *   2      ==  2
            // 2   =  2  *   3      ==  6 
            // 6   =  6  *   4      ==  24
            // 24  = 24  *   5      ==  120
        }
        return fac;
    }
    console.log(factorial(array));
*/
// Q11.Question: Pattern Printing
// Create a program that prints the following pattern using astreach (*) using for loops:
// Input - 5 
// * 
// **
// ***
// ****
// *****
/*
    function PrintStars(){
        var pattern = ""
        for(var i = 1 ; i <= 5 ; i++){
            for(var j = 0 ; j < i ; j++){
                pattern = pattern + "* ";
            }
            if(j != 5){
                pattern = pattern + "\n"
            }
        }
        return pattern;
    }
    console.log(PrintStars());
*/

// Q12.Palindrome Check
// Write a JavaScript function that checks if a given string is a 
//palindrome (reads the same backward as forward). Return true if it's a palindrome;
// otherwise, return false.
// Example:
// Input: "racecar"
// Output: true
/*
var str = "racecar"

function palindrome(str) {
    var isTrue = true;
    for(var i = 0 ; i < (str.length/2) ; i++){
        if(str[i]  !==  str[str.length - 1 - i]){
            isTrue = false
        }
    }
    if(isTrue == false){
        return false
    }
    else{
         return true
    }
   
}
console.log(palindrome(str));
*/

/*
//Q13. Remove duplicate from sorted array
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

    var nums = [0,0,1,1,1,2,2,3,3,4,]

    for(var i = 0 ; i < nums.length-1 ; i++){
        if(nums[i] == nums[i+1]){
            // console.log(nums, "in iteration" , i);
            console.log(nums[i] ,"=", nums[i+1])
            console.log(nums, "in iteration" , i);
            nums.splice(i , 1 )
            console.log("after del",nums);
            console.log("\n")
            i--;
        }else{
            console.log(nums[i] ,"=", nums[i+1])
            console.log(nums,"no del in iteration",i)
            console.log("\n")
        }
    }
    console.log(nums);
*/


//Q14. Find Insert Position  //35 on leetcode

var nums = [1 , 2 ,3, 5];
var target = 2

function SearchPosition(nums, target) {
    
    for (var i = 0; i <= nums.length; i++) {
        if(nums[i] >= target){
            return i
        }
    }return nums.length;
}
console.log(SearchPosition(nums, target));


//Q15. Permutation
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
// Example 1:
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// var nums = [1 , 2 , 3];
// var result = [];

//     var i = 0;
//     var temp = nums[i]  
//     nums[i] = nums[i+1]   
//     nums[i+1] = temp     

//     console.log(nums)




// const CompareArrays = (a , b) => {
//     return JSON.stringify(a) === JSON.stringify(b);
// }



