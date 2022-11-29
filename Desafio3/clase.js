class Contenedor {

    constructor(fileName){
    this.fs = require('fs')
    this.fileName = fileName;
    this.productos = []
} 
    //Metodo utilizado para agregar un OBJ al array.
getNextId()
 {
    return this.productos.length + 1
 }

async save(prod){
    this.productos = await this.getAll()
    prod.id = this.getNextId()
    this.productos.push(prod)

    try {
        await this.fs.promises.writeFile(this.filename,
        JSON.stringify(this.productos,null,'\t'))
        console.log('Producto guardado')
        
    } 
    catch(error){
        console.log(`Error en guardar: ${error}`)
    }
}   
async getAll(){
    try {
    let read = await this.fs.promises.readFile(this.fileName, 'utf8');
    return JSON.parse(read)
    }
    catch(error){
        console.log(`Error al leer: ${error}`)
    }
} 
    //Metodo utilizado para obtener un OBJ segun su ID y mostrarlo.
async getById(id){
        try {
            let read = await fs.promises.readFile(this.fileName, 'utf8');
            let data = JSON.parse(read)
            let obj = data.find(obj => obj.id == id)
            if(!obj){
            return null;
           }
        return obj

        }catch(e){
            console.log(e);
        }
    }

    // Metodo utilizado para borrar un registro segun ID
    async deleteById(id){
        try {
            const read = await this.fs.promises.readFile(this.fileName, 'utf8');
            const data = JSON.parse(read)
            const obj = data.filter(obj => obj.id != id);
            await this.fs.promises.writeFile(this.fileName,JSON.stringify(obj, null, 2), "utf8");
            
            if(!obj){
                return null;
            }
            return obj
    
            }catch(e){
                console.log(e);
            }
    }
    // Metodo utilizado para borrar todo el contenido del Array
    async deleteAll(){
        try {
             await this.fs.promises.writeFile(this.fileName, JSON.stringify([], null ,2), "utf-8");
        }catch(e){
            console.log(e);
         }
     }
}

module.exports = Contenedor



