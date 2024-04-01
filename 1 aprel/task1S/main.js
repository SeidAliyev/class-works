"use strict";

let password = prompt("enter your password: ")
let confirmpassword = prompt("confirm the password: ")

if (password == '' || password == ' '){
    alert("wrong password")
}else if(confirmpassword != password){
    alert("wrong confirm password")
}else if( password == confirmpassword){
    alert('succes')
}