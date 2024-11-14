
const input = require("readline-sync")

//////////////  18/07/2024 ////////////////

// function  navigateDirection(direction){
// switch (direction.toLowerCase()){
//   case ("n"):
//     console.log('you move on north')
//     break;
//     case ("s"):
//     console.log("south");
//     break;
//     case ("e"):
//     console.log("east")
//     break;
//     case ("w"):
//     console.log("west");
//     break;
//     // case (direction=="a"):
//     // console.log("enter the valid noumber");
//     // break;
//     default:
//     console.log("invalid direction try again");
//     break;
// }
// }

// let direction1=input.question("enter the direction=")

// navigateDirection(direction1)

//////////////// 19/07/2024 ///////////////////////////



// function getFileType(file,filename){

//   let i=0;
//   while(i<filename.length){
//     // console.log(filename[i]);
//     let j=0;
//     while(j<filename[i].extensions){
//       if(filename[i].extensions[j]==file){
//         let main=filename.split(".")
//         console.log(main[1]);
//       }
//       j++;
//     }
//    i++;
//   }
//   // return 
// }

// let file=input.question("enter the filename : = ")

// let filename = [
//     { type: 'Document',extensions: [".doc", ".docx", ".pdf", ".txt"] },
//     { type: 'Image', extensions: ['.jpg', '.jpeg', '.png', '.gif'] },
//     { type: 'Audio', extensions: ['.mp3', '.wav', '.ogg', '.aac'] },
//     { type: 'Video', extensions: ['.mp4', '.avi', '.mkv', '.wmv'] }]

// getFileType(file,filename);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// function getFileType(doc,img,audio,vid, file) {
//   let nf = file.split('.');
//   if (doc.includes(nf[1])){
//     console.log("Document")
//   }  
//   else if (img.includes(nf[1]))   {
//     console.log("Image")
//   }
//   else if (audio.includes(nf[1])){
//     console.log("Audio")
//   }
//   else if(vid.includes(nf[1])){
//     console.log("Video")
//   }
//   else{
//     console.log("enter a valid file name ")
//   }

// }

// let file = input.question("enter the filename : = ")
// let doc = ["doc", "docx", "pdf", "txt"]
// let img = ['jpg', 'jpeg', 'png', 'gif']
// let audio = ['mp3', 'wav', 'ogg', 'aac']
// let vid = ['mp4', 'avi', 'mkv', 'wmv']

// getFileType(doc,img,audio,vid, file);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// let filename = [
//   {type: "Document", extensions: ["doc", "docx", "pdf", "txt"]},
//   {type: "Image", extensions: ['jpg', 'jpeg', 'png', 'gif']},
//   {type: "Audio", extensions: ['mp3', 'wav', 'ogg', 'aac']},
//   {type: "Video", extensions: ['mp4', 'avi', 'mkv', 'wmv']}
// ];


// function findType(A,f){
//   let nf = f.split(".")
//   let i = 0;
//   while(i < A.length){
//     if (A[i].extensions.includes(nf[1])){
//       console.log(A[i].type);
//       break;
//     }
//     else{
//       i++;
//     }
//   }
// }

// let file = require("readline-sync").question("enter a filename :- ")

// findType(filename,file);


/////////////////////////////////////////////////////////


// let c = input.questionInt("Enter the weather :  ")
// const T = input.questionInt("Enter the current temperature : ")


// if (T < 50) {
//     console.log("wearing a heavy coat ");
// }
// else if (T > 50 || T < 68) {
//     console.log("wearing a light jacket");
// }
// else if (T > 68) {
//     console.log("wearing light clithing");
// }
// else {
//     console.log("not found");
// }
// if (c = 1) {
//     if (T < 50) {
//         console.log("wearing a heavy coat and bringing an umbrella");
//     }
//     if (T > 50 || T < 68) {
//         console.log("wearing a light jacker and umbrella");
//     }
//     if (T > 68) {
//         console.log("wearing light clothing an umbrella");
//     }
//     else {
//         console.log("not found");
//     }
// }

///////////////////////////////////////////////////
///////////////////////////////////////////////////


/////////////////////////////////////////////////////////

  
// let n=input.questionInt("enter the length = ")
//     let arr1=[]
//     let i=0;
//     while(i<n-1){
//         arr1[i]=input.questionInt("enter the number = ")
//         i++;
//         arr1.push(i)
//     }
//     console.log(arr1);
    
//     let evensum=0;
//     let oddsum=0;
//     let multi=1;
//     let p=0;
//     while(p<n){
//     if(arr1[p]%2==0){
//     let multi=arr1[p]*10
//      evensum=evensum+multi
//     }
//     else{
//     multi=arr1[p]*10;
//     oddsum=oddsum+multi
//     }
//     p++;
//     }
//     if(evensum>oddsum){
//         console.log("EVEN");
//     }
//     else if(evensum<oddsum){

