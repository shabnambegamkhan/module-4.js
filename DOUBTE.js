const input = require("readline-sync")

///////////////////////////////////////
////////////  13  //////////////////////////
// let myDict = {
//     1: 'NAVGURUKUL', 2: 'IN', 3: {
//         'A': 'WELCOME',
//         'B': 'To', 'C': 'DHARAMSALA'
//     }
// }

// for (let key in myDict) {
//     if (typeof myDict == "object") {

//      if (myDict[[key].key == "A"]) {
//             delete myDict[key].key
//             console.log(myDict);
//         }
//     }
// }
// console.log(myDict);

////////////// 15 ///////////////////////////


// let arr=[
//   {"firtst":'1'},
//   {"second": '2'},
//   {"third": '1'},
//   {"four": '5'},
//   {"five":'5'},
//   {"six":'9'},
//   {"seven":'7'}
// ]

//  let mainarray=[]

//  for(let key1 in arr){
//   mainarray.push(arr[key1])
//    for(let key2 in arr){
//     mainarray.push(arr[key2])
//     mainarray.includes(key1[key2])
//   }
// }
// console.log(mainarray);


//////////////////////////////////////////

// let bike =
// {
//   brand: "bjaj",
//   engine: "125cc",
//   name: "pulsur"
// }

// for (let i in bike){
// console.log(bike["brand"]);
// bike .price=1000
// console.log(bike);
// delete bike.name
// console.log(bike);
// }



// let bike =
// [{
//   brand: "bjaj",
//   engine: "125cc",
//   name: "pulsur"
// },

// {colors: {dark:"black", light:"red"},
// prices:[1,25,85,78,1.5]}];

// for(let i in bike[1].colors)

// console.log(bike[1].colors[i]);

/////////////////////////////////////////////////////////

find = []

function findID (orders,city){
  for(let key in orders){
    // console.log(key);
    if(city==orders[key].city){
     find.push(orders[key].orderID)
    }
  //   else{
  //     console.log(find);
  //     break
  //   }
    
  }
  console.log(find);
}

const orders= [
  {orderID: 103, city: "chennai", productName: "Tablet"},
  {orderID: 104, city: "chennai", productName:"charger"},
  {orderID: 105, city: "kolkata", productName: "keyboard"}

]
let city=input.question("enter the city name=")
findID(orders,city)