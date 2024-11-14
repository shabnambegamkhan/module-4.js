

const input = require("readline-sync")

// let x=8;
// let y=8;
// if (x>y){
//     console.log("yes")
// }
// if(x==y){
//     console.log("no")
// }

/////////PIZZA//////////////////////////////////


// let friends=input.questionInt("enter the count ")
// let fizza  = input.questionInt("enter the slice ")
// total = Math.ceil (5/4)
// console.log(total)

////////////////////N PRIME NUMBER/////////////////////////////

let n = input.questionInt("enter the length : ")
let i = 2;
while (i <=n) {
    let j = 1
    let sum = 0;

    while (j <= i) {
        if (i % j == 0) {
            sum += 1;

        }
        j++;
    }
    if (sum == 2) {
        console.log(i)
    }
    i++;
}

///////////////////////////////////////////////////////////


// let n=input.questionInt("enter the length : ")
// let a1=input.questionInt("enter the number : ")
// let a2=input.questionInt("enter the number : ")
// let a3=input.questionInt("enter the number : ")
// let b1=input.questionInt("enter the number : ")
// let b2=input.questionInt("enter the number : ")
// let b3=input.questionInt("enter the number : ")
//  let sum1=0;
//  let sum2=0;
// let i=1;
// while(i<n/2){
//     if(a1>=a3){
//         temp=a1;
//         a2=a1;
//         a2=temp
//        sum1=sum1+a1;
//     }
//     {

//     }
//     i++;
// }
// let j=i
// while(j<n){
//     if(b1<=b2){
//       temp=b1;
//       b2=b1 ;
//       b2=temp;
//       sum2=sum2+b2;
//     }
//     j++;
// }
// if(sum1>sum2){
//     console.log("alice")
// }
// {
//     console.log("bob")
// }
// if(sum1==sum2){
//     console.log(tie)
// }

////////////////////////////////////////////
// //////////////////N PRIME NUMBER /////////////////////////

// let n = input.questionInt("enter the length  : ")
// let i = 1;
// while (i < n) {
//     let j = 1;
//     let sum = 0;
//     while (j <= i) {
//         if (i % j == 0) {
//             sum = sum + j;
//             sum++;

//         }
//         j++;
//     }
//     {
//         if (sum == 2) 
//             console.log(i)
//             sum++;

//     }
//     i++;
// }

////////////////// TEMPRETURE //////////////////
//////////////////////////////////

// let n=input.questionInt("enter the length of days : ")
// let arr=[]
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the temperatures of each day : ")
//     i++;
// }
// console.log(arr)
// let temp1=0;
// let j=0;
// while(j<n){
//     let p=j+1;
//     while(p<n){
//      if(arr[j]>arr[p]){
//         temp1=arr[j];
//      }
//      else{
//         temp1=arr[p]
//         arr[j]=temp1;
//         temp1=arr[j]
//      }
//     p++;
//     }
//     j++;
// }
// console.log("The highest temperature recorded in the number of days",temp1)

// let temp2=0;
// let r=0;
// while(r<n){
//     let t=r+1;
//     while(t<n){
//         if(arr[r]<arr[t]){
//             temp2=arr[r]
//             // arr[t]=temp2
//             // temp2=arr[r];
//          }
//          else{
//             temp2=arr[t]
//             arr[r]=temp2;
//             temp2=arr[r];
//          }
//         t++;
//     }
//     r++;
// }
// console.log("The lowest temperature recorded in the number of days",temp2)


///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// let n=input.questionInt("enter the size of length  (${i}) : ")
// let arr=[];
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the element  : ")
//     i++;
// }
// console.log(arr);
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

// let a=input.questionInt("enter the number : ")
// let b=input.questionInt("enter the number : ")
// let c=input.questionInt("enter the number : ")

// if(a==b && b==c && a==c){
//     console.log("all number are equele", a*b*c)
// }
// else{
//     if(a==b || b==c || a==c){
//     if(a==b){
//         let firstnumber=a;
//         let thirdnumber=c;
//         total=a+b
//         sum=total%c
//         console.log(sum)

//     }
//     else if(b==c){
//         let firstnumber=b;
//         let thirdnumber=a;
//         total=b+c;
//         sum=total%a;
//         console.log(sum)

//     }
//     else if(a==c){
//         let firstnumber=a;
//         let thirdnumber=b;
//         total=a+c;
//         sum=total%b
//         console.log(sum)

//     }
// }
// }

//     if(a!=b || b!=c || a!=c){
//         if(a>b && a>c ){
//             total=a**2
//             console.log(total)


//         }
//         else{
//             if(b>a&& b>c){
//                 total=b**2
//                 console.log(total)

//             }
//             else{
//                 if(c>a && c>b){
//                     sum=c**2
//                     console.log(sum)
//                 }
//             }
//         }
//     }
    
///////////////////PERFECT NUMBER ////////////////////////////////////
//////////////////////////////////////////////////////

// let n=input.questionInt("enter the number : ")
// let sum=0;
//  let i=1;
//  while(i<n){
//     if(n%i==0){
//         sum+=i;
//     }
//     i++;
//  }
// if(sum==n){
//     console.log("perfect number");
// }
// else{
//     console.log("not perfect")
// }

////////////////////// GCD QUESTION ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// let a=input.questionInt("enter the number : ")
// let b=input.questionInt("enter the number : ")
// let c=input.questionInt("enter the number : ")

// let hcf=1;
// let lcm=1;
// let i=1;
// while(a<=i && b<=i && c<=i){
//     if(a%i==0 && b%i==0 && c%i==0){
//          hcf=i
//     }
//     i++;
// }
//  lcm=a*b*c/hcf;
// console.log(hcf);
// console.log(lcm)

///////////////////////////////////////
//////////////////////////////////////
