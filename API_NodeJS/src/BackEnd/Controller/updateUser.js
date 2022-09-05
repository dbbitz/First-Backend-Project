const users = require('../users')
module.exports = function updateUser(req,res){
    const user = users.saveUser({
        name: req.body.name,
        email: req.body.email,
        deleted: false,
        id: req.params.id
    })
    res.send(user)
}