console.log("task3")

let eded=123
let say = String(eded)

for(let c = 0 ; c<say.length; c++){
    console.log(eded%10)
    eded=(eded-eded%10)/10
}
console.log("task3.2")

console.log 
for(let d = 0 ; d<say.length; d++){
    console.log(say[d])
}