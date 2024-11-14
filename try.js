/////////  CONSECUTIVE NUMBER /////////
const input = require("readline-sync")

// let arr = '1101110101101111'
// let i=0;
// let count=0;
// let max=0;
// while(i<arr.length){
//     if(arr[i]=="1"){
//         count++;
//         if(count>max){
//             max=count;
//         }
//         }else{
//             count=0;
//         }

//     i++;
// }
// console.log("number", ":", "maximum number",":-",max)

///////////////////////////////////////////

// const input=require("readline-sync")

// let s = '1101110101101111'
// let i=0;
// let c=0;
// let max=1;
// for (let i = 0; i < s.length; i++){
//     if (s[i] === "1"){
//         c++
//         if  (c > max){
//             max = c 
//         }
//     }
//     else{
//         c = 0
//     }
// }
// console.log("The max count is  :- ",max)


//ooooooooooooooooooooooooooooooooooooooooooo
//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
//ooooooooooooooooooooooooooooooooooooooooooo

// let contact= {
//      ID:readline.questionInt("enter the id number : - "),
//      Name:readline.question("enter the name : - "),
//      Email:readline.question("enter the email id : - "),
//      Phone:readline.questionInt("enter the mobile number : - ")
// }

// console.log(contact);
// // displayinfo(){
//     // console.log(`${this.name},${this.type},${this.price}`)
// // }
// class Contact {
//     constructor (id,name,email,phone){
// this.id=id;
// this.name=name;
// this.email=email;
// this.phone=phone;
//     }
// }

// class contacts {
//     constructor(){
//         this.contacts=[];
//     }
//     addcontact(id,name,email,phone){
//         let newcontact=new (id,name,email,phone)
//         this.contacts.push(newcontact)
//         console.log(newcontact)
//     }
// }



///////////////////////////////////

// let arr=[1,2,3,4,5,6]
//  console.log(arr.splice(5,1,55,88))
//  console.log(arr)

/////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let cartItems = [
//         { id: 1, name: "Phone", price: 20000, quantity: 1 },
//         { id: 2, name: "Headphones", price: 5000, quantity: 5 },
//         { id: 3, name: "Power Bank", price: 1000, quantity: 1 },
//         { id: 4, name: "Charger", price: 1500, quantity: 2 }];


//         let newid=input.questionInt("enter the id =")
//         let newprice=input.questionInt("enter the newprice = ")

//      function  updateProductPrice(){

//          for(let item of cartItems){
//                 if(item.id==newid){
//                         item.price=newprice
//                 }
//          }
//          console.log(cartItems);
//      }
//      updateProductPrice()



// let cartItems = [
//         { id: 1, name: "Phone", price: 20000, quantity: 1 },
//         { id: 2, name: "Headphones", price: 5000, quantity: 5 },
//         { id: 3, name: "Power Bank", price: 1000, quantity: 1 },
//         { id: 4, name: "Charger", price: 1500, quantity: 2 }];


// let newid = input.questionInt("enter the id = ")
// let arr = []
// function removeItemFromCart(newid, cartItems) {
//         for (let item of cartItems) {
//                 if (item.id == newid) {

//                         continue;

//                 }
//                 arr.push(item)
//         }
//         console.log(arr);
// }
// removeItemFromCart(newid, cartItems)



// let cartItems = [
//         { id: 1, name: "Phone", price: 20000, quantity: 1 },
//         { id: 2, name: "Headphones", price: 5000, quantity: 5 },
//         { id: 3, name: "Power Bank", price: 1000, quantity: 1 },
//         { id: 4, name: "Charger", price: 1500, quantity: 2 }];


// function getTotalCost(cartItems){
//         let sum=0;
//      for(let item of cartItems){
//         mul=item.price*item.quantity
//         sum =sum+mul
// }
// console.log(sum);
// }
// getTotalCost(cartItems)
// function findMostExpensiveItem(cartItems) {
// }
// findMostExpensiveItem(cartItems)



