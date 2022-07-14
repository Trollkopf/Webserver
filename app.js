const express = require('express');
const hbs =  require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//SERVIR CONTENIDO
app.use( express.static('public'));

app.get('/', (req, res)=>{
    res.render('home',{
        titulo: 'Curso de node',
        nombre: 'Max Serratosa'
    });
})

app.get('/generic', (req, res)=>{
    res.render('generic',{
        titulo: 'Curso de node',
        nombre: 'Max Serratosa'
    })
})

app.get('/elements', (req, res)=>{
    res.render('elements',{
        titulo: 'Curso de node',
        nombre: 'Max Serratosa'

    })
})

//CONEXION PUERTO
app.listen(port, ()=>{
    console.log(`Ejemplo de app escuchando al puerto ${ port }`)
})