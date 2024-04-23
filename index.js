// Importación del módulo 'dbConfig' que contiene la configuración de la base de datos.
const pool = require("./dbConfig");

// Importación de funciones específicas desde los archivos 'queries.js' y 'transacciones.js'.
const { consulta, consultaSaldo } = require("./queries");
const nueva = require("./transacciones");

// Extracción de argumentos de la línea de comandos utilizando 'process.argv.slice(2)'.
const argumentos = process.argv.slice(2);
const tipo_transaccion = argumentos[0];
const cuenta = argumentos[1];
const fecha = argumentos[2];
const descripcion = argumentos[3];
const monto = argumentos[4];
const cuentaDestino = argumentos[5];

// Objeto que contiene referencias a las funciones de transacción disponibles.
const funciones = {
  nueva, // La función 'nueva' importada desde 'transacciones.js'.
  consulta, // La función 'consulta' importada desde 'queries.js'.
  "consulta-saldo": consultaSaldo, // La función 'consultaSaldo' importada desde 'queries.js'.
};

// Función asíncrona autoinvocada que maneja la lógica principal.
(async () => {
  try {
    // Invocación de la función de transacción correspondiente basada en el tipo de transacción proporcionado.
    await funciones[tipo_transaccion]({
      cuenta,
      fecha,
      descripcion,
      monto,
      cuentaDestino,
    });
  } catch (error) {
    // Captura de cualquier error y muestra un mensaje de error.
    console.log("Error", error);
  } finally {
    // Se asegura de que la conexión a la base de datos se cierre correctamente.
    pool.end();
  }
})();
