
const promesa = (resolver, rechazar) =>{
    let expresion = false;
    if(expresion){
        resolver("Resolvio fino");

    }else{
        rechazar("Rechazo bello");
    }
};

let miPromesa = new Promise(promesa);

const valor = (valor)=>{ 
    return console.log(valor)
};

const error = (error) =>{
    return console.log(error);
};

miPromesa.then(valor,error);

// miPromesa.then(valor).catch(error);
let con = new Promise((resolver) => {
    console.log('inicio promesa');
    setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
    console.log('fin promesa');
});

con.then(valor => console.log(valor));

async function miFuncionConPromesa(resolver){
    return "me llamo desde una promesa";
}
const a = (valor) => {console.log(valor);};

miFuncionConPromesa().then(a);

async function miPromesaConAsyncYAwait(){
    let miPromesa = new Promise((resolver) =>{
        resolver("Promesa con await");
        });
        console.log( await miPromesa);
}

miPromesaConAsyncYAwait();

//promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(zzz = 'valor por defecto') {
    console.log(zzz);
    console.log('inicio función');
    let miPromesa = new Promise((resolver) => {
        const resolvera = () => {resolver('promesa con await y timeoutsssss')};
        setTimeout(resolvera, 3000);
    });
    console.log( await miPromesa);
    console.log('fin función');
}

funcionConPromesaAwaitTimeout("HUGO");