//         console.log("ODD");
//     }
//     else{

//         console.log(TIE);
//     }
    
////////////////////////////////////////////


// let n="10110110111011001111"
// let i=0;
// let count=0;
// let max=0;
// while(i<n.length){
//     if(n[i]==1){
//         count++;
//         n[i]=max
//         // console.log(count);
//     }
//     else{
//          count=0;

//     }
//     i++;
// }
// console.log(count);

///////////////////////////////////////////////

// let library=[];

// console.log("well come to our library");
// console.log("press 0 for add a book in a library ");
// console.log("press 1  search for a book in library ");
// console.log("press 2 remove a book from the library ");

// function addBook(doc,title){
//     library.push(doc)

// }

// function searchBook(doc,title){
//     let i=0;
//     while(i<n.length){
//         if(n[i].title==title){
//             console.log("yes");
//         }
//         else{
//             console.log("book not found");
//         }
//     }
// }
// function removeBook(doc,title){
//     let i=0;
//     while(i<n.length){
//         if(n[i].title==title){
//             doc.splice(i,1)
//         }
//     }
// }


// while(true){
//     let choice = input.question("Enter your choice: ")

//     if(choice==0){
//         let doc={};
//         doc.title=input.question("Enter the book = ")
//         doc.author=input.question("Enter the author name = ")
//         doc.price=input.questionInt("Enter the price = ")
//         addBook(doc,title,author,price)
//     }
//     else if(choice==1){
//         let doc={};
//         doc.title=input.question("Enter the book = ")
//         searchBook(doc,title)
//     }
//     else{
//         if(choice==2){
//             let doc={};
//             doc.title=input.question("Enter the book = ")
//             removeBook(doc,title)
//         }
//         else{
//             console.log("Enter the valid number");
//         }

//     }
// }

/////////////////////////////////////////////////////////


// let num1=input.questionInt("Enter the number := ")
// let num2=input.questionInt("Enter the number := ")
// let num3=input.questionInt("Enter the number := ")

// let sum1=num1+num2;
//  if(sum1>num3){
//     let sum2=num1+num3;
//     if(sum2>num2){
//         let sum3=num2+num3
//         if(sum3>1){
//             console.log("YES");
//         }
//     }
//     else{
//         console.log("no");
//     }
//  }
//  else{
//     console.log("no");
//  }

///////////////////////////////////////////////////


// let a=input.questionInt("enter the number = ")
// let b=input.questionInt("enter the number = ")

// let sum=a+b;
// let count=0;
// let i=0;
// while(i<sum){
// if(sum%i==0){
//   count++;
// }
// i++;
// }
// if(sum==2){
//     console.log("Alice");
// }
// else{
//     console.log("Bob");
// }

/////////////////////////////////////////////////

// function findUniquearr(arr1,arr2){
//     let Uniquearr=[];
//     let i=0;
//     while(i<arr1.length){
//         let j=0;
//         while(j<arr2.length){
//             if(arr1[i]==arr2[j]){
//               arr1,arr2.splice(i,j)
//             }
//             else{
//                 Uniquearr.push(arr1[i],arr2[j])
                 
//             }
//             j++;
//         }
//         i++;
//     }
//     console.log(Uniquearr);c
//     return Uniquearr

// }

// let arr1 = [1, 2, 3];
// let arr2 = [3, 4, 5];

// findUniquearr(arr1,arr2)

////////////////////////////////////////////


// let books =[
//     { title: "Book A", author: "Author A", price: 5.99 },
//     {  title: "Book B", author: "Author B", price: 7.50 },
//     { title: "Book C",author: "Author A", price: 5.99 }
// ];


// let inputs = [
//     { op: 0, title: "Book A", author: "Author A", price: 5.99 },
//     { op: 0, title: "Book B", author: "Author B", price: 7.50 },
//     { op: 1, title: "Book A" },
//     { op: 1, title: "Book C" },
//     { op: 2, title: "Book B" },
//     { op: 1, title: "Book B" }
// ];

// function bookOperations(books,inputs){
    
//     for(let inp of inputs){
        
//         if(inp.op == 0){
//             books.push(inp);
//         }
//         if(inp.op == 1){
//             searchBook(books,inp.title);
//         };
//         if(inp.op == 2){
//             removeBook(books,inp.title);
//         }
        
//     }
// };
// bookOperations(books,inputs)

// function searchBook(books,title){
//     let i=0;
//     let found = false;
//     let book_data =''
//     while(i<books.length){
//         if(books[i].title==title){
//             console.log("yes");
//             found = true;
//             book_data = books[i];
//             break;
//         }
//         i++;
//     };

//     if(!found){
//        console.log("book not found");
//     }
// }

