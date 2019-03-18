let customerModel= require("../models/customer.model")
let express = require("express")

let router= express.Router()

//create new customer 

//POST localhost://3000/customer 
router.post('/customer',(req,res)=>{
    if(!req.body){
        return res.status(400).send("Request body is missing")
    }

if(!req.body.email){
    //provide custom validation if required
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
            res.send(201).send(doc)   // sucessfully created
        })
        .catch(err=>{
            res.status(500).json(err)
        })
})

//GET data retrieval
router.get('/customer',(req,res)=>{
    if(!req.query.email){
        return res.status(400).send("Missing URL Parameter : email")
    }
    customerModel.findOne({
        email : req.query.email
    })
    .then(doc=>{
        res.json(doc)
    })
    .catch(err=>{
        return res.status(500).json(err)
    })
})


//Update Request PUT
router.put("/customer",(req,res)=>{
    if(!req.query.email){
        return res.status(400).send("Missing Parameter : email ")
    }

    customerModel.findOneAndUpdate({
        email : req.body.email
    },  req.body,{
        new : true
    })
    .then(doc=>{
    res.json(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})


//Request DELETE
router.delete("/customer",(req,res)=>{
    if(!req.query.email){
        return res.status(400).send("Missing Parameter : email ")
    }

    customerModel.findOneAndRemove({
        email: req.query.email
    })
    .then(doc=>{
    res.json(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})


module.exports = router