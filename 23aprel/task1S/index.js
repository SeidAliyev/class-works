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

const deleteById = async (url, id) => {
    let res = await axios.delete(url + "/" + id);
    let data = res.data;
    return data;
  };

  async function removeAllData(url) {
    let res = await axios.delete(url);
    let data = res.data;
    return data;
}
  

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
            id:data.length+1,
            name:names.value,
           surname:surnames.value,
           age:ages.value
        };
        
        postDatasId(usersURL, obj);
    })


    const removeAllButton = document.querySelector(".delete");
    removeAllButton.addEventListener("click", async(e) => {
        e.preventDefault();
        await removeAllData(usersURL);
        data = [];
        createData(data);
    });

    const deleteButtons = document.querySelectorAll(".delete-item");


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
            <td><button class="delete-item" data="${elem.id}">Delete</button></td>
        </tr>`
    });
}

deleteButtons.forEach(button => {
    button.addEventListener("click", async (e) => {
        const itemId = e.target.getAttribute("data")
        await deleteById(usersURL, itemId);
        let newData = await getAllDatas(usersURL);
        createData(newData);
    });
});