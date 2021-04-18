const { request, response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');

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

const usuariosPost = async (req, res) => {
  const {nombre, correo, password, rol} = req.body;
  const usuario = new Usuario({nombre, correo, password, rol});

  // verificar si el email existe
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(404).json({
      msg: 'El correo ya está registrado'
    })
  }

  // Encriptar la contraseña
  const salt = bcrypt.genSaltSync();
  usuario.password = bcrypt.hashSync(password, salt);

  // Guardar el usuario
  await usuario.save();

  res.status(201).json({
    ok: true,
    msg: 'post - controlador',
    usuario
  });
}

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
