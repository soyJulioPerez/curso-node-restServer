const { Router } = require('express');
const { check } = require('express-validator');
const { login, googleLogin } = require('../controllers/auth');

const { validarCampos } =require('../middlewares/validar-campos');

const router = Router();

// Obtener todas las categorias (público)
router.get('/', (req, res) => {
  res.json({
    msg: 'Probando categorias'
  });
});

// Obtener una categoria por id (público)
router.get('/:id', (req, res) => {
  res.json({
    msg: 'Probando categorias por ID'
  });
});

// Crear categoria (privado)
router.post('/', (req, res) => {
  res.json({
    msg: 'Probando CREAR categorias'
  });
});

// actualizar categoria (privado)
router.put('/:id', (req, res) => {
  res.json({
    msg: 'Probando ACTUALIZAR categorias'
  });
});

// Borrado lógico categoria (admin)
router.delete('/:id', (req, res) => {
  res.json({
    msg: 'Probando ELIMINAR categorias'
  });
});

module.exports = router;