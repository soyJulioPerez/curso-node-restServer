const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

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
    this.app.use(this.usuariosPath, require('../routes/usuarios'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Aplicación corriendo en el puerto', this.port);
    });

  }
}

module.exports = Server;
