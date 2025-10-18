"use strict";
class Persona {
  static contador = 0;
  static MAX_OBJETOS = 5;

  constructor(nombre, edad) {
    if (Persona.contador < Persona.MAX_OBJETOS) {
      this.id = ++Persona.contador;
      this.nombre = nombre;
      this.edad = edad;
      console.log("Se incrementa el contador: " + this.id);
    } else {
      console.log("Se ha alcanzado el máximo de objetos permitidos.");
    }
  }
  get getNombre() {
    return this.nombre;
  }
  set setNombre(nombre) {
    this.nombre = nombre;
  }
  nombreCompleto() {
    return this.nombre + ", " + this.edad;
  }
  static saludar() {
    return "Saludos pa";
  }
  static saludar2(p) {
    return "Saludos pa " + p.nombre;
  }
}

class Empleado extends Persona {
  constructor(nombre, edad, sueldo) {
    super(nombre, edad);
    this.sueldo = sueldo;
  }
  get getSueldo() {
    return this.sueldo;
  }
  set setSueldo(sueldo) {
    this.sueldo = sueldo;
  }
  nombreCompleto() {
    return super.nombreCompleto() + ", Sueldo: " + this.sueldo;
  }
}


let persona1 = new Persona("Carlos", 28);
console.log(persona1);

console.log(persona1.getNombre);
persona1.setNombre = "Ana";
console.log(persona1.getNombre);
console.log(persona1);

let empleado1 = new Empleado("Luis", 35, 50000);

for (p in empleado1) {
  console.log(p);
}
console.log(empleado1);
console.log(empleado1.getNombre);
console.log(empleado1.getSueldo);
console.log(empleado1.nombreCompleto().toString());

console.log(Persona.saludar());

//console.log(Persona.saludar2(empleado1));

