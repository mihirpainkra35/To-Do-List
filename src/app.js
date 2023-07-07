const express = require('express')
const hbs = require('hbs')
const path = require('path')


const app = express();
const port = process.env.PORT || 5000

//path
const staticPath=path.join(__dirname,'../public')

// middleware
app.use(express.static(staticPath))
app.set('view engine','hbs')
app.set('views')


app.get('/',(req,res)=>{

res.render('index')

})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
    console.log(`server running...`)
})