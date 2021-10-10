const express = require('express');
const app = express();

// app.use('/static',express.static('public'));

app.set('views','./views');
// app.set('view engine','pug');
app.set('view engine','ejs');


app.get('/', (req, res)=>{
    const mascots = [
        {name: 'Sammy', oreganization:'Digital Ocean', birth_year:2012},
        {name: 'Tux', oreganization:'Linux', birth_year:1996},
        {name: 'Moby Dick', oreganization:'Docker', birth_year:2013}
    ];
    const tagline= 'No programing concept is complete withouy a cute animal mascot.'
    
    res.render('pages/index',{
        mascots,
        tagline
    })
})

app.get('/datos', (req, res)=>{
    const min = req.query.min;
    const max = req.query.max;
    const value = req.query.value;
    const titulo = req.query.titulo;
    const datos = { max: max, min:min, value:value, titulo:titulo }
    
    res.render('pages/datos',{
        datos
    })
})

//PARA USAR CON PUG
// app.get('/hello',(req,res)=>{
//     res.render('hello.pug', 
//             { mensaje: 'usando pug JS en express',
//              descripcion: 'Probando completar un p' }
//             );
// });

const PORT = 8080;
app.listen(PORT, ()=> console.log(`Servidor Iniciado en el puerto ${PORT}`));
