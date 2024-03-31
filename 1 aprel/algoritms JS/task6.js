let biletSay=2
let qiymet = 10
let yas = 18
let mbs = 3

if (yas>18){
    console.log(`qiymet ${biletSay*qiymet}`)
}else if(yas==18 && mbs>biletSay){
    console.log(`qiymet ${mbs*qiymet}`)
}else if(yas==18 && mbs<biletSay){
    console.log(`qiymet ${biletSay*qiymet}`)
}
