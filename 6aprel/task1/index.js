let user =
    {name:'said',
    age:'20',
    email:'s.aliyev1214@gmail.com',
    addres:{
        country:"Baku",
        city:"Sumgait"
    }
    }


let mylist=Object.entries(user) 

// console.log(mylist);

// mylist.forEach(([key,value]) => {
//     if(typeof value =='object') {
//         console.log(`${key}:`);
//         Object.entries(value).forEach(([nestedKey,nestedValue])=>{
//             console.log(`${nestedKey} ${nestedValue}`);
//         })
//     }else {
//         console.log(`${key} ${value}`);
//     }
//     });

// let reqem= prompt('ededi yazin')
let arr = [1,2,3,4,5,6,7,8,9]
function edediyoxla(eded) {
    let said=eded.filter((element)=> element>reqem).length
    console.log(said);
}

// edediyoxla(arr)

let ededler = []
for (let i = 0; i < 10; i++) {
    let ededim= Math.floor(Math.random(ededler)*100);
    ededler.push(ededim)
}
console.log(ededler);
console.log(Math.min(...ededler))
console.log(Math.max(...ededler))

let toplam = ededler.reduce((acc,elem)=>{
    let b =acc+elem
    return b/ededler.length
},0)
console.log(toplam);


