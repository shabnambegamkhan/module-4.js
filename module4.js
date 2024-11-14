
const input = require("readline-sync")

// let ab=6
// x=0
/////////////////

// x=!x
// console.log(x)

//////////////////////// TERNARY OPERATOR //////////////////////////////////////////

// let a="shabbo"
// // let value = name =="shabnam" ? name : "KHAN"
// let value = a=="shabnam" ?  a: "KHAN"
// console.log(value)
// console.log(a)

/////////////////////////////////////

// let arr=[1,2,3,4,5]
// console.log(typeof arr)
// let name={name: "shabnam" }
// console.log(name)

// ////////////////////////////
//      a=20
// switch(a<18){
//     case (18):
//     console.log("not eligibal for vote")
//     break;
//     case (a>18):
//      console.log(" eligibal for vote")
//      break;
//      default:
//         console.log("not found")
//         break;
// }

///////////////// //////////////////*** SWICH CASE *****/////////////////////////////////////////////////////

// let a=18;
// switch(false){
//     case (a>0 && a<=18):
//     console.log("young")
//     break;
//     case (a>19 && a<=50):
//     console.log("adult")
//     break;
//     case(a>50 && a<=90):
//     console.log("old")
//     break;
//     default:
//     console.log("not found")
//     break
// }
//*********************************** */

// let name="shabbu"
// switch (name){
//     case "shab":
//     console.log(realname)
//     break;
//     case "shabnam":
//     console.log('good')
//     break;
//     default:
//     console.log('notfound')
// }                 

/////////////////////////////////////////////

// let day =7

// switch(day){
//     case 0:
//         console.log('sunday')
//         break;
//     case 1:
//         console.log('monday')
//         break;
//     case 2:
//         console.log('teusday')
//         break;
//     case 3:
//         console.log('wednesday')
//         break;
//     case 4:
//         console.log('thursday')
//         break;
//     case 5:
//         console.log('friday')
//         break;
//     case 6:
//         console.log('suterday')
//         break;
//     default:
//         console.log("not found")
//         break;
// }

///************************************** */

//  let num1=10;
//  let num2=5;
//  let value=10%5;

//  switch(value){
//     case (10+5):
//         console.log("addition")
//         break;
//     case (10-5):
//         console.log("substraction")
//         break;
//     case (10*5):
//         console.log("multiflication")
//         break;
//     case (10/5):
//         console.log("division")
//         break;
//     default:
//         console.log("not found")
//         break;
//  }


//////////////////////////////////////////////// LOOPS /////////////////////////////////////////////////////

// let properties=[ "shabnam", "age", "waight"]
// for (object of properties){
//     console.log(properties)

// }

// (1)   ////////////////////************ FOR LOOP*****************/////////////////// */

// for(let i=1; i<=10; i++){
//   console.log(i)
// }

//  (2)  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let product=1;
// for(let i=1; i<10; i++){
//     product*=i;
//     console.log(product)
// }
// (3)  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let sum=0;
// for (let i=0; i<100; i++){
//     if(i%5==0){
//         // i++;
//     }
//     else{
//         sum=sum+i;
//         console.log(sum)
//     }
// }


// (1) ////////////////////******* */  WHILE LOOP *******/////////////////////////

// let i=10;
// while(i>0){
//    console.log(i)
//    i--;
// }

// (2)  ;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let i=8;
// while(i>0){
//     console.log(i)
//     i--;
// }

// (3)  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let count=0;
// let num=10;
// let i=1;
// while(i<num){
//    if(num<1){
//       console.log(num)
//       i++;
//    }
//    else{
//    num=Math.floor(num/2);
//    count++;
//    // console.log(num)
//    // console.log(count)
// }

// i++;
// }
// console.log(num)
//    console.log(count)

// (1) ////////////////////////// *************  FOR IN LOOP ***********//////////////////////////////////

