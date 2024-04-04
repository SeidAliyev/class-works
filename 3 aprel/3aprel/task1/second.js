'use strict'

let arr=[3,8,2,5,4,10,7,6]

// task8

for (const index in arr) {
    if (arr[index]%2!=0) {
        console.log(index)
    }
}

//task9
console.log('task9')

for (const index in arr) {
    if (index%2!=0) {
        console.log(index)
    }
}

//task 10
console.log('task10')

let ab=arr[0]

for (let p = 0; p < arr.length; p++) {
    if(arr[p]>ab){
        ab=arr[p]
    }
}
console.log(ab)

//task 11
console.log('task11')

let ac=arr[0]

for (let y = 0; y < arr.length; y++) {
    if (arr[y]%2!=0) { 
        if(arr[y]>ac){
        ac=arr[y]
    }
    }
   
    
}
console.log(ac)

//task 12
console.log('task12')

let ad=arr[0]

for (let p = 0; p < arr.length; p++) {
    if(arr[p]<ad){
        ad=arr[p]
    }
}
console.log(ad)

//task 13
console.log('task13')

let af=arr[0]
let ag=arr[0]

for (let p = 0; p < arr.length; p++) {
    if(arr[p]<af){
        af=arr[p]
    }
    if(arr[p]>ag){
        ag=arr[p]
    }
}
console.log(af)
console.log(ag)

for (let q = 0; q < arr.length; q++) {
    if (arr[q] === af) {
        arr[q] = ag;
    } else if (arr[q] === ag) {
        arr[q] = af;
    }
}

console.log(arr);

//task 14
console.log('task14')

//task 15
console.log('task15')

// let reqem = prompt('ededi daxil edin: ')

for (let v = 0; v < arr.length; v++) {
    // if(reqem ==arr[v]){
    //     console.log('eded array de var')
    // }else{
    //     console.log('bele eded yoxdur');
    // }
}

//task16
console.log('task16');
// task13 davami

let cem = 0

for (let m = 0; m < arr.length; m++) {
    if(ag==arr[m]||af==arr[m]){
        continue
    }else{
        cem+=arr[m]
    }
}
console.log(cem);
