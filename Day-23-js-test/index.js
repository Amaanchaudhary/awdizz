//Q.1 
/*
const arr = ["Amaan" , "Hi" , "Hello" ,"Bye"]

function arraylength(arr){
    return arr.length;
}
console.log(arraylength(arr)); //function called
*/

//Q.2
/*
const ArrNum = [12,23, 34, 45, 4,2 ,3,5,6,7,7]

function EvenNum(ArrNum){
    var result = []
    for(var i = 0 ; i < ArrNum.length; i++){
        if(ArrNum[i] % 2 == 0){
            result.push(ArrNum[i])
        }
    }
    return result;
}
console.log(EvenNum(ArrNum)); //function called
*/

//Q.3 
/*
var arr2 = [23 ,11 ,5 , 10 , 50 , 5 , 6, 23 , 3 , 33 , 1 ]

function SmallNum(arr2){
    var small = arr2[0] ;
    for(var j = 0; j < arr2.length - 1; j++){
        small = small < arr2[j+1] ? small : arr2[j+1];
    }
    return small;
}
console.log(SmallNum(arr2)); //function called
*/

//Q4. 
/*
var arr1 = [12,23, 0 ,34, 45, 65, 76, 9,34, 86]
var arr2 = [2,3,5,6, 7, 79, 12,9,0]

function CommonNum(arr1, arr2){
    var result = []
    for(var i = 0 ; i < arr1.length; i++){
        for(var j = 0 ; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                result.push(arr1[i])
            }
        }
    }
    if(result.length == 0){
        return result = "no match found"
    }
    else{
        return result;
    }
}
console.log(CommonNum(arr1,arr2)) //function called
*/

