let a = 3;

a += 2; // a = a + 2
console.log(a);


let b = "3" , c ="10";
//operador de igualdad (==) revisa si los valores son iguales
console.log(b == c); //false
//operador de igualdad estricta (===) revisa si los valores y tipos son iguales
console.log(b === c); //false

//ternario
let d = (3 === "3") ? true : false; 
console.log(d); 

let string = "1000s"
let numberString = Number(string); //convierte string a numero
console.log(typeof numberString); //number

if(isNaN(numberString)){
    console.log("No es un número");
}