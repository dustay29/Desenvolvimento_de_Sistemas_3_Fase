const express = require('express')
const port = 3000
const routes = require("./routes/routes.js")

const database = require('./database')

const app = express()
app.use(express.json());
app.use("/eventos", routes)

app.listen(port, () => {
    console.log(`Executando servidor na porta ${port}`)
})