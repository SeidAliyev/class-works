let wa=19
let wb=10
let wc=17

if ( wa>wb && wa>wc){
    if(wb>wc){
        console.log(`${wa}boyukdur ${wb} den oda boyukdur ${wc}den`)
    }else if (wc>wb){
        console.log(`${wa}boyukdur ${wc} den oda boyukdur ${wb}den`)
    }
}else if ( wb>wa && wb>wc){
    if(wa>wc){
        console.log(`${wb}boyukdur ${wa} den oda boyukdur ${wc}den`)
    }else if (wc>wa){
        console.log(`${wb}boyukdur ${wc} den oda boyukdur ${wa}den`)
    }
}else if ( wc>wa && wc>wb){
    if(wa>wb){
        console.log(`${wc}boyukdur ${wa} den oda boyukdur ${wb}den`)
    }else if (wb>wa){
        console.log(`${wc}boyukdur ${wb} den oda boyukdur ${wa}den`)
    }
}