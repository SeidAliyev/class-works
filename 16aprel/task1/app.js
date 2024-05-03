// 'use strict's

// document.getElementById('add').addEventListener('click', function() {
//     calculate('add');
// });

// document.getElementById('subtract').addEventListener('click', function() {
//     calculate('subtract');
// });

// document.getElementById('multiply').addEventListener('click', function() {
//     calculate('multiply');
// });

// document.getElementById('divide').addEventListener('click', function() {
//     calculate('divide');
// });
// function calculate(operation) {
//     var firstInput = parseFloat(document.querySelector('.birinci').value);
//     var secondInput = parseFloat(document.querySelector('.ikinci').value);
//     var result;

//     if (isNaN(firstInput) || isNaN(secondInput)) {
//         alert('Please enter valid numbers');
//         return;
//     }

//     switch(operation) {
//         case 'add':
//             result = firstInput + secondInput;
//             break;
//         case 'subtract':
//             result = firstInput - secondInput;
//             break;
//         case 'multiply':
//             result = firstInput * secondInput;
//             break;
//         case 'divide':
//             if (secondInput === 0) {
//                 alert('Cannot divide by zero');
//                 return;
//             }
//             result = firstInput / secondInput;
//             break;
//         default:
//             alert('Invalid operation');
//             return;
//     }

//     document.querySelector('.obsi').textContent = 'Result: ' + result;
// }

let said = {
    ad:"Said",
    surname:"Aliyev"
}

// localStorage.setItem(("said",JSON.stringify(said)))
localStorage.setItem('name',JSON.stringify(said))
// console.log(JSON.parse(localStorage.getItem("said")));





