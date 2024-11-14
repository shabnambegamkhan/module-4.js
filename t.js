

const input = require("readline-sync")
let n = input.questionInt("enter the size of arr ")
let arr = []
let i = 0;
while (i < n) {
    arr[i] = input.questionInt("enter the element ; ")
    i++;
}
console.log("original arr", arr)
let j = 0;
// let k = j + 1;
while (j < n) {
     i = 0;
    let p = i+1;
    while (i < n  ) {
        if (arr[i] > arr[p]) {
            // temp = arr[k];
            // arr[k] = arr[k - 1];
            // arr[k - 1] = temp;
            t = arr[i];
        arr[i]=arr[p];
        arr[p] = t ;
            i++;
            p++;

            
        }
        else{
        // t = arr[i];
        // arr[i]=arr[p];
        // arr[p] = t ;
        i++;
        p++;
     

        }
    
    j++;}
    
}
console.log("sorted arr", arr)
