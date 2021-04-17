const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
  const {nombre, apikey, page = 1, limit = 10} = req.query;
  res.json({
    ok: true,
    msg: 'get API - controlador',
    nombre,
    apikey,
    page,
    limit
  });
}

const usuariosPut = ('/', (req = request, res) => {
  const id = req.params.id;
  res.json({
    ok: true,
    msg: 'put - controlador',
    id
  });
});

const usuariosPost = ('/', (req, res) => {
  const { nombre, edad } = req.body;
  res.status(201).json({
    ok: true,
    msg: 'post - controlador',
    nombre,
    edad
  });
});

const usuariosDelete = ('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'delete - controlador'
  });
});

const usuariosPatch = ('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'patch - controlador'
  });
});

module.exports = {
  usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch
}
