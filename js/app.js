
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