// function removeBook(books,title){
//     let i=0;
//     while(i<books.length){
//         if(books[i].title==title){
//             books.splice(i,1);
//         };
//         i++;
//     }
// }

///////////////////////////////////////////////////


// let arr=[
//     { op: 0, donor: "John", bloodType: "O+", date: "2024-03-15" },
//     { op: 0, donor: "Alice", bloodType: "A-", date: "2024-03-16" },
//     { op: 1, donor: "Alice" },
//     { op: 2, bloodType:"O+" }];
    

//  let hospitaldata=[];


// function addBloodDonation(rec,hospitaldata){
//     hospitaldata.push(rec)
// }
// // addBloodDonation(rec.hospitaldata)


// function removeBloodDonation(rec,name){
//     let i=0; 
//     while(i<arr.length){
//         if(arr[i].donor==name){
//             arr.splice(i,1)
//             // console.log(arr);
//             break;
//         }
//         i++;
//     }
// }
// // removeBloodDonation(rec,arr)


// function checkAvailability(_rec,blood){
// let i=0;
// while(i<arr.length){
//    if(arr[i].bloodType==blood){
//     console.log("thise blood group is a available");
//    }
//    else{
//     console.log("thise blood group is a not available");
//    }
//     i++;
// }
// }
// // checkAvailability(rec,blood)


// console.log(" 0 for add a blood donation");
// console.log(" 1 for remove a blood donaaation");
// console.log(" 2 for check availability");

// while(true){
//     let choice = input.questionInt("enter the choice = ")
//     if(choice==0){
//    let rec={}
//    rec. name= input.question("enter the  name = ")
//    rec. boodtype= input.question("enter the blood type  = ")
//    rec. date = input.questionInt("enter the date = ")
//    addBloodDonation(rec,hospitaldata)
//    console.log(hospitaldata);
//     }
    
// if(choice==1){
//     let rec={}
//     rec.name=input.question("enter the blood type = ")
//     removeBloodDonation(rec,name)
//     console.log(hospitaldata);
// }
// else if(choice==2){
//     let rec={}
//     rec.blood=input.question("enter the blood type = ")
//     if(bloodType==blood){
//         console.log("availabil");
//     }
//     else{
//         console.log("not availabil");
//     }
// }
// checkAvailability(rec,blood)
// }


//=====================================================    6/8/2024   =========================

/*
Description: Write a function convertCartToObject(cartItems) that converts a shopping cart array
 into an object where keys are item IDs and values are the item details.
Input:
javascript
Copy code
Function

const cartItems = [
 { id: 1, name: "Phone", price: 20000, quantity: 1 },
 { id: 2, name: "Headphones", price: 5000, quantity: 2 },
 { id: 3, name: "Power Bank", price: 1000, quantity: 1 } ];

Output: The function should return an object where keys are item IDs and values are item details (excluding ID).  */



// function convertCartToObject(cartItems){

//     let object={}

//     for(let key in cartItems){
//     let main=(cartItems[key].id)
//     object.id=cartItems[key].id
    
//     console.log({object:(cartItems[key])})

//         // console.log(object);

//     }

// }
// const cartItems = [
//     { id: 1, name: "Phone", price: 20000, quantity: 1 },
//     { id: 2, name: "Headphones", price: 5000, quantity: 2 },
//     { id: 3, name: "Power Bank", price: 1000, quantity: 1 } ];
   
// convertCartToObject(cartItems)

//************************************************ */

// function additemToCart(){
    
//     let id=input.questionInt("enter the id = ")
//     let name=input.question("enter the name = ")
//     let price=input.questionInt("enter the price = ")
//     let quantity=input.questionInt("enter the quantity = ")
  
//   let newitem={
//       id:id,
//       name:name,
//       price:price,
//       quantity:quantity
//   }
//   cartItems.push(newitem)
//   console.log(cartItems);

// }

// function increasevalue(cartItems){
//   for(let key in cartItems){
//       // key.quantity=10;
//       cartItems[key].quantity=10
//   }
//   console.log(cartItems);
// }


// function removeelement(cartItems){
//   for(let key in cartItems){
//     //  cartItems.splice(0,1)
//   }
//   console.log(cartItems);
// }
// const cartItems = [
//     { id: 1, name: "Phone", price: 20000, quantity: 1 },
//     { id: 2, name: "Headphones", price: 5000, quantity: 2 },
//     { id: 3, name: "Power Bank", price: 1000, quantity: 1 }
// ];
// removeelement(cartItems)   
// increasevalue(cartItems)
// additemToCart(cartItems)

//########################################################
//########################################################

//Write a program that takes a positive integer as input and calculates the sum of the cubes of its digits.
//Input: A positive integer.
//Output: The sum of the cubes of the digits of the input integer.

