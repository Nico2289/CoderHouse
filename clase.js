const fs = require("fs").promises

class Contenedor {
    constructor(fileName){
    this.fileName = fileName
}
    //Metodo utilizado para agregar un OBJ al array.
    async save(obj){
        try {
            const read = await fs.readFile(this.fileName, "utf8");
            const data = JSON.parse(read)
            let id;
                data.length == 0
                    ? (id = 1)
                    : (id = data[data.length - 1].id + 1);
                const newProduct = {...obj, id};
                data.push(newProduct);
                await fs.writeFile(this.fileName,JSON.stringify(data, null, 2), "utf8");
                console.log(`El ID del producto actual es: ${newProduct.id}`);
        }catch(e){
            console.log(e);
        }
    }

    //Metodo utilizado para obtener un OBJ segun su ID y mostrarlo.
    async getById(id){
        try {
            const read = await fs.readFile(this.fileName, 'utf8');
            const data = JSON.parse(read)
            const obj = data.find(obj => obj.id == id)
            if(!obj){
            return null;
           }
        return obj

        }catch(e){
            console.log(e);
        }
    }

    //Metodo utilizado para obtener la lista de numeros
    async getAll(){
        try {
        const read = await fs.readFile(this.fileName, 'utf8');
        return JSON.parse(read)
        }catch(e){
            console.log(e);
        }

    }

    // Metodo utilizado para borrar un registro segun ID
    async deleteById(id){
        try {
            const read = await fs.readFile(this.fileName, 'utf8');
            const data = JSON.parse(read)
            const obj = data.filter(obj => obj.id != id);
            await fs.writeFile(this.fileName,JSON.stringify(obj, null, 2), "utf8");
            
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
             await fs.writeFile(this.fileName, JSON.stringify([], null ,2), "utf-8");
        }catch(e){
            console.log(e);
         }
     }
}

module.exports=Contenedor



