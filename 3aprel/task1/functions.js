'use strict'

let mmm=[{"name":{"common":"Cyprus","official":"Republic of Cyprus","nativeName":{"ell":{"official":"Δημοκρατία της Κύπρος","common":"Κύπρος"},"tur":{"official":"Kıbrıs Cumhuriyeti","common":"Kıbrıs"}}},"tld":[".cy"],"cca2":"CY","ccn3":"196","cca3":"CYP","cioc":"CYP","independent":true,"status":"officially-assigned","unMember":true,"currencies":{"EUR":{"name":"Euro","symbol":"€"}},"idd":{"root":"+3","suffixes":["57"]},"capital":["Nicosia"],"altSpellings":["CY","Kýpros","Kıbrıs","Republic of Cyprus","Κυπριακή Δημοκρατία","Kıbrıs Cumhuriyeti"],"region":"Europe","subregion":"Southern Europe","languages":{"ell":"Greek","tur":"Turkish"},"translations":{"ara":{"official":"جمهورية قبرص","common":"قبرص"},"bre":{"official":"Republik Kiprenez","common":"Kiprenez"},"ces":{"official":"Kyperská republika","common":"Kypr"},"cym":{"official":"Gweriniaeth Cyprus","common":"Cyprus"},"deu":{"official":"Republik Zypern","common":"Zypern"},"est":{"official":"Küprose Vabariik","common":"Küpros"},"fin":{"official":"Kyproksen tasavalta","common":"Kypros"},"fra":{"official":"République de Chypre","common":"Chypre"},"hrv":{"official":"Republika Cipar","common":"Cipar"},"hun":{"official":"Ciprusi Köztársaság","common":"Ciprus"},"ita":{"official":"Repubblica di Cipro","common":"Cipro"},"jpn":{"official":"キプロス共和国","common":"キプロス"},"kor":{"official":"키프로스 공화국","common":"키프로스"},"nld":{"official":"Republiek Cyprus","common":"Cyprus"},"per":{"official":"جمهوری قبرس","common":"قِبرِس"},"pol":{"official":"Republika Cypryjska","common":"Cypr"},"por":{"official":"República de Chipre","common":"Chipre"},"rus":{"official":"Республика Кипр","common":"Кипр"},"slk":{"official":"Cyperská republika","common":"Cyprus"},"spa":{"official":"República de Chipre","common":"Chipre"},"srp":{"official":"Кипарска Република","common":"Кипар"},"swe":{"official":"Republiken Cypern","common":"Cypern"},"tur":{"official":"Kıbrıs Cumhuriyeti","common":"Kıbrıs"},"urd":{"official":"جمہوریہ قبرص","common":"قبرص"},"zho":{"official":"塞浦路斯共和国","common":"塞浦路斯"}},"latlng":[35.0,33.0],"landlocked":false,"area":9251.0,"demonyms":{"eng":{"f":"Cypriot","m":"Cypriot"}}}]

// 21
function toplama(a,b) {
    let sum = 0
    sum=a+b
    console.log(sum)
}

toplama(5,5)

// 22

function emelyatlar(a,b,c) {
    let zum=0
    if(c=='*'){
        zum=a * b
    }else if(c=='+'){
        zum=a+b
    }
    console.log(zum);
}

emelyatlar(5,6,'+')

// 23
let countries = ["United States", "Canada", "United Kingdom", "Germany", "France", "Japan", "Australia", "Brazil"];

function olke(...arg) {
    console.log(...arg);
}
olke(countries)

// 24
let countriesWithCities = [
    {
        country: "United States",
        cities: ["New York", "Los Angeles", "Chicago", "Houston", "Miami","Las Vegas","Washington"]
    },
    {
        country: "Canada",
        cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Ottawa"]
    },
    {
        country: "United Kingdom",
        cities: ["London", "Manchester", "Birmingham", "Glasgow", "Edinburgh"]
    },
    {
        country: "Germany",
        cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"]
    }
]


//26

function olkeadi(arg) {
    let c= 0 //en uzun olke adi
    for (let i = 0; i < arg.length; i++) {
        if(arg[i].country.length>arg[c].country.length){
            c=i
        }
    }
    return arg[c].cities
}

console.log(olkeadi(countriesWithCities))

//29
let at=[-10,-13,-15,18,22,34]

function musbat(arr) {
    let sum=0
    let num=0
    for (let z = 0; z < arr.length; z++) {
        if (arr[z]>0){
            sum+=arr[z]
        }else if(0>arr[z]){
            num++
        }
    }
    if(num == arr.length){
        console.log('0')
    }else{
    console.log(sum)
    }

}

console.log(musbat(at)) 

//32
function a5s(ad) {
let ad1=ad[0]
let ad2=ad[ad.length-1]
let say=ad.length-2
let full =[]

    if (ad.length<4){
        console.log("qisalmir");
    }else {
        full.push(ad1, say, ad2);
        console.log(full.join(''));
    }
}

a5s('')