// let fruit= {"apple":200, "graps":300, "mango":50, "orang":40}
// for(let key in fruit){
//    console.log(`${key}:${fruit[key]}`);
// }

// (2) ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let student = {"raju":40, "bhanu":67, "teju":80, "jinu":90}
// let i=0;
// for (let marks in student){
//    if(student[marks]>80 ){
//       console.log(`${marks}: ${student[marks]}`)
//    }
//    else{
//       i++;
//    }
// }

// (3) ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let product= {"aata":20, "daal":909, "chaval":200, "oil":12 }
// for(let value in product){
//    if(product[value]<100){
//       console.log(`${value}: ${product[value]}`)
//    }
// }

// (1)  ////////////////////////////******** FOR OF LOOP*******//////////////////////////// */

// let color= ['green:12', 'blue', 'white', 'black']
// for (let name of color){
//    console.log(name)
// }

// (2)  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let sum=0;
// let rate= [10,5,89,456,213,48,565]
// for (let value of rate){
//      sum=sum+value
// }
// console.log(sum)

// (3)  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let sum=0;
// let total=0;
// let count=0;
// let number= [21,56,78,23,45,98,7845,376]
// for (let numbers of number){
//     let i=0;
//     if(i<number.length){

//     sum=sum+numbers
//     count++;
//     console.log(count)
// }
// }
// total=sum/count
// console.log(total)

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// let students=[{name:'shabnam'},{name:'tarique'}]
// for (let student in students){
//     console.log(student)
// }

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



// let name = [{name:'shabnam'},{name:'poonam'}]
// for (let names in name){
//     console.log(names)
// }

/// (1) ////////////////////////********* */ DO WHILE LOOP ************/////////////////////////////////

// let value=1
// do {
//     console.log(value)
//     value++;
// } while (value<=5);

//  (2) ;;;;;;;;;;;;;;;;;;;;;;;;;

// let num=20;

// do {
//     console.log(num)
//     num=num-3;

// } while (num>=0);


//  (3) ;;;;;;;;;;;;;;;;;;;;;;;;;;

// let num=2;
// let total=1;
// do {
//     console.log(num)
//     num=num*2;
// } while (num<200);

/// (1)  /////////////////////////////*************** */ FOR EACH  *****************////////////////////////////

// let animal= ["cat", 'dog', 'cow', 'bafellow']
// animal.forEach(function (animals) {
//     console.log(animal)
// })
// let animal= ["cat", 'dog', 'cow', 'bafellow']
// animal.forEach(function (animals) {
//     console.log(animal)
// })


//  (2)  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let names =["rohit", "neha", '54', "aarti", "karan"]
// names.forEach(function(name){
// console.log(name.toUpperCase())
// })

//  (3)  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let  numbers=[2,5,78,56,21,23,5]
// let updated =numbers.forEach(function (number){
//    let  total=number*2;
//    return total;
// })
// console.log(updated)

//*************************************
//*************************************
//*************************************
//************************************* */ */ */ */


// let arr={name:"shabnam", age:20, waight:52, class:12}
// for(let key in arr){
//    console.log(`${key}: ${arr[key]}`)
// }

//''''''''''''''''''''''''''''''''''''''''''''''''

// let arrs=["shabnam", 'age', 52,]
// for(let arr  in arrs){
//    console.log(`${arr}`)
// }

//''''''''''''''''''''''''''''''''''''''''''''''''''''

// let n = input.question("enter the number : ")
// let i = 1;
// while (i <= n) {
//    if (i % 5 == 0) {
//       console.log("tarique")
//    }
//    if (i % 5 == 1) {
//          console.log("shabnam")

//       }
//       else {
//          console.log(i)
//       }
//    i++;
// }


/////////////////////////// *************SCOPE*********** ///////////////////////////////////

//\\\\\\ GLOBAL SCOPE\\\\\\\\

// const  class1=20;
// var    class2=60;
// let    class3=50;
// function mystudent(){
//     console.log(class1)
//     console.log(class2)
//     console.log(class3)
// }
// mystudent();

