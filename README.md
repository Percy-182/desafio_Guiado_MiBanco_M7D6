# Desafío - Mi Banco

Sistema de transacciones.

## Descripción

La empresa Mi Banco SPA está recién registrada y está en búsqueda de un desarrollador full stack developer que empiece a crear su sistema de transacciones. Previamente los dueños de esta empresa habían intentado crear una institución bancaria pero el software que
compraron tenía vulnerabilidades y permitía hacer transacciones sin restricciones, por lo que
están exigiendo de extrema necesidad controlar efectivamente los movimientos bancarios para no generar balances negativos y consecuencia con sus clientes.
En este desafío deberás realizar una aplicación Node que se conecte con PostgreSQL, utilice transacciones para simular el comportamiento de una transacción bancaria.

## Instrucciones para ejecutar el programa

    Orden de argumentos:

    node index.js <tipo_transaccion> <cuenta_origen> <fecha> <descripcion> <monto> <cuenta_destino>
    -----------

## EJEMPLOS

    Nueva transacción:
    node index.js nueva 1 "16/10/2020" "Empanadas para el 18" 5000 2



    Consulta de últimas transferencias para la cuenta 1
    node index.js consulta 1


    Consulta de saldo para la cuenta 1
    node index.js consulta-saldo 1

## Requerimientos

1. Crear una función asíncrona que registre una nueva transferencia utilizando una
   transacción SQL. Debe mostrar por consola la última transferencia registrada.
   **(3 Puntos)**
2. Realizar una función asíncrona que consulte la tabla de transferencias y retorne los
   últimos 10 registros de una cuenta en específico.
   **(3 Puntos)**
3. Realizar una función asíncrona que consulte el saldo de una cuenta en específico.
   **(2 Puntos)**
4. En caso de haber un error en una transacción SQL, se debe retornar el error por
   consola.
   **(2 Puntos)**

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

```bash
git git@github.com:Percy-182/desafio_Guiado_MiBanco_M7D6.git
```

### Pre-requisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Sistema Operativo (Ubuntu 20.04, Windows 10, MacOS 10.15)
- Navegador (Firefox, Opera, Chrome, Brave, Safari)
