const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } =require('../middlewares/validar-campos');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', [
  check('nombre', 'El nombre es requerido').not().isEmpty(),
  check('correo', 'El correo no es válido').isEmail(),
  check('password', 'El password debe tener por lo menos 6 caracters').isLength({min:6}),
  check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
  validarCampos
], usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;
