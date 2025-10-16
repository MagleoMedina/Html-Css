function sumar(a, b) {
    console.log(arguments.length);
    var a = " la suma es " + (a + b);
    return a ;
}
let a = sumar(2, 3);

console.log( typeof a);

let x = function resta(a,b) { return a - b;};
console.log(x(10,5));

(function(){
    console.log("Ejecutando la funcion");
})();

//funcion de tipo flecha
const sumarFuncionFlecha = (a, b) =>  " la suma es " + (a + b);
console.log(sumarFuncionFlecha(3,7));

const saludar = (name) => { return "hola mi nombre es :" + name};

console.log(saludar("Gloria"));
let saludo = saludar("Gloria");
console.log(saludo);

function sumarTodo(){
    let sum = 0;
    for(i = 0; i< arguments.length ; i++){
        sum+= arguments[i];
    }
    return sum;
}

console.log(sumarTodo(1,1,1,1,1_000_000));


const persona = {
    nombre : "Juan",
    apellido : "garcia"
}

function modificar(p){
    p.nombre= "Carlos";
    p.apellido = "Suarezz";
}
modificar(persona);

console.log(persona)