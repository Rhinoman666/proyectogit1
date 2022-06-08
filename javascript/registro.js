var arreglo1 = []; //arreglo para menores a 60
var arreglo2 = []; //arreglo para mayores o iguales a 60

//datos
var nombre;
var apellido;
var edad;
var nombreCompleto;

function registrarPaciente(){
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    edad = document.getElementById('edad').value;
    nombreCompleto = nombre+" "+apellido;
    if(edad<60){
        arreglo1.push(nombreCompleto);
    }else{
        arreglo2.push(nombreCompleto);
    }
}

function mostrarArreglos(){
    console.log(arreglo1);
    console.log(arreglo2);
}