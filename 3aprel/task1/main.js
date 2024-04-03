//task 4
let tek = 0
cut =0

for (let i = 1; i < 500; i++) {
    if(i%2==0){
        cut+=i
    } 
    if(i%2!=0){
        tek+=i
    }  
}

if(tek-cut>0){
    console.log('eded musbet');
}else{
    console.log('eded menfi');
}

// taks 5
let n1=0
n2=1
next=0

for (let j = 1; j < 11; j++) {
    console.log(n1);
    next=n1+n2
    n1=n2
    n2=next
    
}

//task6

for (let z = 1; z < 13; z++) {
    for (let x = 1; x < 13; x++) {
       console.log(`${z}x${x} = ${z*x}`);  
    }
}

//task 7 
console.log('task7');
abc=[1,2,4,5,6,7,8,9,99,14]

ab=abc[0]

for (let p = 0; p < abc.length; p++) {
    if(abc[p]>ab){
        ab=abc[p]
    }
}
console.log(ab)