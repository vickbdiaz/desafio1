//Simulador de inicio de sesión con estructura WHILE

alert("Bienvenido a Mi Red Social")

let usuario = prompt("Ingrese su nombre de usuario");

let intentos = 0;

while (usuario != "victoria") {
    alert("Usuario incorrecto");

    usuario = prompt("Ingrese su nombre de usuario");
} 
let clave = parseInt(prompt("Ingrese su contraseña"));

while (clave != 1234 ) {
    alert("Contraseña incorrecta");

    if (intentos === 3) {
        break;
    }

    intentos++;
    clave = prompt("Ingrese nuevamente su contraseña");
}
if (intentos === 3) {
    alert("Usuario bloqueado");
}
else{
    alert("Hola, Victoria");
}
