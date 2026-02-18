let formulario = document.getElementById("miFormulario");
let usuario = document.getElementById("usuario");
let mensajeUsuario = document.getElementById("mensajeUsuario");

let password = document.getElementById("password");
let togglePassword = document.getElementById("togglePassword");


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


// PREVENIR ENVÍO
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
