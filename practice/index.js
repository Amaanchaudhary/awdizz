// Q.Find the number who are even from 35 to 100

/*
for(var i = 35; i <=100 ; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
*/

// Q.Find total count from range 23 to 80.who are odd 

/*
var Count = 0;
for(var i = 23 ; i <= 80; i++){
    if(i % 2 == 1){
        Count++;
    }
}
console.log(Count);
*/

// Q.Find the addition of fist 10 natural number who are even. 

/*
    var add = 0;
    for(var i = 1; i <= 10; i++){
        if(i % 2 == 0){
            add += i;
        }
    }
    console.log(add);
*/

// Q.Find the factorial of 5. 

/*
var fac = 1;
var n = 6
    for(var i = 1; i <= n ; i++){
        fac *= i
    }
    console.log(fac);
*/

//Q. Write a program to print an increment star of 4 lines, 
/*
var str = ""
    for(var i = 0 ; i < 4; i++){
        for(var j = 0; j <= i ; j++){
           str = str.concat("* ")
        }
        if(i!=3){
            str = str.concat("\n")
        }
    }
    console.log(str);
*/

//Q. Write a program to print an decrement star of 4 lines, initial will be 4 

/*
var str = ""
for(var i = 0 ; i < 4; i++){
    for(var j = 4 ; j > i ; j--){
       str = str.concat("* ")
    }
    if(i!=3){
        str = str.concat("\n")
    }
}
console.log(str);
*/

//Q.From an array find out the addition of every possible 2 numbers which match the target 

/*
var arr = [12,2, 4, 5,6 ,7 ,7, 0 ,2 ,10,8 , 4];
var target = 12;

for(var i = 0 ; i < arr.length - 1; i++){
    for(var j = i + 1; j < arr.length ; j++){
        if(arr[i] + arr[j] === target){
            console.log(arr[i] ," + ",arr[j])
        }
    }
}
*/

//if else

/*
var fruit = "banana";

switch (fruit){
    case fruit = "Apple":
        console.log("100/kg")
        break;
    case fruit = "mango":
    case fruit = "orange":
        console.log("150/kg")
        break;
    case fruit = "banana":
        console.log("60/dozen")
        break;
    default :
    console.log("no item found")
}
*/

// var obj = {name: "amaan" , age : 12, days : {holiday: "sunday" , weekdays : ["mon" , "tues" , "wed" , {halfday: "friday"} ]} }
// console.log(obj.days.weekdays[3].halfday)

/*
//Q. Remove duplicate from sorted array
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

    var nums = [0,0,1,1,1,2,2,3,3,4]

    for(var i = 0 ; i < nums.length-1 ; i++){
        if(nums[i] == nums[i+1]){
            console.log(nums, "in iteration" , i);
            nums.splice(i , 1 )
            i--;
        }
    }
*/

//Q find insert position.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// var nums = [1 , 3 , 5 , 6];
// var target = 5

// function SearchPosition(nums, target) {

//     for (var i = 0; i <= nums.length; i++) {
//         if(target <= nums[i]){
//             return i
//         }
//     }return nums.length
// }
// console.log(SearchPosition(nums, target));


//349 leet code
var grid = [[0, 1, 0 ,0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0]]

var islandPerimeter = function (grid) {
    var size = 0
    for (var i = 0; i < grid.length; i++) {    
        for (var j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == 1){                     // if found 1 at any place
                size += 4                            // size + 4
                console.log("size = ",size,' at itr', i,j)
                if(j > 0 && grid[i][j-1] == 1){      // if found 1 before  
                    size -= 2;                       // size -2
                    console.log("size = ",size,'-2 bcauz of before at itr', i,j)
                }                                       
                if(i > 0 && grid[i-1][j] == 1){      // if found 1 above
                    size -= 2;                       // size -2
                    console.log("size = ",size,'-2 bcauz of top at itr', i,j)
                }
            }
        }
    }
    return size
};

console.log(islandPerimeter(grid))






