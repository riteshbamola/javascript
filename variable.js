// let name="Ritesh";
// {
//     var helo=56; //no errror global scope
//     let ba= 34;//error block scope
//     const variable=23; // it is giving error in line 5 because of block scope property of const and let 
// }
//     // console.log(ba);
//     // console.log(variable);
//     // console.log(helo);


// const name2= "aman";
// // name2= "ayush";  // error redeclaration/redefinition is not allowed in const
// console.log(name2);

// let a =12;
// let b=23;
// let result = a>b? true :false ; // ternery operator 
// console.log(typeof result);


let inp = document.querySelector(".inp");
let val= inp.value;
if(val %2=== 0){ 
        console.log("even number");
}
else{
    console.log("odd");
}
