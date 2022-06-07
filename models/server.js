const express = require('express')
const cors = require('cors')

class Server {
    
    //Definimos las propiedades
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //creando middlewares
        this.middlewares()
        //rutas de mi aplicacion
        this.routes()
    }

    middlewares() {

        //CORS
        this.app.use( cors() )

        //Lectura y parseo del body
        this.app.use( express.json() )

        //Directorio publico
        this.app.use( express.static('public') )
    }

    //Definimos un metodo para rutas
    routes(){

        this.app.use( this.usuariosPath , require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        })
    }

}

module.exports = Server;