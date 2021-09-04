
const express = require('express');

const app = express();

app.get('/home', (request, response, next) => {
    response.send('<h1>Primeira Aula <h1>');
});

app.get('/about', (request, response, next) => {
    response.send('<h1>Mod03 Express - WDPT<h1>');
});

app.get('/works', (request, response, next) => {
    response.send('<h1>Frameworks da Web - WDPT<h1>');
});



app.listen(3000, ()=>{

    console.log("server 3000")
} )
