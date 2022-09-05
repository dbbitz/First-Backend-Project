const users = require('../users')

module.exports = (req,res) => {
    res.send(users.deleteUser(req.params.id))
}