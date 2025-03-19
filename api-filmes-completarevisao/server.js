// server.js

const express = require("express")
const bodyParser = require("body-parser")
const port = 3000
const heroiRoutes = require("./routes/filmeRoutes")


const app = express()
app.use(bodyParser.json())
app.use(express.json());
app.use("/filmes", heroiRoutes)

app.listen(port, () => {
  console.log("Servidor express rodando!")
})
