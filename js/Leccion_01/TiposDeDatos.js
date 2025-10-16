/* Tipos de datos en JavaScript */

//tipos var infieren el tipo de dato
var numero = 42; // Número
console.log( typeof numero);
var texto = "Hola, mundo";  
var booleano = true;
var nulo = null;

//tipo de dato function
function saludar() {
    console.log("¡Hola!");
}

console.log(typeof saludar);

//tipo de dato Symbol
var simbolo = Symbol("miSimbolo");
console.log(typeof simbolo);
//var object
var objeto = { nombre: "Juan", 
                edad: 30,
                telefono: "123-456-7890" };

console.log(objeto);

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
//undefined
var c;
console.log(typeof c);

//arreglos
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos); //object


//camelCase
//let para variables que seran reasignadas
let fecha = new Date();
console.log(fecha);
console.log(typeof fecha); //object

//const para variables que no seran reasignadas
const numberPi = 3.14159;
console.log(numberPi);
console.log(typeof numberPi); //number

let st = numberPi.toString();
console.log(typeof st); //string


function SystemOutPrintln(s){
    console.log(s);
}



let numeros = 1;

switch (numeros) {
    case 1 :  case 2:
        SystemOutPrintln("hellouda");
        break;

    default:
        break;
}