var age = 71;

if(age < 18 && age > 0){
    console.log(`sorry u r not eligible for DL age- ${age}`);
}
else if(age >= 18 && age <= 70){
    console.log(`yes u can drive - ${age}`);
}
else if(age > 70){
    console.log(`sorry u can't drive ur above 70`);
}
else{
    console.log(`invalid input ${age}`)
}


var FruitName = "orange";

switch (FruitName) {
    case FruitName = "Mango":
        console.log(`${FruitName} = 100/kg`);
        break;
    case FruitName = "Grapes":
        console.log(`${FruitName} = 50/kg`);
        break;
    case FruitName = "apple":
    case FruitName = "orange":
        console.log(`${FruitName} = 150/kg`);
        break;
    default:
        console.log(`${FruitName} Information not available`);
        break;
}

for(var i = 1; i <= 10 ; i++){
    console.log(`5 X ${i} = ${5*i}`)
}