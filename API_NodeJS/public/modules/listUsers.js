import deleteUser from "./deleteUser.js"
import base_table from "./base_table.js"
import editUser from "./editUser.js"
export async function listUsers() {
    const table = document.querySelector('table')
    const users_ = await fetch('http://localhost:8080/users')
        .catch(err => console.log(err))
    const users = await users_.json()
    table.innerHTML = base_table
    for (let i in users) {
        table.innerHTML += `
        <tr class="line" id="${users[i].id}">
            <td>${users[i].id}</td>
            <td>${users[i].name}</td>
            <td>${users[i].email}</td>
            <td><img src="../assets/editar.png" class="editor"></td>
            <td><img src="../assets/lixeira.jpg" class="lixeira"></td>
        </tr>
        `
    }
    let trasher = document.querySelectorAll('.lixeira')
    let editor = document.querySelectorAll('.editor')
    let line = document.querySelectorAll('.line')
    for (let j = 0; j < trasher.length; j++) {
        trasher[j].addEventListener('click', () => {
            deleteUser(line[j].id)
        })
        editor[j].addEventListener('click', () => {
            editUser(line[j].id, users)
        })
    }
    
}

