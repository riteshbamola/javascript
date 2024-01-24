// // function hello()
// // {
// //     console.log("hello");
// // }
// // hello();
// // function para(number)
// // {
// //     console.log(number);
// // }
// // para("hii");



// // // arrow function
// // const sum=(x,y)=>{
// //     return (x+y);


// // }
// // console.log(sum(3,5));


// function vowels(str){
//     let cnt = 0;
//     for(let val of str)
//     {
//         if(val =='a'|| val =='e'||val =='i'||val =='o'||val =='u')
//         {
//             cnt++;
//         }
//     }
//     return cnt;
// }
// let val = vowels("aeiou");
// console.log(val);
// // similar function but arrow
// const func= (str)=>{
//     let cnt = 0;
//     for(let val of str)
//     {
//         if(val =='a'|| val =='e'||val =='i'||val =='o'||val =='u')
//         {
//             cnt++;
//         }
//     }
//     return cnt;
// }
// console.log(func("aeiou"));

//for each    on each element of the array it performs a special operation defined in functions
// let arr=[1,2,3,4,5];

// console.log(arr);
// arr.forEach((val)=>{          // three parameters in for each(value,index,arr)
//     console.log(val*val);
// })
// console.log(arr);

//map  returns a new array works same as for each 

let arr=[1,2,3,4,5];



// let newarr= arr.map((val)=>{
//     return val*val;
// })
// console.log(arr);
// console.log(newarr);

//filter  creates a new array of elements that are true for a conditiion /filter

let even=arr.filter((val)=>{
    return val%2===0;
})
console.log(even);
console.log(arr);

//reduce :reduce an array to single variable;
let newarr=arr.reduce((res,curr)=>{
    return res+curr;                          // return sum of the array and make the arr= sum;
})
console.log(newarr);
console.log(arr);