const input = require("readline-sync")


// let mydetails= {
//     name:"shabnam",
//     age: 22
// }
// console.log(mydetails.hasOwnProperty("name"))

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// function main(mydetails){
//     for(my in mydetails){
//         console.log(mydetails[my]);
//     }
// }
// main(mydetails)

// function my(mydetails){
//     for(let main in mydetails){
//         console.log(main +"=" +mydetails[main]);
//     }
// }
// my(mydetails)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// let campus= {"camp_name":"Bangalore_campus",
//            "establish":2016,"election":"three_months"}

//     for(let eachkey in campus){
//         console.log(campus[eachkey]);
//     }

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':400}


// function CombineArray(d1,d2){
//   let main ={}
//   for(let str in d1){
//     main[str]=d1[str]
//     // console.log(main);
// }
// for(let str in d2){
//     main[str]+=d2[str]
//     console.log(main);
// }
// }
// CombineArray(d1,d2)

//===================================
//===================================

// let n=input.questionInt("enter the number = ")

// let i=1;
// while(i<=n){
//     let multi=i*i;
//     i++;
//     console.log(multi);
// }

// //======================================


// let a1={1:10, 2:20}
// let a2={3:30, 2:40}
// let a3={5:50,6:60}

// let arr={}
// for(let key in a1){
//  arr[key]= a1[key]
// }
// // console.log(arr);

// for(let key in a2){
//     // arr[key]=a2[key]
//     arr[key]+=a2[key]

//     console.log(arr);
// }

// for(let key in a3){
//     arr[key]=a3[key]
// }
// console.log(arr);


//=======================================

// let dict ={name:"Raju", marks:56}

// let n =input.question("Eenter the input = ")
// for(let key in dict){

// if(dict.key==n){
//     console.log("exit");

// }
// else{
//     console.log("not exit");
// }
// }

// // //========================================

// let arr= {'data1':100,'data2': -54,'data3': 247}

// let sum=0;
// for(let key in arr){
//     sum+=arr[key]
// }
// console.log(sum);

//=============================================

// let myDict = {
//     1: 'NAVGURUKUL', 2: 'IN', 3: {
//         'A': 'WELCOME',
//         'B': 'To', 'C': 'DHARAMSALA'
//     }
// }

// for (let key in myDict) {
//     if (typeof myDict == "object") {

//      if (myDict[[key].key == "A"]) {
//             delete (myDict[key].key)
//         }
//     }
// }
// console.log(myDict);

//============================================

// let list1=['one', "two", "three", "four", "five"]

// let list2=[1,2,3,4,5]
// let i=0;
// let arr=[]
// while(i<list1.length){
//     let keyValuePair={[list1[i]]:list2[i]};
//     arr.push(keyValuePair)
//     i++;
// }
// console.log(arr);

//===========================================


// let mainString = "My name is kumar, and my friend’s name is Dhamu"
// let subString = "is"

// let splitString = mainString.split(" ");
// let count = 0;

// for (let i of splitString) {
//   if (i == subString) {
//     count++
//   }
// }
// console.log(count);

//////////////////////////////////////////

//////////////////////////////////////////////////////////

// let studentDetails = {}
// function studentdeta(n) {

//     let i = 0;
//     while (i < n) {
//         let name=input.question("Enter the name = ")
//         let maks=input.question("Enter the maks= ")
//         studentDetails[name]=maks
//         i++;

//     }
//     console.log(studentDetails);
// }
// let n=input.questionInt("Enter the length of arr = ")

// studentdeta(n)

/////////////////////////////////////////////////////////////


// let n = "MISSISSIPPI"
// let counts={}
// for(let i of n){
//     if(counts[i]){
//         console.log(counts[i]);
//         counts[i]+=1
//     }
//     else {
//         counts[i]=1
//     }
//     // console.log(i);
// }
// console.log(counts);