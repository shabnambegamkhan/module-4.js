

//////  10/6/2024////////////
////////////////////////////
/////////////////////////////

const input = require("readline-sync")
//;;;;;;;;; LOOP ;;;;;;;;;;
// Number. revers
// name count 
// prime number sum


// ++++++++++ REVERSE +++++++++++++++

// let n=input.questionInt("enter the  length of number : ")
// let arr=[]
// let i=0;
// while(i<n){
//     arr[i]= input.questionInt("enter the element : ")
//     i++;
// }
// console.log(arr)

// let arr1=[]
// let j=n-1;
// while(j>=0){
//     arr1.push(arr[j])
//     j--;
// }
// console.log(arr1)


//++++++++++++  NUMBER COUNT ++++++++++++++++++++++

// let n=input.questionInt("enter the length : ")
// // let m=input.questionInt("enter the number : ")
// let count=0;
// let i=1;
// while(i<=n){
//     console.log(i)
//     count++;
//     i++;
// }
// console.log("count the total number", ":", count)


//++++++++++++++ N PRIME NUMBER ++++++++++++++++++

// let n = input.questionInt("enter the length :  ")
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let sum = 0;
//     if (j <= i) {
//         if (i % j == 0) {
//             sum = sum + j;
//             sum++;
//         }
//         j++;
//     }
//     if (sum == 2) {
//         console.log("print the prime no.", i);
//     }
//     sum++;
//     i++;
// }

////////////////////////////
///////////////////////////

///////////////////////////////////  OBJECT  //////////////////////

// let myobject={
//    name: "shabnam",
//    age : 30
// }
// console.log (myobject["name"])
//.................................ek sath likhne ke liye
// let cars={
//     make:"toyota",
//     model:"corolla",
//     year :2020,

// carsdetails:  function(){
//     return `${this.make} ${this.model} ${this.year}`
// }
// }
// console.log(cars.carsdetails())


/////////////////    CRUD QUESTION ////////////////

// let car = {
//     make: "Toyota",
//     model:"Corolla",
//     year : 2020
// }
// console.log(car)

/////////  creat  ///////

// function newfunction(obj,key,value){
//     obj[key]=value
// }
// newfunction(car,'color','red')
// console.log(car)
//,,,,,,,,,,,,,,,,,,,,
// car.color="red"
// console.log(car)

///////////////   READ  //////////

// console.log(car)

// function newfunction(obj,key,value){
//     return obj[key]
// }
// console.log(newfunction(car,'model'))

//////////////  UPDET ///////////

// function updatet(obj,key,value){

//     obj[key]=value

// }
// updatet(car,'year',2030)
// console.log(car)

//////////  DELETE /////////////

// function deletproperty(obj,key){
//     delete obj[key];
// }
// deletproperty(car,"model")
// console.log(car)


//************************* */

// let  mydeta={
//     name:"shabnam",
//     age :20,
//     email : "shabnamkhan23@navgurukul.org",
//     city : "geedam"
// }
// console.log(mydeta)

// mydeta.day='sunday'
// console.log(mydeta)


// mydeta.city="barsoor"
// console.log(mydeta)

// delete mydeta.age
// console.log(mydeta)

//888888888888888888888888888888
// const greet = () => {
//     console.log("Hello, world!");
// };
// greet()

//88888888888888888888888888888

// function mydatiles(name){
//     console.log(`hello,${name}`)
// }
// mydatiles("Shabnam") 


// let ng=["ram","seeta","rita","neeta","tata","shabnam"]
// function ngdeta(){
//     let i=0;
//     while(i<ng.length){
//      if(ng[i]=="tata"){
//         console.log(ng[i])
//         break;
//     }
//      i++;
//     }
// }
// ngdeta()


//5555555555555555555555555555
//5555555555555555555555555555
//5555555555555555555555555555
///////  1/07/2024 ////////

//////// (1) FUNCTION ADD AND MULTIPLAY  /////////////

// let arr=[1,2,3,4]
// function add(){
//     let i=0;
//     while(arr[i]<=arr.length){
//         sum=arr[i]+2
//         multi=sum*3
//         console.log(multi)
//         arr[i]++;
//     }
// }
// (add())

//////// (2)  PRIME NUMBER //////////

//  let a=input.questionInt("enter the number : ")
//  let b=input.questionInt("enter the number : ")
//   function dice(){
//     let sum=a+b
//     if(sum%2!==0){
//         console.log("Alice")
//     }
//     else{
//         console.log("Bob")
//     }
//   }
//   dice()


/////////// (3)   TEX ////////////

// let n=input.questionInt("enter the length of array : ")
// let arr=[]
// let i=0;

// while(i<n){
//     arr[i]=input.questionInt("enter the element : ")
//     i++;
// }
// console.log(arr)

// let j=0;
// let subtotal=0;
// let dis=0;
// let div=0;
// while(j<n){
//     subtotal=subtotal+arr[j]
//     j++;
// }
// // console.log(subtotal)

