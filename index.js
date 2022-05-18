const express = require("express")
const path = require("path")
const app = express();
const hbs = require('hbs');

var exphbs  = require('express-handlebars');
app.use(express.static("public"))

app.set('view engine', '.hbs'); 

app.get("/",(req,res)=>{
    res.render('index'); 
})

const port = 8000;

app.listen(port, ()=>{
    console.log(`Server started on ${port}`);
})