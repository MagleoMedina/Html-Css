let persona = {
    nombre : "Juan",
    apellido : "garcia",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona);

for(prop in persona){
    console.log(prop);
    console.log(persona[prop]);
}
//aggregar nueva propiedad
persona.telefono = "555-5555";
console.log(persona);

delete persona.telefono;
console.log(persona);

//imprimir objects

for(prop in persona){
    console.log(prop);
    console.log(persona[prop]);
}
//array
const arrayPersona = Object.values (persona);
console.log(arrayPersona);

//json
const jsonPersona = JSON.stringify(persona);
console.log(jsonPersona);

const nuevaPersona = JSON.parse(jsonPersona);
console.log(nuevaPersona); 

const jsonJson = (p) =>{
    let a = JSON.stringify(p);
    let b = JSON.parse(a);
    return b;
};

console.log(jsonJson(persona));
