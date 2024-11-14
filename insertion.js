
const input=require("readline-sync")
let n=input.questionInt("enter the size of arr ; ")
let arr=[]
let i=0;;
while(i<n){
    arr[i]=input.questionInt("enter the element ; ")
    i++;
}
console.log(arr)
let newarr=[]
let j=0;
let k=j+1;
while(j<n){
    let k=j+1;
    while(k<n){
        if(arr[j]<arr[k]){
            newarr.push(arr[j]);
            }
        else{
            newarr.push(arr[k])
        }
        k++;
    }
    j++;
}
console.log(newarr)


