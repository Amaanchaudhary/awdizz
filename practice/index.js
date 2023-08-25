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

