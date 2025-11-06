function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}
function agregarElemento(idelementopadre, html) {
    document.getElementById(idelementopadre).innerHTML = html;
}
function construirH1() {
    return '<h1 id="id_calculadora">Calculador</h1>';
}
function eliminarElemento(idElemento) {
    document.getElementById(idElemento).remove();
}
function ocultarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'none';
}
function mostrarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'block';
}

function evaluarOperacion(tipo){
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;
    if(tipo==='+'){
        resultado = sumar(num1, num2);
    }
    if(tipo==='-'){
        resultado = restar(num1, num2);
    }
    if(tipo==='*'){
        resultado = multiplicar(num1, num2);
    }
    if(tipo==='/'){
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = resultado;
}
function sumar(num1, num2){
    return num1 + num2;
}
function restar(num1, num2){
    return num1 - num2;
}
function multiplicar(num1, num2){
    return num1 * num2;
}
function dividir(num1, num2){
    return num1 / num2;
}

function fundamentosJS(){
    /* Tipos de Variables*/ 
    var nombre = "Mauricio"; //antigua, ya es considerada obsoleta
    let apellido = "Lopez"; // variables cambiantes
    let apellido2 = 15;
    apellido2 = "Suarez";
    let arreglo = [1, 2, 3, 4, 5, 6];
    let diasSemana = ['Lunes', 'Martes', '...'];
    const IVA = 12.8;
    console.log("Fundamentos de JS");
    console.log(nombre);
    console.log(IVA);
    console.log(arreglo);
    // Arreglos
    const arreglosDiasSemana = ['Lunes', 'Martes', 'Miercoles'];
    arreglosDiasSemana.push('Jueves');
    console.log(arreglosDiasSemana);
    arreglosDiasSemana.unshift('Dias');
    console.log(arreglosDiasSemana);
    console.log(arreglosDiasSemana[0]);
    console.log('Manejo de nulos, undefined y vacio');
    arreglosDiasSemana.push(null);
    arreglosDiasSemana.push('');
    console.log(arreglosDiasSemana[5]);
    console.log(arreglosDiasSemana[6]);
    console.log(arreglosDiasSemana[7]);

    const numerosPares = [2, 4, 6, 8];
    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    /* Sentencias de Control */
    let edad = 19;
    if(edad>=18){
        console.log('Es mayor de Edad');
    }else{
        console.log('Es menor de Edad');
    }

    let dia = 'Lunes';
    switch(dia){
        case 'Lunes':
            console.log('Es Lunes');
            break;
        case 'Martes':
            console.log('Ees Martes');
            break;
        default:
            console-log('No es ninguno de eso dias');     
    }

    for(let i=0; i<=5; i++){
        console.log(i);
    }

    const frutas = ['Manzana', 'Sandia', 'Papaya', 'Naranja'];
    for(let fruta of frutas){
        console.log(fruta);
    }

    /* Manejo de Objetos */
    const profesor = {
        nombre: 'Mauricio',
        apellido: 'Lopez',
        edad: 25,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    console.log(profesor);
    console.log(profesor.nombre);
    profesor.apellido = 'Suarez';
    console.log(profesor);

    if(profesor.ciudad === 'Quito'){
        console.log('Es Quiteño');
    }

    if(profesor.edad != 22){
        console.log('Es diferente de 25')
    }else{
        console.log('Es 25')
    }

    for(let clave in profesor){
        console.log(clave);
        console.log(profesor[clave]);
    }
}