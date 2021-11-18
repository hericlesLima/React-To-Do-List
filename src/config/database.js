const mongoose = require('mongoose') //to open a conection with mongo to send the CRUD commands
mongoose.Promise = global.Promise //to take of the advertising message of mongo saying that mongoose is deprecatiasing

module.exports = mongoose.connect('mongodb://localhost/todo');

