let mongoose= require("mongoose")

//setup database

const server = "localhost:27017" 
const database= "test"
// const username = " "
// const password = " "

// mongoose.connect(`mongodb://${username}:${password}@${server}/${database}`)
mongoose.connect(`mongodb://${server}/${database}`, {useNewUrlParser: true}) 
  
let customerSchema = mongoose.Schema({
    name : String,
    email : {
        type : String,
        required : true,
        unique : true
    }
})

module.exports = mongoose.model('Customer', customerSchema)     //  create and export model created to reference schema

