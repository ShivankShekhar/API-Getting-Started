let customerModel= require("../models/customer.model")
let express = require("express")

let router= express.Router()

//create new customer 

//POST localhost://3000/customer 
router.post('/customer',(req,res)=>{
    if(!req.body){
        return res.status(400).send("Request body is missing")
    }

    //input Data
    //let user= {
    // "name"" : "first name",
    // "email"" : "abc@gmail.com"
    // }  

    let model=new customerModel(req.body) 
    model.save()  // validate req.body with customerModel and save it in database
        .then(doc=>{       // respond with the document it saved
            if(!doc || doc.length==0){
                return res.status(500).send(doc)
            } 
            res.send(201).send(doc)   // sucessful 
        })
        .catch(err=>{
            res.status(500).json(err)
        })
})

module.exports = router