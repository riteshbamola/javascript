// let arr=[1,2,30,4,5];
// for(let val of arr)                                      // for of loop 
// {
//     console.log(val);
    
// }
// console.log("hello");
// let student={
//     name: "Ritesh Bamola",
//     age: 19,
//     cgpa:8.5,
//     isPass:true,
// };
// for(let key in student)                                     // for in loop
// {
//     console.log("key= ",key," value= ",student[key]);
// }

// for(let i=1;i<=30;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }


// let guessednumber= 29;
// let usernum = prompt("enter a number:"); 
// while(usernum!=guessednumber){
//     usernum = prompt("enter a number:");
// }
// console.log("you Guessed right");


let  name = prompt("Enter your name ");

let username= `@${name}${name.length}`;
console.log("Your username =",username);