
const input = require("readline-sync")


// let books = [
//     { title: "Book One", author: "Author One", ISBN: "123" },
//     { title: "Book Two", author: "Author Two", ISBN: "456" },
//     { title: "Book Three", author: "Author Three", ISBN: "789" }
// ];


// function booklist(books, ISBNno) {
//     let obj = []
//     let i = 0;
//     while (i < books.length) {

//         if (books[i].ISBN === ISBNno) {
//             books.splice(i, 1)
//             books.push(obj)
//             console.log(books)

//             break;
//         }
//         else {

//             let title = input.question("Enter the book neme :=")
//             let author = input.question("Enter the author name :=")
//             let obj = { title: title, author: author, ISBN: ISBNno }
//             books.push(obj)
//             break;
//         }
//     }
//     i++;
//     return books;
// }
// let ISBNno = input.questionInt("Enter the number :=")

// let updataarr = (booklist(books, ISBNno))
// console.log(updataarr)

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// function  studentdeta(students,ID){
//     let obj=[];
//     let found=false;
//     for(let i=0; i<students.length; i++){
//     if(students[i].studentID==ID){
//         students.Splice(i,1)
//         found=true;
//         students.push(obj)
//         break;
//     }
// };
//     if(fount){
//         obj.name=input.question("Enter the name :=")
//         obj.age=input.questionInt("Enter the age :=")
//         // obj.ID=studentID;
//         students.push(obj)

//     }

//     return students
// }


// let ID=input.questionInt("Enter the student ID :=")

// let students = [
//     { name: "Alice", age: 20, studentID: "001" },
//     { name: "Bob", age: 22, studentID: "002" },
//     { name: "Charlie", age: 21, studentID: "003" }
// ];
// console.log (studentdeta(students,ID))

/////////////////////////////////////////////////////////

// const input = require('readline-sync');

// function  studentdeta(students,ID){
//     let obj=[];
//     let found = false;
//     for(let i=0; i<students.length; i++){
//         if(students[i].studentID==ID){
//             students.splice(i,1);
//             found = true; 
//             break;
//         };
//     };
//     if (!found) {
//         obj.name=input.question("Enter the name :=")
//         obj.age=input.questionInt("Enter the age :=")
//         obj.ID=ID;
//         students.push(obj)
//     }

//         return students;
// }

// let ID=input.questionInt("Enter the student ID :=")


// let students = [
//     { name: "Alice", age: 20, studentID: "001" },
//     { name: "Bob", age: 22, studentID: "002" },
//     { name: "Charlie", age: 21, studentID: "003" }
// ];
// console.log (studentdeta(students,ID))


//////////////////////////////////////////////////////
////////////////// FUNCTION //////////////////////////

// function CheckPrime(num) {
//     let i = 1;
//     let count = 0;
//     while (i <= num) {
//         if (num % i == 0) {
//             count++;
//         }
//         i++;
//     }
//     if (count === 2) {
//         console.log("prime number")
//     }
//     else {
//         console.log("not prime number");
//     }
// }
// (CheckPrime(11))

/////////////////////////////////////////////


// function Reversstring(str){
//     let i=0;
//     while(i<str.length){
//         let j=str.length
//         while(j>=0){
//             temp=str[i]
//             str[j]=str[i]
//             str[i]=str[j]
//             console.log(str[j])
//             j--;
//             i++;
//         }
//     }
//     return (str[i])
// }
// (Reversstring("SHABNAM"))

////////////////////////////////////////////

// function findmax(arr){
//   let i=0;
//   let max=0;
//   while(i<arr.length){
//   if(arr[i]>max){
//     temp=arr[i]
//     arr[i]=max;
//     max=temp
//   }
//   i++;
//   }
//   return (max)
// }
// console.log(findmax([1,2,8,4]))

////////////////////////////////////////////

// function Perfect(num) {
//     let sum = 1;
//     let i = 1;
//     while (i < num) {
//     if(num%i==0){
//     sum=sum*i;
//     }
//     i++;
// }       
// if(sum==num){
//     console.log("YES");
// }
// else{
//     console.log("NOT");
// }
// }
// (Perfect(6))

/////////////////mmmmmm 16/07/2024 mmmmmm//////////////////////


// let students = [
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 92 },
//     { name: 'Charlie', grade: 88 },
//     { name: 'David', grade: 76 }
//   ];

// function filterAndSortStudent(students){
//     let i=0;
//     while(i<students.length){
//     let j=i+1;
//     while(j<students.length){
//     if(students[i].grade<students[j].grade){
//         temp=students[i];
//         students[i]=students[j];
//         students[j]=temp
//         // console.log(students);
//     }
//         j++;
//     }
//     i++;
//     }
//     console.log(students);

// }
// filterAndSortStudent(students)

//////////////////////////////////////////

// let sales = [
//     { productName: 'Laptop', quantity: 2, pricePerUnit: 1000 },
//     { productName: 'Phone', quantity: 5, pricePerUnit: 500 },
//     { productName: 'Tablet', quantity: 3, pricePerUnit: 300 }
//   ];

//////////////////////////////////////////////////////

// let people = [
//     { name: 'Emma', age: 45 },
//     { name: 'Liam', age: 52 },
//     { name: 'Olivia', age: 37 },
//     { name: 'Noah', age: 65 }
//   ];

