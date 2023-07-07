function submitdata(){
    //alert("Hello Amaan");
    // var name = document.getElementById("xyz").value;
    // console.log(name,"---is Name");
    var password = document.getElementById("xyz").value;
    if(password.length < 9){
        // return console.log("password should be 8");
        return alert("password should be 8");
    }
    alert("Registration Successfull");
}