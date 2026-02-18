let formulario = document.getElementById("miFormulario");
let usuario = document.getElementById("usuario");
let mensajeUsuario = document.getElementById("mensajeUsuario");

let password = document.getElementById("password");
let togglePassword = document.getElementById("togglePassword");
let contadorPassword = document.getElementById("contadorPassword");
let mensajePassword = document.getElementById("mensajePassword");
let mensajeGeneral = document.getElementById("mensajeGeneral");

let intentos = 0;
let bloqueado = false;

// VALIDACIÓN USUARIO (PUNTO 1)
usuario.addEventListener("input", function () {

    this.value = this.value.replace(/[^a-zA-Z0-9.-]/g, "");

    if (this.value.length < 3) {
        this.style.border = "2px solid red";
        mensajeUsuario.textContent = "Mínimo 3 caracteres. Solo letras, números, - y .";
        mensajeUsuario.style.color = "red";
    } else {
        this.style.border = "2px solid green";
        mensajeUsuario.textContent = "Usuario válido";
        mensajeUsuario.style.color = "green";
    }
});

// MOSTRAR / OCULTAR CONTRASEÑA (PUNTO 2)
togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Ocultar";
    } else {
        password.type = "password";
        togglePassword.textContent = "Mostrar";
    }

});

// CONTADOR DE CARACTERES (PUNTO 3)
password.addEventListener("input", function () {
    contadorPassword.textContent = "Caracteres: " + password.value.length;
});

// VALIDACIÓN FORTALEZA (PUNTO 4)
password.addEventListener("input", function () {

    let valor = password.value;

    let tieneNumero = /[0-9]/.test(valor);
    let tieneMayuscula = /[A-Z]/.test(valor);
    let tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(valor);
    let longitudValida = valor.length >= 8;

    if (!longitudValida) {
        mensajePassword.textContent = "Debe tener mínimo 8 caracteres";
        mensajePassword.style.color = "red";
    }
    else if (!tieneNumero || !tieneMayuscula || !tieneEspecial) {
        mensajePassword.textContent = "Debe incluir mayúscula, número y carácter especial";
        mensajePassword.style.color = "orange";
    }
    else {
        mensajePassword.textContent = "Contraseña segura";
        mensajePassword.style.color = "green";
    }

});

// PUNTO 5 Y 6 - VALIDACIÓN FINAL + BLOQUEO
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    if (bloqueado) {
        return;
    }

    // VALIDACIÓN ADICIONAL DE USUARIO (PUNTO 6)
    let usuarioRegex = /^[a-zA-Z0-9.-]{3,}$/;
    let usuarioValido = usuarioRegex.test(usuario.value);

    if (!usuarioValido) {
        mensajeUsuario.textContent = "Usuario inválido al enviar";
        mensajeUsuario.style.color = "red";
        usuario.style.border = "2px solid red";
    }

    // VALIDACIÓN FINAL DE CONTRASEÑA
    let passwordValida = password.value.length >= 8 &&
                        /[0-9]/.test(password.value) &&
                        /[A-Z]/.test(password.value) &&
                        /[!@#$%^&*(),.?":{}|<>]/.test(password.value);

    if (usuarioValido && passwordValida) {

        mensajeGeneral.textContent = "Formulario enviado correctamente";
        mensajeGeneral.className = "mt-3 text-success";

        formulario.reset();
        contadorPassword.textContent = "Caracteres: 0";
        mensajePassword.textContent = "";
        mensajeUsuario.textContent = "";

        usuario.style.border = "";
        password.style.border = "";

        intentos = 0;

    } else {

        intentos++;

        mensajeGeneral.textContent = "Datos incorrectos. Intento " + intentos + " de 3";
        mensajeGeneral.className = "mt-3 text-danger";

        if (intentos >= 3) {

            bloqueado = true;

            mensajeGeneral.textContent = "Formulario bloqueado por 30 segundos";
            mensajeGeneral.className = "mt-3 text-danger";

            usuario.disabled = true;
            password.disabled = true;
            togglePassword.disabled = true;

            setTimeout(function () {

                bloqueado = false;
                intentos = 0;

                usuario.disabled = false;
                password.disabled = false;
                togglePassword.disabled = false;

                mensajeGeneral.textContent = "Formulario desbloqueado";
                mensajeGeneral.className = "mt-3 text-success";

            }, 30000);
        }
    }
});
