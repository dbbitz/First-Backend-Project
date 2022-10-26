import {listUsers} from './listUsers.js'
export default async function createUser(){
    fetch(`http://localhost:8080/users`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: document.getElementById('post_name').value,
                    email: document.getElementById('post_email').value
                })
            }
        )
        .then(res => console.log(res.json()))
        .catch(err => console.log(err))
    listUsers()
}