const { default: mongoose } = require('mongoose')

/**create store product api schema  */

const productSchema = new mongoose.Schema({
    title : {
        type : String
    },
    brand : {
        type : String
    },
    newPrice : {
        type : Number,
    },
    oldPrice : {
        type : Number,
    },
    ImagePath : {
        type : String,
    },
    ImageName : {
        type : String,
    },
    discription : {
        type : String,
    }
})

const proList = mongoose.model('proData' , productSchema)

module.exports = proList