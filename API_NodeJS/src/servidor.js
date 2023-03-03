require('dotenv').config()
const PORT = process.env.PORT || 8080
const express = require('express')
const app = express()
const router = require('./Routers/router')


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('../public'))
app.use(router)

app.listen(PORT, () => {
    console.log(`Servidor Ativo na porta ${PORT}`)
    console.log(__dirname)
})