// let cartItems = [
//         { id: 1, name: "Phone", price: 20000, quantity: 1 },
//         { id: 2, name: "Headphones", price: 5000, quantity: 5 },
//         { id: 3, name: "Power Bank", price: 1000, quantity: 1 },
//         { id: 4, name: "Charger", price: 145500, quantity: 2 }];

// let big = cartItems[0].price;

// for (let i = 1; i < cartItems.length; i++) {

//         if(big < cartItems[i].price){
//                 big = cartItems[i].price
//         }
//         // else{
//         //         big = cartItems[i+1].price
//         // }

// }
// console.log(big);



//============================================================================================


//     console.log("press 1 for add Ditails = ");
//     console.log("press 2 for check  Ditails = ");
//     console.log("press 3 for read Ditails = ");
//     console.log("press 1 for add Ditails = ");

//     let users = [{ name: "Shabnam Begam Khan", Mno: 9575653221, pass: "password123" },
//     { name: "Rahul Verma", Mno: 9876543210, pass: "rahul@2024" },
//     { name: "Priya Singh", Mno: 9123456789, pass: "priya@123" }];


// while(true){


//  function addDitails(users) {
//     let name = input.question("enter the name =")
//     let Mno = input.questionInt("enter the mobile number = ")
//     let pass = input.question("enter the password = ")

//            let arr=[]
//             let add = {
//                 name: name,
//                 Mno: Mno,
//                 pass: pass
//             }
//             users.push(add)
//             console.log(users);
//         }

//     addDitails(users)


//     let newMo=input.questionInt("enter the new mobile number = ")
//     function detaExist(users,newMo){

//         for(let key of users){
//             if(key.Mno==newMo){
//             console.log("This no. is exist");
//             }
//             console.log("Not Found");
//             break;
//         }

//     }
//     detaExist(users,newMo)


// let Findobject=input.questionInt("enter the mobile number = ")

// function readProperty(users){
//   for(let key of users){
//     if(Findobject==key.Mno){
//         console.log(key);
//     }
//   }

// }
// readProperty(users)

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


function mainFunction() {

    console.log("press 1 for add Ditails = ");
    console.log("press 2 for check  Ditails = ");
    console.log("press 3 for read Ditails = ");
    console.log("press 4 for delete the details = ");

    let users = [{ name: "Shabnam Begam Khan", Mno: 9575653221, pass: "password123" },
    { name: "Rahul Verma", Mno: 9876543210, pass: "rahul@2024" },
    { name: "Priya Singh", Mno: 9123456789, pass: "priya@123" }];



    let choice = input.question("Enter your choice: ")

    if (choice == 1) {

        addDitails(users)

    }

    if (choice == 2) {

        detaExist(users)

    }


    if (choice == 3) {

        readProperty(users)

    }

    if (choice == 4) {
        datadelete(users)
    }

}

function addDitails(users) {
    let name = input.question("enter the name =")
    let Mno = input.questionInt("enter the mobile number = ")
    let pass = input.question("enter the password = ")

    let add = {
        name: name,
        Mno: Mno,
        pass: pass
    }
    users.push(add)
    console.log(users);
    wanttoContinue()
}




function readProperty(users) {
    let Findobject = input.questionInt("enter the mobile number = ")
    for (let key of users) {
        if (Findobject == key.Mno) {
            console.log(key);
        }
    }
    wanttoContinue()
}





function detaExist(users) {
    let newMo = input.questionInt("enter the new mobile number = ")

    for (let key of users) {
        if (key.Mno == newMo) {
            console.log("This no. is exist");
        }
        console.log("Not Found");
        break;
    }
    wanttoContinue()
}


function datadelete(users) {
    let NEWMno = input.questionInt("enter the mobile number = ")

    let arr = [];
    for (let key of users) {
        if (key.Mno == NEWMno) {
            continue;
        }
        else {
            arr.push(key)
        }
    }
    console.log(arr)

    wanttoContinue()

}

function wanttoContinue() {
    let Continue = input.questionInt("if you want to continue press 1")
    if (Continue == 1) {
        mainFunction()
    }
}
mainFunction()
























