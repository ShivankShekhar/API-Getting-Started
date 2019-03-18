let express = require("express")

let router= express.Router()

//localhost:3000/person?name=ABC   or localhost:3000/peson
router.get('/person', (req,res)=>{
    if(req.query.name)
        res.send(`Hello ${req.query.name}`)
    else
        res.send("Welcome")
})

//localhost:3000/person/ABC
router.get('/person/:name', (req,res)=>{
res.send(`Thanks ${req.params.name}`)
})

router.get('/error',(req,res)=>{
    throw new Error("Invalid Path")    // prints the error in console and displays the error page in browser
})
module.exports = router