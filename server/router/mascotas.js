const express = require('express');
const mascotasRouter = express.Router();

mascotasRouter.get('/', (req,res)=>{
    res.send('get ok');
})

mascotasRouter.post('/', (req,res)=>{
    res.send('post ok');
})

module.exports = mascotasRouter;