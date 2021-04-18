const { request, response } = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/generarJWT');

const Usuario = require('../models/usuario');

const login = async(req = request, res = response) => {
  const { correo, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ correo });
    // Verificar si el email existe
    if (!usuario) {
      return res.status(400).json({
        msg: 'Usuario / Pasword no son correctos - correo '
      });
    }

    // Verificar si el usuario está activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: 'Usuario / Pasword no son correctos - estado: false'
      });
    }

    // Verificar la contraseña
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: 'Usuario / Pasword no son correctos - password'
      });
    }

    // Generar JWT
    const token = await generarJWT(usuario.id);

    res.json({
      usuario,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    });
  }

}

module.exports = {
  login
}
