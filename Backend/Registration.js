const { default: mongoose } = require('mongoose')

/**create schema for user login and signup */

const listSchema = new mongoose.Schema({
    Name : {
        type : String,
    },EmailId : {
        type : String,
        require : true,
        unique : true,
    },Possword : {
        type : String,
    }
})

const list = mongoose.model('datas' , listSchema)

module.exports = list