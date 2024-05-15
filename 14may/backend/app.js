import express from "express"
import "dotenv/config"
import fs from "fs"
const app = express()
const PORT = process.env.PORT || 6001


app.get('/', (req, res) =>{
    res.send(readDatabase())
})

const readDatabase = () => {
    try{
        const data = fs.readFileSync("./db.json")
        const students = JSON.parse(data)
        return students
    }catch(error){
        console.log("not working",error);
        return {students: []}
    }
}

console.log(readDatabase());

app.listen(PORT, () =>{
   console.log(`server ${PORT}`)
})


app.post('/', (req, res) => {
  const myList = req.body;
  res.send({
    message: 'New user was added to the list',
  });
});