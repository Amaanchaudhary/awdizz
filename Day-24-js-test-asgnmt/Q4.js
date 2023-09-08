//Q.4 Write a JS function that takes two arrays as input and returns a new array 
//containing elements that are present in both array.

var arr1 = [2, 23, 5, 34, 5, 62, 81, 9,]
var arr2 = [12, 23, 34, 7, 5, 67, 68, 8]

function FindMatch(arr1, arr2) {
    var match = []
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                match.push(arr1[i]);
            }
        }
    }
    return match;
}
console.log(FindMatch(arr1,arr2));

/*
var arr1 = [2, 23, 5, 34, 5, 62, 81, 9,]
var arr2 = [12, 23, 34, 7, 5, 67, 68, 8]

function FindMatch(arr1, arr2) {
    var match = []
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                match.push(arr1[i]);
            }
        }
    }
    return match;
}
console.log(FindMatch(arr1,arr2));
*/

/*
var arr1 = [2, 23, 5, 34, 5, 62, 81, 9,]
var arr2 = [12, 23, 34, 7, 5, 67, 68, 8]

function FindMatch(arr1, arr2) {
    var match = []
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                match.push(arr1[i]);
            }
        }
    }
    return match;
}
console.log(FindMatch(arr1,arr2));
*/

/*
var arr1 = [2, 23, 5, 34, 5, 62, 81, 9,]
var arr2 = [12, 23, 34, 7, 5, 67, 68, 8]

function FindMatch(arr1, arr2) {
    var match = []
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                match.push(arr1[i]);
            }
        }
    }
    return match;
}
console.log(FindMatch(arr1,arr2));
*/

