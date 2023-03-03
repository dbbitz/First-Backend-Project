import {listUsers} from './listUsers.js'
async function editUser(nid, users) {
    const popup = document.getElementById('pop-up')
    popup.style.display = "flex"
    console.log(nid)
    const put_name = document.getElementById('put_name')
    const put_email = document.getElementById('put_email')
    const confirm = document.getElementById('confirm')
    let body = {}
    for (let i in users) {
        if (users[i].id == nid) {
            body = {
                name: users[i].name,
                email: users[i].email
            }
        }
    }
    

    confirm.addEventListener('click', () => {
        fetch(`http://localhost:8080/users/${nid}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: put_name.value,
                    email: put_email.value
                })
            }
        )
        .catch(err => console.log(err))
        popup.style.display = 'none'
        
    })
    
    
}
export default editUser