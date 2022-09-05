const express = require('express')
const router = express.Router()
const updateUser = require('../Controller/updateUser')
const createUser = require('../Controller/createUser')
const users = require('../users')
const deleteUser = require('../Controller/deleteUser')
const readAllUsers = require('../Controller/readAllUsers')
const readUserForId = require('../Controller/readUserForId')


// Enviando o html para a página
// router.get("/", (req,res) => {
//     res.sendFile(__dirname + '/Front/index.html')
// })


// Listas todos os usuários
router.get("/users",readAllUsers)

//Listar usuários por ID
router.get('/users/:id', readUserForId)

// Crirar usuários
router.post("/users",createUser)

//Editar informações do usuário
router.put("/users/:id",updateUser)

// "Deletar" usuário
router.delete("/users/:id",deleteUser)


module.exports = router