//\\\\\\\\ FUNCTION SCOPE ////////

// // const  class1=20;
// function mystudent(){
//     var  class1=20;
//     var    class2=60;
//     let    class3=50;
//     console.log(class1)
//     console.log(class2)
//     console.log(class3)
// }
// mystudent();
// console.log(class1)

//\\\\\\\ BLOCK SCOPE \\\\\\\\\\\\

// {
//     const  class1=20;
//     var    class2=60;
//     let    class3=50;
    
// }
//     // console.log(class1)
//     console.log(class2)
//     // console.log(class3)

//\\\\\\\\ LOCAL SCOPE \\\\\\\\\

// function myname(){
//     const name ="shabnam"
//     console.log(name)
// }
// myname();
// console.log(name)

//\\\\\\\\\\\\\ LAXICAL SCOPE \\\\\\\\\\\\\

// function outerloop(){
//     const outerscop=20;

//     function innnerloop(){
//         const innerscop=60;
//         console.log(`${outerscop} ${innerscop}`)
//         // console.log(innerscop)
//     }
//     innnerloop();
// }
// outerloop();

//....................

// function  a(){
//     let one=1;
//     function b(){
//         let two=2;
//         function c(){
//             let three=3;
//             console.log(one)
//             console.log(two)
//             console.log(three)
//            }
//         c()
//     }
//     b()
// }
// a()
//;;;;;;;;'''''';;;;;;;;;;
// if(true){
//     var v1=12;
//     let v2=20;
//     console.log(v1)
//     console.log(v2)

// }
// console.log(v1)
// console.log(v2)

////////////////*******//////////// FUNCTION **********//////////////////////////////// */

// function shabnam(number){
//     return number+ 2
// }
// console.log(shabnam)
// let result = shabnam(4)
// console.log(result)

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// function myname(){
//     return "shabnam"
//     // console.log(myname())
// }
// // myname();
// console.log(myname())
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// const greet=function(){
//     console.log("Hello,world")
// }
// greet()

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// function username (){
//     console.log("Hello," + "shabnam,"+"khan")
// }
// username();

//'''''''''''''''''''''''''''''''''''

// function mystudent (){
//     return "hello student"
// }
// let name = 'shabnam'
// let str = mystudent(name)
// console.log(str)
// let a=9;
// let b=8;
// function myFunction(sum){
// //  let a=9;
// //  let b=8;
//  return(a+b);
// }
// console.log(myFunction(a+b));
//...................................

// const arr=[1,2,3,4,5];
// function myFunction(arr){
//     for(let i=0;i<5;i++){
//         if(i%2===0){
//           console.log(arr[i]);
//         }else{
//             console.log(arr[i]);
//         }
//     }
//     return;
// }
// myFunction(arr);

//(1) ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// function greet(){
//     console.log("hello world")
//     // return a
// }
// // console.log(a)
// greet();

//' (2) '''''''''''''''''''''''''
// function add(a,b){
//     return a+b;
// }
// console.log(add(3,6))
// add();
// (3)''''''''''''''''''''''''''
// function greetpersion(name="strenger"){
//   console.log(`Hello, ${name}`)
// }
// greetpersion("shabnam");

//(4) ''''''''''''''''''''''''''
// function myFunction(number){
//     return number*2;
// }
// console.log(myFunction(8))

// (5) //'''''''''''''''''''''''''''

// function myproduct(num1 ,num2){
//     return num1*num2
// }
// console.log(myproduct(8,8))

//(6) ''''''''''''''''''''''''''''

// function number(){
//     let i=1;
//     while(i<5){
//         if(i%2==0){
//             console.log(i,"TRUE")
//         }
//         else{
//             console.log(i,"FALSE")
//         }
//         i++;
//     }
// }
// number();
// (7)'''''''''''''''''''

