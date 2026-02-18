let formulario = document.getElementById("miFormulario");
let usuario = document.getElementById("usuario");
let mensajeUsuario = document.getElementById("mensajeUsuario");

let password = document.getElementById("password");
let togglePassword = document.getElementById("togglePassword");
let contadorPassword = document.getElementById("contadorPassword");
let mensajePassword = document.getElementById("mensajePassword");


// =============================
// VALIDACIÓN USUARIO (PUNTO 1)
// =============================
usuario.addEventListener("input", function () {

    // Permitir letras, números, guiones y puntos
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


// =============================
// PREVENIR ENVÍO
// =============================
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    if (usuario.value.length < 3) {
        mensajeUsuario.textContent = "Corrige el usuario antes de enviar";
        mensajeUsuario.style.color = "red";
    } else {
        mensajeUsuario.textContent = "Formulario listo para enviar";
        mensajeUsuario.style.color = "green";
    }
});


// =============================
// MOSTRAR / OCULTAR CONTRASEÑA (PUNTO 2)
// =============================
togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Ocultar";
    } else {
        password.type = "password";
        togglePassword.textContent = "Mostrar";
    }

});


// =============================
// CONTADOR DE CARACTERES (PUNTO 3)
// =============================
password.addEventListener("input", function () {
    contadorPassword.textContent = "Caracteres: " + password.value.length;
});


// =============================
// VALIDACIÓN FORTALEZA (PUNTO 4)
// =============================
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
