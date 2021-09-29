//PROTOCOLO HTTP

const http = require('http');
const moment = require('moment');
const today = moment();


const server = http.createServer((solicitud,respuesta)=>{
    // respuesta.end('hola Mundo');
    const hora = today.hour();
    if(hora >= 6 && hora <= 12){
        respuesta.end('Buenos días!');
    }else if(hora > 12 && hora <= 19){
        respuesta.end('Buenos tardesq!');
    }else{
        respuesta.end('Buenos noches!');
    }
})

const serverConectado = server.listen(8080, () => {
    
    console.log(`Servidor Andando ${serverConectado.address().port}`);
});