// if(subtotal>50){
//     dis= (10/100)*subtotal
//     div=(8/100)*subtotal
// }
// else{
//     console.log(subtotal)
// }

// console.log("subtotal:",subtotal, "Discount:",10, dis)
// console.log(div)

////////  (4)  STRANGE ADDITION OPERATION ///////

// let N=input.questionInt("enter the value : - ")
//  function strangeadd(){
//     let  i=1;
//     let sum=0;
//     while(i<=N){
//     // while(i<=i){
//         sum=sum+i*i
//         console.log(sum)
//         i++;
//     }
//     }
// // }
//  strangeadd()

///////////  (5) ////////////

//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// let C=input.questionInt("enter the current value : -")
// let W=input.questionInt("enter the temperature : - ")
// let T=5;

// switch (true){
//     case (C<=T<=50):
//         console.log("wearing a heavy coat")
//         break;
//     case ((C<=T>50) && (0<=T<68)):
//         console.log("wearing light jacket")
//         break;
//     case (C<=T==68):
//         console.log("wearing light clothing")
//         break;
//     default:
//         console.log("NOT FOUND")
// }

// switch (true){
//     case (W<=T<50):
//         console.log("wearing a heavy coat and bringing an ubprella")
//         break;
//     case ((W<=T>50) && (W<=T==68))  :  
//          console.log("wearing a light jacket and bringing an umbrella")
//          break;
//     case (W<=T>68):
//         console.log("wearing light clothing and bringing an umbrella")
//     default:
//         console.log("NOT FOUND")
// }

//RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// let C=input.questionInt("enter the current value : -")
// let W=input.questionInt("enter the temperature : - ")

// if (W==0){
//     console.log("it is not raining")
// }
// else{
//     console.log("it is raining")
// }

// if (0<W<50){
//     console.log("wearing a heavy coat")
// }
// else if((0<W>50) && (0<W<68)){
//     console.log("wearing a light jacket")
// }
// else if(0<W==68){
//     console.log("wearing light clothing")
// }

// if (1<W<50){
//     console.log("waring a heavy coat and bringing an umbrella")
// }
// else if((1<W>50) && (1<W<68)){
//     console.log("wearing a light jacket and bringing an umbrella")
// }
// else if(1<W==68){
//     console.log("wearng light clothing and Winging an umbrella")
// }


/////////////////////////////////

// function  collatzlength(n){
//     let count=0;
//     while (n!==1){
//     if(n%2==0){
//         n=n/2;
//     }
//     else {
//         n=n*3+1;
//     }
//     count++;
//     }
//     return count;
// }
// console.log (collatzlength(6))

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// ( 1 ) HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

// let arr=[{name:"you", age: 56,cloth:"jinse"},
//          {name: "we" , age:65, cloth:"trouser"},
//          {name: "Us" , age:68, cloth: "shirt"}]


//    let TargetAge=input.questionInt("enter the age : ")
//    let newCloth=input.question("new cloth = ")
//    let obj={};
//    for(let i=0; i<arr.length;i++){
//     if(TargetAge===arr[i].age){
//     arr[i].cloth = newCloth
//     break
//     }
//     else{
//        obj.name=input.question("enter the name : ")
//         obj.cloth=input.question("enter the cloth name : ")
//         obj.age=TargetAge
//         arr.push(obj)
//         break
//     }
// }      
// console.log(arr)

// (2 ) HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH


// let arr=[{name:"you", age: 56,cloth:"jinse"},
//          {name: "we" , age:65, cloth:"trouser"},
//          {name: "Us" , age:68, cloth: "shirt"}
//         ];

// let TargetAge=input.questionInt("enter the new age : = ")

// let obj={};

// for(let i=0; i<arr.length; i++){
//     if(TargetAge===arr[i].age){
//         arr.splice(i,1)
//         // console.log(arr);
//         break;
//     }
//     else{
//         obj.name=input.question("enter the name : = ")
//         obj.age=TargetAge;
//         obj.cloth=input.question("enter the  cloth : = ")
//          arr.push(obj)
//         break;
//     }
// }
// console.log(arr);

// ( 3 ) hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh


// let arr = [{ name: "you", age: 56, cloth: "jinse" },
// { name: "we", age: 65, cloth: "trouser" },
// { name: "Us", age: 68, cloth: "shirt" }];


// function updataarr(arr, TargetAge) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].age === TargetAge) {
//             arr[i].cloth = newCloth;
//             let newcloth=input.question("enter the new cloth : ")

//             break;
//         } else {
//             //   arr.push(obj);
//             let newname = input.question("enter the name:-");
//             let newCloth = input.question("enter the cloth:-");
//             let obj = { 'name': newname, 'age': TargetAge, 'cloth': newCloth };
//             arr.push(obj)
//             break;
//         }
//     }
//     return arr;


// }
// let TargetAge = input.questionInt('enter the age:-');

// console.log(updataarr(arr, TargetAge));





