
const input=require("readline-sync")



// function maskUsername(userName){
//     userName= userName . replace(/a/g, "@")
//                        . replace(/s/gi, "$")
//                        . replace(/i/g, "!")
//                        . replace(/o/gi, "0")
//                        . replace(/E/g, "3")
//                        console.log(userName);
// }
// let userName=input.question("enter the username = ")

// maskUsername(userName)



//=========================================================


// function countDigit(n){
//      let sum1=0;
//      while(n>0){
//         let r=n%10;
//         sum1=sum1+r
//         n=Math.floor(n/10);
//     }
//     console.log(sum1);
//     let sum2=0;
//     while(sum1>0){
//      let r1=sum1%10;
//           sum2=sum2+r1
//           sum1=Math.floor(sum1/10)
//     }
//   console.log(sum2);

// }
// let n=input.questionInt("enter the number = ")
// countDigit(n)

//========================================================

// const orders = [
//     { orderId: 103, city: "Chennai", productName: "Tablet" },
//   { orderId: 104, city: "Chennai", productName: "Charger" },
//   { orderId: 105, city: "Kolkata", productName: "Keyboard" },
//   { orderId: 105, city: "delhi", productName: "Keyboard" }


//   ];
  
// function getOrderIdsForCity(orders, targetCity){
   
//     for(let item of orders){
//         if(item.city==targetCity){
//             console.log(item.orderId);
//         }
//     }

// }
// let targetCity=input.question("Enter the city name = ")
// getOrderIdsForCity(orders,targetCity)

