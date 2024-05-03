const addTodo = document.querySelectorAll(".addTodo");
const plusMinus = document.querySelectorAll(".plus")
const closed = document.querySelector(".closed")
const adder = document.querySelector('.addings')
const veryfyed = document.querySelector('.verifyed')



// for (var i = 0; i < addTodo.length; i++) {
//     addTodo[i].addEventListener("click", function (e) {
//         e.preventDefault()
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//             // plusMinus.style.display = 'block'
//         } else {
//             panel.style.display = "block";
//             //  plus.style.display = 'none';
//         }

//         // var panel = this.nextElementSibling;
//         plusMinus.forEach(element => {
//             if (element.innerHTML === "+") {
//                 element.innerHTML = "-";
//             } else {
//                 element.innerHTML = "+";
//             }
//         });
//         })
//     }

adder.addEventListener('click',function(e){
    e.preventDefault()
    e.stopPropagation()
createwriting()
    

})


function createwriting() {
    
    const yenileme = document.createElement('p')
    const deletion = document.createElement('button')
    yenileme.innerText='salamko'
    deletion.innerText = 'deletion'
    yenileme.className = "yenileme"
    deletion.className = "destroy"


    closed.append(yenileme,deletion)
    deletion.addEventListener('click',(e)=>{
        console.log(e.target)
    e.preventDefault()
        e.stopPropagation()
        e.target.parentElement.remove()
    })
}


