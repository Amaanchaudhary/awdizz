var arr = []     // Created an empty array of name arr
var obj = {name: "amaan"}  //created an object of name obj and given the value as name = amaan
    // {"name" : "amaan"}  JSON FORMAT for object 

arr.push(obj)    //added the 1 value (obj) in array at [0]index with the help of push method
arr.push({age: 18}); //2nd way to push the object 
// console.log(arr[1].age); 

arr.push("12")  //added the 2 value("12") in array at [1]index  
// console.log(arr);

var arr2 = ["true", 12 ,  {name: "amaan" , array : [44 , "maaz"]}]

// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr2[2].name);
// console.log(arr2[2].array);
// console.log(arr2[2].array[1]);

var obj2 = {age : 21 , NoOfDays :["monday" , "tues" , {day : "friday"}] , bool : false ,
mydata : {hi : "hello" , myarray : [1,2,3 , {father: "dad" , broName : ["maaz","rushaan"]}]}} 

// console.log(obj2.age)
// console.log(obj2.NoOfDays[1])
// console.log(obj2.NoOfDays[2].day)
// console.log(obj2.mydata.myarray[3].broName[1])

// json
// js to JSON - localstorage.setItem("name",JSON.Stringify(Amaan));

//JSON to js -  var a = JSON.parse(localstorage.getItem("name"))

// localStorage
// // save to ls
// localStorage.setItem("key", "value")

// // read from ls
// localStorage.getItem(key)
// const mydata = localStorage.getItem("name")

// localStorage.removeItem(JSON.stringify(key))




