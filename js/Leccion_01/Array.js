const autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos); //object

//acceder a un elemento del arreglo
console.log(autos[0]); //BMW

//modificar un elemento del arreglo
autos[0] = 'Mercedes Benz';
console.log(autos[0]); //Mercedes Benz

//agregar un elemento al arreglo
autos.push('Audi');
console.log(autos);

//longitud del arreglo
console.log(autos.length); //4

autos[autos.length] = 'Cadillac';
console.log(autos);

//agregar un elemento al inicio del arreglo
autos.unshift('Chevrolet');
console.log(autos);

//eliminar el ultimo elemento del arreglo
autos.pop();
console.log(autos);

//eliminar el primer elemento del arreglo
autos.shift();
console.log(autos);


Array.isArray(autos); //true

SystemOutPrintln(array instanceof Array); //true