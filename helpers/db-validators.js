const Role =  require('../models/role');
const Usuario = require('../models/usuario');

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
  console.log('🚀 ~ usuarioExiste ~ id', id);
  const usuarioFound = await Usuario.findById(id);
  console.log('🚀 ~ usuarioExiste ~ usuarioFound', usuarioFound);
  if (!usuarioFound) {
    throw new Error(`El usuario con id: ${id} NO existe en la BD`);
  }
}

module.exports = {
  esRoleValido,
  emailExiste,
  usuarioExiste
}
