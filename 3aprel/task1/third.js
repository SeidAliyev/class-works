'use strict'

let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]

// task 17

let bol = []

for (let a = 0; a < arr.length; a++) {
    if(arr[a]===true || arr[a]===false){
        bol.push(arr[a])
    }    
}

// for (let b = 0; b < arr.length; b++) {
//     if (arr[b]=bol){
//         console.log(b)
//     }    
// }


// task 18
console.log('task18')
let maks=[]
let enuzunsoz = "";

for (let c = 0; c < arr.length; c++) {
    if(typeof arr[c] === 'string'){
        if (arr[c].length > enuzunsoz.length) {
            enuzunsoz = arr[c];
        }
    }
}
console.log(enuzunsoz);