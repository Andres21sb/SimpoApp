const express = require('express');
const router = express.Router();
const path = require('path'); // Importa el módulo 'path' de Node.js para trabajar con rutas de archivos


// Define tus rutas aquí
router.get('/', (req, res) => {
    // Utiliza el módulo 'path' para obtener la ruta completa del archivo "index2.html"
    const indexPath = path.join(__dirname, '../../public/index2.html');
    // Envía el archivo "index2.html" como respuesta
    res.sendFile(indexPath);
});

router.get('/hola', (req, res) => {
    console.log('¡Hola, mundo!');
  res.send('¡Hola, mundo!');
});




module.exports = router;
