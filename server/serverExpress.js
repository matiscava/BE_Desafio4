const express = require('express');
const server = express();
const moment = require('moment');
const today = moment();

const PORT = 3000
let visitas = 0;

server.get('/', (solicitud, respuesta, siguiente)=> {
    // throw Error('Todo mal')
    respuesta.send('<h1 style="color:blue">Bienvenido al servidor express</h1>')
    // respuesta.send({mensaje: 'Hola coruneta'})

});

server.get('/visitas', (solicitud, respuesta, siguiente)=> {
    visitas++;
    // respuesta.send(`<h2>La cantidad de visitas es ${visitas}</h2>`)
    respuesta.json({visitas})

});

server.get('/fyh', (solicitud, respuesta, siguiente)=> {
    const date = new Date().toLocaleString();
    respuesta.json({fyh: date})
    // respuesta.send({fyh: today.format('L LTS')})

});

server.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})

server.on('error', (error) => console.log(`Error en servidor ${error}`));
