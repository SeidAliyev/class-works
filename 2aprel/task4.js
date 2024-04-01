console.log("task4")

let num=1789900
let s = String(num)
let enboyuk=0

for(let c = 0 ; c<s.length; c++){
    xa=num%10
    num=(num-xa)/10
    if (enboyuk<xa){
        enboyuk = xa
    }
}

console.log( enboyuk)