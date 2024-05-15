const express = require('express')
const app = express()
const PORT = 3000

require("./src/config/db")

app.listen(PORT, () =>{
   console.log(`server ${PORT}`)
})