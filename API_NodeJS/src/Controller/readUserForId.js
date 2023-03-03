const users = require('../users')
module.exports = (req,res) => {
    res.send(users.getUser(req.params.id))
}