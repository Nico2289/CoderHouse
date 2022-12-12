// Se carga la clase Contenedor.
const Contenedor = require('./clase.js')

// El nuevo contenedor crea productos.json si no esta dcreado.
const prd = new Contenedor('./productos.json')

// Funcion donde englobamos todas las operaciones  donde utilizamos los diferentes metodos de la clase Contenedor.
async function start(){
const obj1 = {title: "Calculadora", price: 1000, thumbnail: "image.pgn",};
const obj2 = {title: "Cafetera", price: 500, thumbnail: "image.pgn",};
const obj3 = {title: "Licuadora", price: 300, thumbnail: "image.pgn",};
const obj4 = {title: "Panificadora", price: 800,thumbnail: "image.pgn",};

// Metodo utilizado para el ingreso de objetos al array.
await prd.save(obj1);
await prd.save(obj2);
await prd.save(obj3);
await prd.save(obj4);

// Metodo utilizado para obtener un objeto desde un ID.
await prd.getById(2).then(id=> console.log(id))

// Metodo para obtener todo el array.  
await prd.getAll().then(a=> console.log(a))

// Metodo utilizado para borrar todo el array.
await prd.deleteAll()

// Metodo utilizado para borrar un registro segun ID.
await prd.deleteById(2).then(id=> console.log(id))
}

start()