// function num(n){
//     while(n>0){
//         console.log(n)
//         n--;
//     }
// }
// num(6);
// num(10);

//(8) ''''''''''''''''''''

// function fectorial(n){
//     let M=1
//     while(n>0){
//          M=M*n
//         n--;
//     }
// console.log(M)

// }

// fectorial(7);`9`

//'''''''''''''''''''''

// function name(a,b){
//     return a/b;
// }
// // name(4,2);
// let update=name(4,2);
// let total=update+10;
// console.log(total)

//******** CALLING FUNCTION ******** */

// function deta(name){
//     return ('hello'+ name + 'wellcome for coming')
// }
// let all="shabnam"
// console.log(deta(all))

////'''''''''''''''''''''''''''''''

// function add(a,b){
//     return a+b;
// }
// let sum=add(6,5)
// console.log(sum)

//'''''''''''''''''''''''''''''

// function main(name){
//     console.log(`hii, ${name}`)
// }
// main("shabnam")
//''''''''''''''''''''''''''''
/////////////// FUNCTION PRIME NO. /////////////////////

// function myFunction(n){
//     let i=1;
//     let count=0;
//     while (i<=n){
//     if(n%i==0){

//         count++;
        
//      }
//     // else{
//     //     i++;
//     // }
//     i++;
//     }
//     if(count==2){
//         console.log("prime no.")
//     }
//     else {
//       console.log("not prime")
//     }
    
// }
// myFunction(6)

/////////////////////////////////////////////////////////////////

// function myFunction(a, b,){
//     console.log(a*b)
// }
// myFunction(3,2)

///////////////////////////////////////////////////////////

// function shabnam(a,b){
//     return a+b
// }
// let total =shabnam(9,3)
// console.log(total)

//////////////////////////////////////////////////////

// let  shabnam=(a,b)=>{
//     return (a+b)
// }
// let my= shabnam(2,3)
// console.log (my)

///////////////////////////////////   TIME  FUNCTION  ////////////////////////////////

// setTimeout (function (){
//     console.log("I AM SHABNAM ")
    
// }, 1000)

// setTimeout (function (){
//     console.log("hii")
    
// }, 2000)

// setTimeout (function (){
    
//     console.log("i am graduate")
    
// }, 3000)

// setTimeout (function (){
    
//     console.log("i am a student")
// }, 4000)

/////////////////////////////////////////////
/////////////////////////////////////////////
//{{{{{{}}}}{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}
// ////////////  object  ///////////////////


// (LITERALS OBJECT)

// let mydetails={
//     name: "shabnam",
//     age : 30
    
// }
//////////////////////////////////{DELETE KEY}
//  delete mydetails.name;        
// console.log(mydetails)
///////////////////////////////////{PRINT KEY VALUE}
// console.log(Object.keys(mydetails))     

//++++++++++  {FUNCTION ME EK  VALUE KO PRINT KRNA } ++++++++++++++
// let person = new Object();
// person.firstname = "shabnam";
// person.lastname  = "khan";
// person.age       = 20
// person.greet = function(){
//     console.log("hello,"+ this.lastname)
// }
// person.greet()
// // /////////////////////////////////{ DOT NOTATION }
// console.log(person.greet())



// let mydetails={
//     name: "shabnam",
//     age : 30
// }
//     mydetails.greet = function(){
//     console.log(`hello , ${this.name}`)
// }

// mydetails.greet()
//  console.log(mydetails)
///============================FREEZE THE OBJECT
// // Object.freeze(mydetails)
//==============================CHANGE THE VALUE
// mydetails.age=60
// console.log(mydetails)
//============================== PRINT THE KEY 
// console.log(Object.keys(mydetails))
//============================== PRINT THE VALUE
// console.log(Object.values(mydetails))
//=================================
// console.log(Object.assign({},mydetails))
//================================ CHANGE KR SAKTE H LEKIN ADD NHI KAR SAKTE
// console.log(Object.seal(mydetails))
// mydetails.name="afrin" 
// ============================= ADD THE VALUE
//  mydetails.city="barsoor"
// console.log(mydetails)


