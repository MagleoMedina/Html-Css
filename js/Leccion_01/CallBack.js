"use strict"

funcion1();
funcion2();

function funcion1(){
    console.log("funcion 1");
}

function funcion2(){
    console.log("funcion 2");
}

//calbacks

let imp = function imprimir (s){
    console.log(s);
}

function sumar (a, b, funcionCallback){
    let c = a + b;
    funcionCallback(c);

}

sumar(7,8,imp);

//LLamadas asincronas setTimeOut

const cal = () =>{
    console.log("Saludos con asincronia");
};

//establece un delay entre el llamado de las funciones
setTimeout(cal,5000);

//
const reloj = () => {
    let fecha = new Date();
    let fechaHora = fecha.toLocaleTimeString();
    console.log(fechaHora);
}
//llama asicrona la funcion cada cierto tiempo
//setInterval(reloj,2000);