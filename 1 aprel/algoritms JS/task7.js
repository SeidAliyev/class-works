let duyme = 1
let balans = 50
let miqdar = 90

if (duyme == 1 ) {
    console.log(`balansda ${balans} manat var`)
}else if (duyme == 2 ) {
    console.log(`${miqdar} manat kocuruldu.balansda ${balans+miqdar}manat var`)
}else if (duyme == 3) {
    if (miqdar>balans){
        console.log("balans kifayet deil")
    }else{
        console.log(`${miqdar} manat cixarilir.qaliq balans: ${balans-miqdar}azn`)
    }
}else if(duyme == 4){
    console.log("emelyat sona catdi")
}