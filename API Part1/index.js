let express= require ("express")

let app= express()              // creates express app

let personRoute = require('./routes/person')
let path=require("path")

// to go through all the req and take actions on each of them according to the query
app.use((req,res,next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
next()
})

app.use(personRoute) 

app.use(express.static('public'))   //use specific static file handler 'middleware'

//middleware function at the end to handle those req that are not handelled by any function or routes

//404 Page not Found
app.use((req,res,next)=>{
    res.status(404).send("Lost")

})

//500
app.use((err,req,res,next)=>{
    console.error(err.stack) 
    res.sendFile(path.join(__dirname,"/public/500.html"))
})

const PORT= process.env.PORT || 3000    // read from env var o see if specified in cmd line or default 300
app.listen(PORT,()=> console.info(`Server started on ${PORT}` ))



