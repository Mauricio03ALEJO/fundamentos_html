function guardar() {
    validarCampos();
}

function validarCampos() {
    try { limpiarMensaje(); } catch (e) {}

    let nombre = document.getElementById("id_nombre").value;
    if (nombre === "") {
        mostrarMensaje('Nombre necesario');
        mostrarAsterisco("id_error_nombre");
        return;
    }

    let apellido = document.getElementById("id_apellido").value;
    
    if (apellido === "") {
        mostrarMensaje('Apellido necesario');
        mostrarAsterisco("id_error_apellido");
        return;
    }

    let fecha = document.getElementById("id_fecha").value;

    if (fecha === "") {
        mostrarMensaje('Fecha necesaria');
        mostrarAsterisco("id_error_fecha");
        return;
    }
    
    let email = document.getElementById("id_email").value;
    if (email === "") {
        mostrarMensaje('Email necesario');
        mostrarAsterisco("id_error_email");
        return;
    }
    if (!validarEmail(email)) {
        mostrarMensaje('Email inválido');
        mostrarAsterisco("id_error_email");
        return;
    }

    let password = document.getElementById("id_password").value;
    if (password === "") {
        mostrarMensaje('Password necesario');
        mostrarAsterisco("id_error_password");
        return;
    }

    function mostrarMensaje(msg) {
        let mensaje = document.getElementById("id_msg_error");
        mensaje.style.display = "block";
        mensaje.innerText = msg;
    }

    function mostrarAsterisco(idElemento) {
        document.getElementById(idElemento).innerText = "*";
    }

    function limpiarMensaje() {
        let mensaje = document.getElementById("id_msg_error");
        mensaje.style.display = "none";
        mensaje.innerText = "";

        const erroresAsterisco = document.querySelectorAll(".error_asterisco");
        erroresAsterisco.forEach(e => e.innerText = "");
    }

    function validarEmail(email) {
        if (!email) return false;
        email = email.trim();
        const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return patron.test(email);
    }

}