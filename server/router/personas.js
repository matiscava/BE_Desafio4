const express = require('express');
const ArchivoFS = require('../../clase');
const personasRouter = express.Router();

const personasJson = new ArchivoFS('../server/data/personas.json')

personasRouter.get('/', async (req,res)=>{
    const lista = await personasJson.getAll()
    res.send({
        message: 'success',
        data: lista
    });
})

personasRouter.post('/', (req,res)=>{
    res.send('post ok');
})

module.exports = personasRouter;