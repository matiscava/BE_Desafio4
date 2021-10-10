const express = require('express');

const mascotasRouter = require('./router/mascotas');
const personasRouter = require('./router/personas');

const { Router } = express;

const app = express();
const router = Router();

const pug = require('pug');

const PORT = 8080;

//Permite usar el req.body, setea el parametro a recibir en json
//No solo texto, sino numeros y demas
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))
app.set('views', './views');
app.set('view engine', 'pug');

router.get('/', (req,res)=> {
    res.send('get ok');
})

router.post('/',(req,res)=> {
    res.send('post ok');
})

app.use('/api/personas', personasRouter);
app.use('/api/mascotas', mascotasRouter);


app.listen(PORT, ()=> console.log(`Servidor corriendo en puerto ${PORT}`));