//===============================
// function cubessum(n){
//     let sum=0;
//     let i=0;
//    while(n>0){
//     let r=n%10;
//    let c=r**3;
//     sum=sum+c;
//     n=Math.floor(n/10)
//     i++;
// }
// console.log(sum);
// }
// cubessum(123)

//#######################################################
//#####################################################33

// Write a program that takes a positive integer as input and repeatedly adds all its digits until the result has only one digit. The program should then return this single-digit result.

// Input: A positive integer.

// Output: A single-digit integer which is the result of repeatedly adding all the digits of the input number until only one digit remains.

// Example Test Cases:
// Testcase 1:
// Input: 38
// Output: 2
// Explanation:
// 3 + 8 = 11
// 1 + 1 = 2

//======================================
// function creatcount(n){
//    let sum=0;
//   while(n>0){
//    let r=n%10;
//     sum=sum+r;
//     n=Math.floor(n/10)
//    }
//    console.log(sum);
//   let main=0;
//   while(sum>0){
//    let r1=sum%10;
//    main=sum+r1;
//    sum=Math.floor(sum/10)

// }
// console.log(main);
// }
// creatcount(383)


//################################################
//###############################################
// Replace 'a' with '@'
// Replace 's' and 'S' with '$'
// Replace 'i' with '!'
// Replace 'o' and 'O' with '0' (zero)
// Replace 'E' with '3'

//=======================================

// function maskUsername(username){
//   username=username. replace(/a/g, "@")
//                        .replace(/s/gi, "$")
//                        .replace(/i/g, "!")
//                        .replace(/o/g, "0")
//                        .replace(/E/gi, "3")
//    console.log(username);
// }

// maskUsername('sneha')


//####################################################
//####################################################

// You're developing a feature for a chaat shop's ordering system. The system needs to check which chaat items can be made based on the available ingredients.

// Write a function named getAvailableChaatItems that takes two arguments: an array of chaat items and an array of available ingredients. Each chaat item is an object that contains a `name` and an array of `ingredients`. The function should return an array containing the names of the chaat items that can be made using only the available ingredients.

// Function: getAvailableChaatItems(chaatItems, availableIngredients)

// Input Format:
// chaatItems: An array of objects representing chaat items. Each object has the properties:
// name: A string representing the name of the chaat item.
// ingredients: An array of strings representing the ingredients required for the chaat item.
// availableIngredients: An array of strings representing the available ingredients.

// Output Format: Return an array of strings containing the names of the chaat items that can be made using the available ingredients.

// Example Test Cases:

// Test Case 1:
// Input:
// const chaatItems = [
//     { name: "Pani Puri", ingredients: ["puri", "pani", "mint", "potato"] },
//     { name: "Bhel Puri", ingredients: ["puri", "sev", "potato", "onion", "tamarind"] },
//     { name: "Dahi Puri", ingredients: ["puri", "dahi", "potato", "sev"] },
//     { name: "Aloo Tikki", ingredients: ["potato", "onion", "chaat masala"] }
// ];
// const availableIngredients = ["puri", "pani", "mint", "potato", "sev", “dahi”];

// Output: ["Pani Puri", "Dahi Puri"]
// Explanation: "Pani Puri" and "Dahi Puri" can be made with the available ingredients.


//============================================

const chaatItems = [
   { name: "Pani Puri", ingredients: ["puri", "pani", "mint", "potato"] },
   { name: "Bhel Puri", ingredients: ["puri", "sev", "potato", "onion", "tamarind"] },
   { name: "Dahi Puri", ingredients: ["puri", "dahi", "potato", "sev"] },
   { name: "Aloo Tikki", ingredients: ["potato", "onion", "chaat masala"] }
];

const availableIngredients = ["puri", "pani", "mint", "potato", "sev", 'dahi'];
let arr=[]
for(let item of chaatItems){
//  let arr = item

 let c=0;
   for(let shbn of item.ingredients)
   {

      if(availableIngredients.includes(shbn))
      {
         // console.log(arr.name);
         c += 1 ;
      }
      // console.log(arr.name);
      if(item.ingredients.length === c){
         console.log(item.name);
         
      }

   }
}







// let fruits = ['apple', 'banana', 'mango'];

// if (fruits.includes('banana')) {
//     console.log('Banana is in the array!');
// } else {
//     console.log('Banana is not in the array.');
// }



















// function getAvailableChaatItems(chaatItems, availableIngredients){
//  let arr=[]
// for(let item of chaatItems){
//       console.log(item);
//    }
//    for(let ing in ingredients){
//       let i=0;
//       while(i<ingredients.length){
//          if(ingredients[i]==getAvailableChaatItems[i]){

//          }
//          i++;
//       }

//    }
   
// }
// getAvailableChaatItems(chaatItems,availableIngredients)