//@@@@@@@@@@@@@@@@@@   CRUD OPRETION  @@@@@@@@@@@@@@@@@@@

// let myditails={
//     firstname: "shabnam",
//     lastname: "khan",
//     age :  20,
//     email: "shabnambegamkhan23@navgurukul.org"
    
// }
// console.log(myditails)

// @@@@@@@@@@@@@@@@@@@@@@@@@ CREAT OPRETION  @@@@@@@@@@@@@@@

//   myditails.bloodgroup="B+"
//   console.log(myditails)

// @@@@@@@@@@@@@@@@@@@@@@@@@  READ OPRETION @@@@@@@@@@@@
// &&&&&&&&&&&&&&&&&&&&&&&&&  READ  THE SPECIFIC PROPERTY &&&&&&&&
// console.log(myditails.email)

// &&&&&&&&&&&&&&&&&&&&&&&&&&   READ ALL THE PROPERTY  &&&&&&&&&
// for (let key in myditails){
//     if(myditails.hasOwnProperty(key)){
//         console.log(`${key}: ${myditails[key]}`)
//     }
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@  UPDATE OPRETION  @@@@@@@@@@@@@

// myditails.lastname="begam"
// console.log(myditails)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@   DELETE  THE PROPERTY  @@@@@@@

// delete myditails.age;
// console.log(myditails)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@

///////////////////////////////////////////
//0000000000000000000000000000000000000000
//0000000000   ARRAY  00000000000000000000
//0000000000000000000000000000000000000000

// const fruits=["mango", "orange", "graps", "apple"];

//  console.log(fruits.length)                   //print the length the array

//  console.log(fruits.toString())                 //print all value


// let fruit = fruits[2]
// console.log(fruit);                             // print the index value

// console.log(fruits.join(" - "));                 // join the all array value

// console.log(fruits.pop());
// console.log(fruits);                             // remove the value

// console.log(fruits.push("shabnam"));
// console.log(fruits);                              // add the value


// const fruits=["mango", "orange", "graps", "apple"];


// console.log(fruits.shift());                   
// console.log(fruits);                              // remove the value of first value

// console.log(fruits.unshift("shabnam"));
// console.log(fruits);                              // add value in first

// delete fruits[1];
// console.log(fruits);                               // delet the element
// console.log(fruits.length)


// let arr1=["boll", "icecream", "ring",  "bag"];
// let arr2=["apple", "mango", "graps",  "banana"]
// let mainArray = arr1.concat(arr2)                         // add the 2 array
// console.log(mainArray);


// const fruits=["mango", "orange", "graps", "apple"];
// fruits.copyWithin(1,2)                                   //copy the element 
// console.log(fruits);                                      //(2) kaha se start hoga , //(3) kon sa element print hoga


// let arr1=[1, 2, [3, 4, ],5, [6, 7, 8]];
// let flatArry= arr1.flat()
// console.log(flatArry);                                     //add in one arry


// const fruits=["mango", "orange", "graps", "apple"];
// fruits.splice(2,2);
// console.log(fruits);


//EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
//EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
//         ARRAY ITERATION  METHODS


// let arr=[1,2,3,4,5,6,7,8,9]

// let less=arr.some(myFunction);
// function myFunction(value){
//     return value>11
// }
// console.log(less);                              //  all value passed or not

// let value=Array.from(arr)
// console.log(value);                              // sabhi ko alag alag krke dega


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//             STRING
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// let name= "shabnam\begam"      //  (\) pahle or baad vala spelig delete ho jata h 
// let name = "shabnam\\ begam"      //   (\\)  ek \ ke sath pura word print krta h
// let name= 'hshabnam \r begam'
// console.log(name);                   // index print 

let name ='shabnam'
console.log(name.slice(4));
// console.log(name);
