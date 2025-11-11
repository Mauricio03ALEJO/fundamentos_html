let expresion = "";
let display = null;

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    display = document.getElementById("display");
    display.innerText = "0";
    
    // Asignar funcionalidad a los botones sin onclick
    let botones = document.querySelectorAll("button");
    botones.forEach(boton => {
        if (boton.innerText === "C") {
            boton.onclick = limpiar;
        } else if (boton.innerText === "←") {
            boton.onclick = borrar;
        } else if (boton.innerText === "=") {
            boton.onclick = calcular;
        }
    });
});

function mostrarDisplay(valor) {
    display = document.getElementById("display");
    
    // Si la expresión está vacía y no es un punto, mostrar el primer valor
    if (expresion === "" && valor !== ".") {
        expresion = valor.toString();
        display.innerText = valor;
    } else if (expresion === "" && valor === ".") {
        // Si comienza con un punto, agregar 0 antes
        expresion = "0.";
        display.innerText = "0.";
    } else {
        // Evitar múltiples puntos decimales consecutivos
        if (valor === ".") {
            // Obtener el último número de la expresión
            let ultimoNumero = expresion.split(/[+\-*/%]/).pop();
            if (ultimoNumero.includes(".")) {
                return;
            }
        }
        // Si el último carácter es un operador, empezar un nuevo número
        let ultimoCaracter = expresion[expresion.length - 1];
        if (["+", "-", "*", "/", "%"].includes(ultimoCaracter)) {
            expresion = expresion + valor.toString();
        } else {
            // Concatenar el número normalmente
            expresion = expresion + valor.toString();
        }
        display.innerText = expresion;
    }
}

function sumar() {
    agregarOperador("+");
}

function restar() {
    agregarOperador("-");
}

function multiplicar() {
    agregarOperador("*");
}

function dividir() {
    agregarOperador("/");
}

function porcentaje() {
    agregarOperador("%");
}

function agregarOperador(op) {
    display = document.getElementById("display");
    
    // Si la expresión está vacía, no hacer nada
    if (expresion === "") {
        return;
    }
    
    // Si el último carácter ya es un operador, reemplazarlo
    let ultimoCaracter = expresion[expresion.length - 1];
    if (["+", "-", "*", "/", "%"].includes(ultimoCaracter)) {
        expresion = expresion.slice(0, -1) + op;
    } else {
        expresion = expresion + op;
    }
    
    display.innerText = expresion;
}

function calcular() {
    display = document.getElementById("display");
    
    if (expresion === "") {
        return;
    }
    
    try {
        // Usar eval para evaluar la expresión
        let resultado = eval(expresion);
        
        // Manejar división por cero y valores inválidos
        if (!isFinite(resultado)) {
            display.innerText = "Error";
        } else {
            // Mostrar el resultado con máximo 10 decimales
            display.innerText = Math.round(resultado * 10000000000) / 10000000000;
        }
        
        // Guardar el resultado en la expresión para poder seguir operando
        expresion = display.innerText;
    } catch (error) {
        display.innerText = "Error";
        expresion = "";
    }
}

function limpiar() {
    display = document.getElementById("display");
    display.innerText = "0";
    expresion = "";
}

function borrar() {
    display = document.getElementById("display");
    
    if (expresion.length > 1) {
        expresion = expresion.slice(0, -1);
        display.innerText = expresion;
    } else if (expresion.length === 1) {
        expresion = "";
        display.innerText = "0";
    }
}