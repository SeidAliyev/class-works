// let ab = prompt('daxil edin')

// bosluq = ab.split(' ')

function said(bb) {
let count=0
for (let i = 0; i < bb.length; i++) {
     count++  
}
console.log(count)
}

// said(bosluq)


function saitler(bb){
    let count=0
    let saitler=['a','e','o','u','i','A','E','O','U','I']
    for (let i = 0; i < bb.length; i++) {
        for (let a = 0; a < bb[i].length; a++) {
        if(saitler.includes(bb[i][a]))
        count++
    }
}
console.log(count);
}

// saitler(bosluq)

function saitler2(bb){
    let count=0
    let saitler=['a','e','o','u','i','A','E','O','U','I']
    for (let i = 0; i < saitler.length; i++) {
        if(bb.includes(saitler[i]))
        count++
    }
    console.log(count);
}

// saitler2(ab)

let products=[
    {
    name: "alma",
    category:"fruit",
    price: 12.5,
    weight:50,
    },
    {
    name: "heyva",
    category:"fruit",
    price: 10,
    weight:30,
    },
    {
    name: "nar",
    category:"fruit",
    price: 15,
    weight:60,
    },
    {
    name: "gilas",
    category:"fruit",
    price: 8,
    weight:20,
    },
    {
    name: "qarpiz",
    category:"fruit",
    price: 4,
    weight:100,
    }
]
function axtaris(bb){
    let ad = prompt('meyvenin adini daxil edin:')
    for (let i = 0; i < bb.length; i++) {
        if (bb[i].name.toUpperCase()==ad.toUpperCase()) {
            console.log(`Product name - ${bb[i].name}
    Product category - ${bb[i].category}
    Product price - ${bb[i].price}
    Product weight - ${bb[i].weight}`)
        }
    } 
}

// axtaris(products)

// let eded = prompt('ededi yazin')

function palidrom(eded) {
    let reverse= eded.split('').reverse().join("")

    if (reverse==eded) {
        console.log("palidromdur");
        console.log(reverse);
    }else{
        console.log('polidrom deil');
        console.log(reverse);

    }
}

// palidrom(eded)

// const numbers = [4, 9, 16, 25];
// let saida = numbers.map(Math.sqrt);

// console.log(saida);



const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
function myFunction(value, index, array) {
  return value < 18;
}
// console.log(over18);



