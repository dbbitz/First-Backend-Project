const users = require('../users')
module.exports = function createUser(req,res){
    const user = users.saveUser({
        name: req.body.name,
        email: req.body.email,
        deleted: false
    })
    res.send(user)
}
