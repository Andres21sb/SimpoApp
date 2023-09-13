const express = require('express');
const router = express.Router();
const clienteModel = require('../models/cliente');

router.get('/all', (req, res) => {
    clienteModel.obtenerClientes((err, results) => {
      if (err) {
        // Maneja el error de manera adecuada, por ejemplo, enviando una respuesta de error
        return res.status(500).json({ error: 'Error al obtener los clientes' });
      }
  
      // Envia los resultados como respuesta
      res.json(results);
    });
  });

// Más rutas de productos aquí...

module.exports = router;
