const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/productos',(req,res)=>{
    res.render('table');
})

app.get('*',(req,res)=>{
    res.render('page-error-404');
})

app.listen(port,()=>{
    console.log('El servidor corriendo en el puerto: ',port);
})