let a2 = 11
let b2 = 11
let c2 = 13

if ( a1 > b2 && a1 > c2) {
    console.log(`${a2} en boyuk ededdir`)
}else if (a2==b2 && a2 == c2) {
    console.log(`${b2}, ${a2} ,${c2} beraberdir`)
}else if (b2 > c2 && b2 > a2){
    console.log(`${b2} en boyuk ededdir`)
}else if (c2 > a2 && c2 > b2){
    console.log(`${c2} en boyuk ededdir`)
}