// function findOldestPerson(){
//     let i=0;
//     let max=0;
//     while(i<people.length){
//         if(people[i].age>max){
//             max=people[i]
//         }
//         else{
//             max=people[i]
//         }

//         i++;
//     }
//     console.log(max);
//     return max;
// }
// findOldestPerson(people)

//////////////////////////////////////////////////////

// let products = [
//     { name: 'Laptop', category: 'Electronics' },
//     { name: 'Shirt', category: 'Clothing' },
//     { name: 'Phone', category: 'Electronics' },
//     { name: 'Jeans', category: 'Clothing' }
// ];

// function groupProductByCategory(products) {
//     let mainProduct={};
//     let i = 0;
//     while (i < products.length) {
//         let j = i + 1;
//         while (j < products.length) {
//             if (products[i].category === products[j].category){
//                 //  mainProduct.push()
//                 console.log(`${this.category} ${this.name}`);
//             }
//             j++;
//         }
//         i++;
//     }

// }
// (groupProductByCategory(products))

/////////////////////////////////////////////////


// const employees = [
//     { name: 'John', age: 28, department: 'HR' },
//     { name: 'Jane', age: 32, department: 'Finance' },
//     { name: 'Peter', age: 45, department: 'HR' },
//     { name: 'Lucy', age: 29, department: 'Finance' },
//     { name: 'Mike', age: 35, department: 'IT' }
//   ];

// function getAverageAgeBypartment(employees){
//     let sum=0;
//     let count=0;
//     let i=0;
//     while(i<employees.length){
//         let j=i+1;
//         while(j<employees.length){
//             if(employees[i].department==employees[j].department){
//                 sum=employees[i].age+employees[j].age;
//                 count++;
//                 finel=sum/count;
//                 console.log(finel);

//             }
//             j++;
//         }
//         i++;
//     }

// }
// getAverageAgeBypartment(employees)

//////////////  17/07/2024  ///////////////////


// let calculator={
//     add : function(a,b){
//         return a+b
//     },
//     substract : function(a,b){
//          return a-b
//     },
//     multiplay : function(a,b){
//         return a*b
//     },
//     divide: function(a,b){
//         return a/b
//     }
// }
// console.log(calculator.add(1,2))
// console.log(calculator.substract(3,2));
// console.log(calculator.multiplay(3,6));
// console.log(calculator.divide(6,2));

//////////////////////////////////////

// let book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     yearPublished: 1960
// };

// book .yearPublished=1998
// console.log(book)

///////////////////////////////////////////////////


// function findauther(library,author){
//     let titles=[]
//     let i=0;
//     while(i<library.length){
//     if(library[i]==authorName){
//         titles.push(library[i].title)
//     }
//     i++;
//     }
//     return titles
// }

// let  authorName=input.question("enter the author name ; = ")

// let library = [
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         yearPublished: 1960
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         yearPublished: 1949
//     },
//     {
//         title: "Animal Farm",
//         author: "George Orwell",
//         yearPublished: 1945
//     },
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         yearPublished: 1925
//     }
// ];

// console.log(findauther.library)

/////////////////////////////////////////

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     occupation: "Software Developer",
//     hobbies: ["reading", "hiking", "coding"]
//   };

//   delete  person.age
//   person. haigth=5.9
//   person. hobbies.push("gaming")

//   for(let key in person){
//     console.log(key+ " "+ person[key])
//   }

//   console.log(person);

///////////////////////////////////////////////////


// const library = {
//     name: "City Library",
//     address: {
//       street: "123 Library St.",
//       city: "Booktown",
//       zipCode: "12345"
//     },
//     books: [
//       {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         genres: ["Classic", "Fiction"],
//         available: true
//       },
//       {
//         title: "1984",
//         author: "George Orwell",
//         genres: ["Dystopian", "Science Fiction"],
//         available: false
//       },
//       {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         genres: ["Classic", "Fiction"],
//         available: true
//       }
//     ],

//   };

// //   console.log(library.address.street);
// //   console.log(library.books[1].genres);
// let newBook={title:"pride and prejudice", author:"jane austen", year:1813, available:true}
// library. books=newBook

// // console.log(library.books)
// // console.log(library.books);

///////////  18/07/2024 ////////////////////////////
/////////////////////////////////////////////

// function getOrderIdsForCity(orders, targetCity) {
//     let arr=[];

//     let i = 0;
//     while (i < orders.length) {
//         if (orders[i].city == targetCity) {
//             arr.push(orders[i].orderId)
//         }
       
//         i++;
//     }
//     console.log(arr);

// }

// const orders = [
//     { orderId: 103, city: "Chennai", productName: "Tablet" },
//     { orderId: 104, city: "Chennai", productName: "Charger" },
//     { orderId: 105, city: "Kolkata", productName: "Keyboard" }
// ];

// const targetCity = input.question("Enter the city : =");

// getOrderIdsForCity(orders, targetCity)

////////////  19/07/2024 /////////////////

// const sales = [
// { productName: 'Laptop', quantity: 2, pricePerUnit: 1000 },
// { productName: 'Phone', quantity: 5, pricePerUnit: 500 },
// { productName: 'Tablet', quantity: 3, pricePerUnit: 300 }
// ];

// function calculateprice(sales){

//     let i=0;
//     while(i<sales.length){
//         var sum=0;
//         sum+=sales[i].pricePerUnit*sales[i].quantity
//         i++;
//         console.log(sum);
//     }

// }
// calculateprice(sales)

//////////////////////////////////////////////////////

