
/*
const nombre = prompt("Ingrese su nombre:");


function saludar(x){
    alert("Bienvenido "+ x);
}

saludar(nombre);

alert("A continuacion ingrese dos numeros para realizar distintas operaciones");
let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));

function suma(x,y){
    let resultado = x + y;
    alert("el resultado de la operacion es: "+ resultado);
}
function resta(x,y){
    let resultado = x - y;
    alert("el resultado de la operacion es: "+ resultado);
}
function multiplicacion(x,y){
    let resultado = x * y;
    alert("el resultado de la operacion es: "+ resultado);
}

let op = parseInt(prompt("Ingrese operacion a realizar (1.suma 2.resta 3.multiplicacion):" ));

if (op===1){
    suma(num1,num2);
}
if (op===2){
    resta(num1,num2);
}
if (op===3){
    multiplicacion(num1,num2);
}

while (op > 3){
    alert("no ingreso ninguna operacion a realizar")
}

let total = 0;
for (let i =1;i<=10;i++){
    total+= i;
};
console.log(total);
*/

const producto = {
    nombre:"cactus",
    categoria:"plantas",
    precio:10000
}
class Producto2{
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria   = categoria;
        this.precio  = precio;
    }
        mostrarprecio(){ console.log("el precio del producto "+ this.nombre+ "es "+ this.precio);}
}
const producto1 = new Producto2("Homero", "Av. Siempreviva 742", 200);
const producto2 = new Producto2("Marge", "Av. Siempreviva 742", 200);
producto1.mostrarprecio();
producto2.mostrarprecio();

const arrayproductos=[]
let   cantidad     = 5;
do{
   let entrada = prompt("Ingresar nombre");
   arrayproductos.push(entrada.toUpperCase());
   console.log(arrayproductos.length);
}while(arrayproductos.length != cantidad);
alert("Lista de productos: \n" + arrayproductos.join("\n"));
arrayproductos.push(producto);
console.log(arrayproductos);

let busnom = prompt("ingrese nombre del producto a buscar");
const buscado = arrayproductos.find(producto => producto.nombre === busnom);
console.log(buscado);
console.log(Math.min(arrayproductos));