const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      auth: '/api/auth',
      usuarios: '/api/usuarios',
      categorias: '/api/categorias'
    }

    // Conectar a BD
    this.conectarDB();

    // Middlewares
    this.middlewares();

    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors())         // CORS
    this.app.use(express.json());     // Parseo y lectura del body
    this.app.use( express.static('public'));
  }

  routes() {
    this.app.use(this.paths.auth, require('../routes/auth'));
    this.app.use(this.paths.usuarios, require('../routes/usuarios'));
    this.app.use(this.paths.categorias, require('../routes/categorias'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Aplicación corriendo en el puerto', this.port);
    });

  }
}

module.exports = Server;
