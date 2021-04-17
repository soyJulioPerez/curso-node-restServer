const { response} = require('express');

const usuariosGet = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'get API - controlador'
  });
}

const usuariosPut = ('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'put - controlador'
  });
});

const usuariosPost = ('/', (req, res) => {
  res.status(201).json({
    ok: true,
    msg: 'post - controlador'
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
