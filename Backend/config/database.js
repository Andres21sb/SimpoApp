const mysql = require('mysql2');
require('dotenv').config(); // Carga las variables de entorno desde .env

// Configura la conexión a la base de datos
const dbConfig = {
  host: process.env.DB_HOST,      // Cambia esto al host de tu base de datos
  user: process.env.DB_USER,        // Cambia esto a tu nombre de usuario
  password: process.env.DB_PASSWORD, // Cambia esto a tu contraseña
  database: process.env.DB_DATABASE   // Cambia esto al nombre de tu base de datos
};

// Crea una conexión a la base de datos
const connection = mysql.createConnection(dbConfig);

// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.message);
    throw err;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Exporta la conexión para que otros módulos puedan usarla
module.exports = connection;