// let objeto = [];

// for( let i=0; i<10000;i++){
//     let valor = Math.floor(Math.random()*20)+1;
//     if(objeto.length===0){
//         objeto.push({numero: valor, repetido: 1});
//     }else{
//         let yaSalio = objeto.find(cifra => cifra.numero === valor);
//         if(yaSalio){
//             valorNuevo = yaSalio.repetido+1;
//             objetoNuevo = objeto.filter(cifra => cifra.numero !== valor);
//             objetoNuevo.push({numero: valor, repetido: valorNuevo});
//             objeto=objetoNuevo;
//         }else{
//             objeto.push({numero: valor, repetido: 1});
//         }
//     }
// }
// console.log(objeto);

const productos = [
    { 
        id:1,
        nombre:'Escuadra',
        precio:323.45
    },
    { 
        id:2,
        nombre:'Calculadora',
        precio:234.56
    },
    { 
        id:3,
        nombre:'Globo Terráqueo',
        precio:45.67
    },
    { 
        id:4,
        nombre:'Paleta Pintura',
        precio:456.78
    },
    { 
        id:5,
        nombre:'Reloj',
        precio:67.89
    },
    { 
        id:6,
        nombre:'Agenda',
        precio:78.90
    }]

function nombreProductos(array) {
    let nombreProducto = []
    array.forEach(producto => {
    nombreProducto.push(producto.nombre)            
    });
    console.log('Lista de productos: ',nombreProducto.toString());
}
function valorTotal(array) { 
    let precioTotal = 0;
    array.map(producto =>{
        precioTotal += producto.precio
    })
    console.log(precioTotal.toFixed(2));
}
function valorMedio(array){
    let precioTotal = 0;
    let promedio;
    array.map(producto =>{
        precioTotal += producto.precio
    })
    promedio=precioTotal/array.length;
    console.log('el valor promedio es: ',promedio.toFixed(2))

}
function productoMasCaro(array){
    let algo = Math.max(...array.precio);
    console.log(algo);
}
// nombreProductos(productos);
// valorTotal(productos);
// valorMedio(productos);

productoMasCaro(productos)
