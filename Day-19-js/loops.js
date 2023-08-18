// Q.Find the number who are even from 35 to 100

    // for(var i = 35; i <= 100; i++){
    //     if(i % 2 == 0){
    //         console.log(i);
    //     }
    // }

// Q.Find total count from range 23 to 80.who are odd 

    // var count = 0;
    // for(i = 23 ;i<=80; i++){
    //     if(i % 2 != 0){
    //         console.log(i);
    //         count++;
    //     }
    // }
    // console.log(`${count} - total count`);

// Q.Find the addition of fist 10 natural number who are even. 

    // var add = 0;
    // for(var i = 1; i <=10; i++){
    //     if(i % 2 == 0){
    //         add = add + i;
    //         console.log(add);
    //     }
    // }

// Q.Find the factorial of 5. 

    // var fac;
    // for (i = 1; i <= 5 ; i++){
    //     if(fac==undefined){
    //         fac = i;
    //     }
    //     else{
    //         fac *= i;
    //     }
    // }
    //     console.log(fac)

//Q. Write a program to print an increment star of 4 line 
    // 1st way:-
    // var str = "";
    // for(var i = 0; i < 4 ; i++){
    //     for(var j = 0; j <= i ; j++){
    //         if(i + j  >=  4){
    //             str = str.concat("*")
    //         }
    //         else{
    //             str = str.concat(" ")
    //         }
    //     }
    //     str = str.concat("\n");
    // }
    // console.log(str);

    // 2nd way:-
    // for(var i=1; i<=4; i++){
    //     console.log("* ".repeat(i));
    //  }

    //Q.From an array find out the addition of every possible 2 numbers which match the target 
    var arr= [12,2, 4, 5,6 ,7 ,7, 0 ,2 ,10,8 , 4];
    var target = 12;

    for(var i = 0; i < arr.length; i++){
        for(var j = i+1 ; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                console.log(arr[i],"+",arr[j],"=" ,arr[i]+ arr[j]);
            }
        }
    }