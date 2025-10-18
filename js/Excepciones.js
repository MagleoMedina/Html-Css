"use strict";
class MiError extends Error {
  constructor(mensaje) {
    super(mensaje);
    console.log("Se ha creado una instancia de MiError");
  }
}
let X = -2;
try {
    
    if (X < 0) throw new MiError("Valor de X no permitido");
} catch (e) {
    console.log(e.message);
    console.log(e);
} finally {
  console.log("Bloque finally ejecutado.");
}

console.log("Continuando con la ejecución del programa...");


let n = "";

try {
    if (isNaN(n)) throw new MiError("El valor no es un número");
    else if (n === "") throw new MiError("El valor es una cadena vacía");
} catch (error) {
    console.log(error.message);
    console.log(error);
}
console.log("Continuando con la ejecución del programa...");