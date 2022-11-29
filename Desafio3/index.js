const express = require('express');
const Contenedor = require('./clase.js')

const app = express();
const PORT = 8080;

const c1 = new Contenedor('productos.txt')

app.get('/productos', async (req, res) => {
    
    const allPrd = await c1.getAll()
    res.send({Productos: allPrd})
});

app.get('/random',async (req, res) =>{
    const prods = await c1.getAll()
    const random = parseInt(Math.random() * prods.length)
    res.send({Productos: prods[random]})
})

const server = app.listen(PORT, ()=>{ 
    console.log(`listening app port ${server.address().port}`);
});

server.on("error", (error)=> {
    console.log("Error", error)
});





