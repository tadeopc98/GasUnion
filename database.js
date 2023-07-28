const mysql = require('mysql');

function createConnection() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gasunion'
  });

  connection.connect((error) => {
    if (error) {
      console.error('Error de conexión a la base de datos:', error);
    } else {
      console.log('Conexión exitosa a la base de datos');
    }
  });

  return connection;
}

module.exports = createConnection;
