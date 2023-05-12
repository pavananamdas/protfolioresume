const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 7070;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//static  files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


// set views
app.set('views','./views')
app.set('view engine','ejs')



app.get('/home' ,(req,res)=>{
    res.render('index')
})

app.get('/about' ,(req,res)=>{
    res.render('ABOUT1')
})

app.get('/projects' ,(req,res)=>{
    res.render('projects')
})

app.get('/acheivments' ,(req,res)=>{
    res.render('acheivments')
})

app.get('/contact' ,(req,res)=>{
    res.render('contact')
})


app.listen(port,()=>{
    console.log("listening");
})