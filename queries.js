const pool = require("./dbConfig");

const consulta = async ({ cuenta }) => {
  try {
    const { rows } = await pool.query(
      `select * from transferencias where cuenta_origen = ${cuenta} ORDER BY fecha DESC LIMIT 10;`
    );
    console.log(` Las ultimas 10 transferencias de la cuenta ${cuenta} son:`);
    console.log(rows);
  } catch (error) {
    console.error(
      ` Error al consultar las ultimas 10 transferencias de la cuenta ${cuenta}:`,
      error
    );
  }
};

const consultaSaldo = async ({ cuenta }) => {
  try {
    const {
      rows: [{ saldo }],
    } = await pool.query(`select saldo from cuentas where id = ${cuenta}`);
    console.log(`El saldo de la cuenta ${cuenta} es: ${saldo}`);
  } catch (error) {
    console.error(`Error el saldo de la cuenta ${cuenta}`, error);
  }
};

module.exports = { consulta, consultaSaldo };
