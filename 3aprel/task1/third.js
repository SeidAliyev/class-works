'use strict'

let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]

// task 17

let bol = []

for (let a = 0; a < arr.length; a++) {
    if(arr[a]===true || arr[a]===false){
        // bol.push(arr[a])
        console.log(arr[a-1],arr[a],arr[a+1])
    }    
}



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

// task 20
let cont=0
for (let f = 0; f < arr.length; f++) {
    for (let h = 0; h < arr[f].length; h++) {
        if (typeof(arr[f]==String)){ 
            if (arr[f][h] === arr[f][h].toUpperCase()){
            console.log(arr[f])
            cont++
        }}
       
    }
}
