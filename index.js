const _ = require('lodash');
const express = require('express');
const request = require('request');

const app = express();

app.get('/', function(require,response){
    response.send('Olá Mundo!');
});

app.listen(3000, function(require, response){
    console.log('Está escutando a porta 3000')
});

request('http://www.google.com.br', function(error, response, request){

});