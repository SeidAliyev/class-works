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

let createUser = document.querySelector(".CreateElements")
let tableMain = document.querySelector(".table-main")


async function createProducts() {
    let data = await getAllDatas(usersURL);
    let mainData = data
    createData(mainData)

  createUser.addEventListener("submit", (e) => {
        e.preventDefault();

        const names = document.querySelector(".name")
        const surnames = document.querySelector(".surname")
        const ages = document.querySelector(".age")

        let obj = {
            name:"SAID",
           surname:"SAIDOS",
           age:12
        };
        
        postDatasId(usersURL, obj);
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
            <td></td>
        </tr>`
    });
}