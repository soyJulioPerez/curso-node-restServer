const Role =  require('../models/role');
const Usuario = require('../models/usuario');
const Categoria = require('../models/categoria');
const { Producto } = require('../models');

const esRoleValido = async (rol = '') => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol: ${rol} no existe en la BD`);
  }
}

const emailExiste = async( correo = '' ) => {
  const emailFound = await Usuario.findOne({ correo });
  if (emailFound) {
    throw new Error(`El correo: ${correo} ya existe en la BD`);
  }
}

const usuarioExiste = async( id ) => {
  const usuarioFound = await Usuario.findById(id);
  if (!usuarioFound) {
    throw new Error(`El usuario con id: ${id} NO existe en la BD`);
  }
}

const categoriaExiste = async( id ) => {
  const categoriaFound = await Categoria.findById(id);
  if (!categoriaFound) {
    throw new Error(`La categoría con id: ${id} NO existe en la BD`);
  }
}

const productoExiste = async( id ) => {
  const productoFound = await Producto.findById(id);
  if (!productoFound) {
    throw new Error(`El producto con ID: ${id} NO existe en la BD`);
  }
}

module.exports = {
  esRoleValido,
  emailExiste,
  usuarioExiste,
  categoriaExiste,
  productoExiste
}
