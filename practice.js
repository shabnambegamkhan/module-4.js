///////  FUNCTION  /////////

// function square (a){
//    return (a**2)
// }
// let SQUARE= square(6)
// console.log(SQUARE)

// ///////////////////////

// let multiply=(a,b)=>{
//     return a*b;
// }
// let product=multiply(3,2)
// console.log(product)

/////////////////////////

// function calculateArea(width, height){
//     return (width * height)
// }
// let total =calculateArea(6,8)
// console.log (total)

//////////////////////////////

// function describeNumber(num){
//     if(num>0){
//         console.log("positive")
//     }
//     else{
//         if(num<0){
//             console.log("nagetive")
//         }
//         else{
//             if(num==0){
//                 console.log("zero")
//             }
//         }
//     }
// }
// describeNumber(0);

///////////////////////////////

// let printPerson= {
//     name: 'shabnam',
//     age :  20,
//      details: function(){
//         console.log("name:", this.name, "age:",this.age)
//      }
// }
// printPerson.details();

////////////// AARAY MAX FIND  /////////////////

// let arr=[1,5,8,15,6,4,2,12]
// function findmax(){
//     let max=arr[0]
//     let i=0;
//     while(i<arr.length){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     i++;
//     }
//     console.log(max)
// }
// findmax()

///////////  REST OPERATOR ////////////

// function values(...num){
//     return num
// }
// console.log(values(50,100,200))

//////////  ARRAY ////////////////////

// const arr=[25,78,69,41,63,45]
// function myclassthirdvalue(arr){
//     return (arr)
// }
// console.log(myclassthirdvalue(arr))

/////////////////  SWAP  /////////////////////
// let a=4
// let b=5
// function swap(a,b){
//     let c=a
//      a=b
//      b=c
//      console.log(a,b)
// }
// swap(45,78)

////////////  MERAKI QUESTION //////////////

// let arr1 = [2, 6, 18, 10, 3, 75]
// let arr2 = [6, 19, 24, 12, 3, 87]
// function myarr() {
//     let i = 0;
//     while (i < arr1.length) {
//         let j = 0;
//     while (j < arr2.length) {
//             if (arr1[i] % 2 == 0 && arr2[j] % 2 == 0) {
//                 console.log("dono even hai")
//             }
//             else {
//                 console.log("dono even nhi hai")
//             }
//             j++;
//         }
//         i++;
//     }
// }
// myarr()

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let n=60
// function eligibility(){
//     if(n>=18){
//         console.log("you are eligible")
//     }
//     else{
//         console.log("not eligible")
//     }
// }
// eligibility()

//;;;;;;;;;;; PERFECT NUMBER ;;;;;;;;;;;;;;;;;;;

// function perfect(n){
//     let sum=0;
//     let i=1;
//     while(i<n){
//     if(n%i==0){
//      sum=sum+i;

//     }
//     i++;
// }
// if(sum==n){
//     console.log("YES - THIS IS PERFECT NUMBER")
// }
// else{
//     console.log("NO -THIS IS NOT A PERFECT NUMBER")
// }
// }
// perfect(5)

//''''''''''''''''''''''''''''''''''''''''''
//'''''''''''''' LEARN ''''''''''''''''''''''''''''
//''''''''''''''''''''''''''''''''''''''''''
// let input = require("readline-sync");

// function evenOrOdd(n){
//     if(n % 2 == 0){
//        console.log(n)
//     }
// }


//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// let a = [1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < a.length ; i++){
//     if (evenOrOdd(a[i])){
//         console.log(a[i])
//     }
// }
//]]]]]]]]]]]] FUNCTION DEACLEARETION ]]]]]]]]]]]]]]]]]]
// greet("sajal")
// function greet(n){
//     console.log("hello" + " " + n)
// }

  //]]]]]]]]]] FUNCTION EXPRESION / ANONYMOUS ]]]]]]]]]]]]]]]]                     

// let b = function (n){
//     console.log("hello" + " " + n)
// }
// b("dsbfskd")

// let c = []
// // let d = []

// let n = input.question("enter the length of 1st array :- ")
// for (let i = 0 ; i < n ; i++){
//     let ele = parseInt(input.question(`enter the ${i+1} element :-  `));
//     c.push(ele)
// }

// let n1 = input.question("enter the length of 2nd array :- ")
// for (let i = 0 ; i < n1 ; i++){
//     let ele = parseInt(input.question(`enter the ${i+1} element :-  `));
//     d.push(ele)
// }

// function common(a,b){
//     for ( let i = 0; i , a.length; i++){
//         for (let j = 0; j < b.length; j++){
//             if(a[i] == b[j]){
//                 console.log(a[i]);
//             }
//         }
//     }
// }

// common(c,d)

//]]]]]]]]]]]]]]]]]]]]]]

// function createarray(array,len){
    
//     for  (let i = 0; i < len; i++){
//         let ele = input.questionInt(`enter the ${i+1} element : - `);
//         array.push(ele);
//     }
//     return array
    
// }

// console.log(createarray([],8))

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// function perfect(n){
//     sum = 0;
//     for (let  i = 0; i <= n/2; i ++){
//         if (n % i == 0){
//             sum += i;
//         }
        
//     }
//     if  (sum == n){
//         return ("Yes It is a perfect number ")
//     }
//     else{
//         return ("It's not a perfect number ")
//     }
    
// }


// console.log(perfect(5))

//[============ AVERAGE =======================

// function average(num1,num2,num3){
//    let sum=num1+num2+num3
//    console.log(sum)
//     console.log(sum/3) 
// }
// (average(3,4,5))

//;;;;;;;; EVEN OR ODD ;;;;;;;;;;;;;;;;;;;;;;

// function  showNumber(limit){
//    let i=0;
//    while(i<=limit){
//     if(i%2==0){
//         console.log("EVEN")
//     }
//     else{
//         console.log("ODD")
//     }
//     i++;
//    }
// }
// showNumber(5)

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// function multiplesOFNumbers(limit){
//     let i=1;
//     while(i<=limit){
//         if(i%3==0 || i%5==0){
//             console.log(i)
//         }
//         i++;
//     }
// }
// multiplesOFNumbers(10)

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// function license_checker(speed){
//   let point=1;
//   // let speed=0;
//   if(speed<70){
//     console.log("OK")
//   }
//   if(speed>70){
//      while(speed==70){
//       let point=0;
//    console.log(point)

//      }
//      {
//       speed=speed+5
//       point++;
//      }
//   }
//    console.log(point)
// }

// license_checker(135)

//;;;;;;;;;;;;;SQUARE ;;;;;;;;;;;;;;;;

// function squaresofnumbers(n){
//   let i=1;
//   let sum=1;
//   while(i<=n){
//     sum=i**2
//     console.log(i,"of square" ,":", sum)
//     i++;
//   }
// }
// squaresofnumbers(20)


/////////////////////////////////////////////

let arr=[1,2,3,4,5,6];
let a=[];
let i=0;
while(i<arr.length){
    if(arr[i]%2==0){
    a.push(10)
}
else{
    a.push(arr[i])
}
i++;
}
console.log(a);

