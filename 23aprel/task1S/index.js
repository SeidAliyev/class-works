import { usersURL} from "./mainURL.js";

const getAllDatas = async (url) => {
        let res = await axios(url);
        let data = res.data;
        return data;
}
const postDatasId = async (url,obj) => {
    let res = await axios.post(url,obj);
    let data = res.data;
    return data
}

const putById = async (url, id, obj) => {
    let res = await axios.put(url + "/" + id, obj);
    let data = res.data;
    return data;
  };

let createUser = document.querySelector(".CreateElements")
let tableMain = document.querySelector(".table-main")

async function createProducts() {
    let data = await getAllDatas(usersURL);
    let mainData = data
    createData(mainData)

  createUser.addEventListener("click", (e) => {
        e.preventDefault();

        const names = document.querySelector(".name")
        const surnames = document.querySelector(".surname")
        const ages = document.querySelector(".age")

        let obj = {
            name:names.value,
           surname:surnames.value,
           age:ages.value
        };
        
        postDatasId(usersURL, obj);
    })

let edit = document.querySelectorAll(".editDatas")
edit.forEach(editBtn => {
    editBtn.addEventListener('click',(e) =>{
        // e.preventDefault()

    
        if (userToEdit) {
        const userToEdit = mainData.find((user) => user.id == id);
        const updatedName = document.querySelector(".name").value;
        const updatedSurname = document.querySelector(".surname").value;
        const updatedAge = document.querySelector(".age").value;
        
        userToEdit.name = updatedName;
        userToEdit.surname = updatedSurname;
        userToEdit.age = updatedAge;
        }

createData(mainData)
    })
    
})

}

createProducts()

function createData(mainData){
    tableMain.innerHTML =''
    mainData.forEach(elem => {
        tableMain.innerHTML +=`
        <tr>
            <td>${elem.id}</td>
            <td>${elem.name}</td>
            <td>${elem.surname}</td>
            <td>${elem.age}</td>
            <td>
            <button class="editDatas" data-id="${elem.id}">Edit</button>
            
            </td>

        </tr>`
    });
}