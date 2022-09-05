import {listUsers} from './listUsers.js'
async function deleteUser(nid){
    // fetch(`http://localhost:8080/users/${nid}`,{
    // method: "DELETE",
    // headers: {"Content-type": "application/json;charset=UTF-8"}
    // })
    // .then(res => console.log(res.json))
    // .catch(err => `<h1>${err}</h1>`)
    console.log('oi eu sou a lixeira '+nid)
    await fetch(`http://localhost:8080/users/${nid}`, {
        method: "DELETE",
        headers: {"Content-type": "application/json;charset=UTF-8"}
})
    .then(response => response.json()) 
    .then(json => console.log(json)); 
listUsers()
    }
    
export default deleteUser