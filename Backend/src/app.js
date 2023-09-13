// Importa las dependencias necesarias
const express = require('express');
const app = express();

// Configuración de middleware (si es necesario)
app.use(express.json());
// Configuración de middleware para servir archivos estáticos desde el directorio "public"
app.use(express.static('public'));

// Define tus rutas (importa rutas desde el directorio de rutas)
const routes = require('./routes/routes.js'); // Suponiendo que tienes un archivo de rutas en src/routes.js
app.use('/api', routes); // Monta las rutas en '/api'
const clientesRoutes = require('./routes/clienteRoute');
app.use('/api/clientes', clientesRoutes);

// Configura el puerto en el que tu aplicación escuchará
const PORT = process.env.PORT || 3000; // Utiliza el puerto definido en las variables de entorno o el puerto 3000 de forma predeterminada

// Inicia el servidor Express
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
