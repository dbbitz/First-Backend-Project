import {listUsers} from './modules/listUsers.js'
import createUsers from './modules/createUser.js'
const table = document.querySelector('table')
const btn_list = document.querySelector('button#btn-list')
const btn_create = document.querySelector('button#btn-create')

btn_list.addEventListener('click', listUsers)
btn_create.addEventListener('click', () => {createUsers()})


