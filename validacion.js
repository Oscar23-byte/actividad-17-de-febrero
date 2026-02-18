let formulario = document.getElementById("miFormulario");
let usuario = document.getElementById("usuario");
let mensaje = document.getElementById("mensajeUsuario");

usuario.addEventListener("input", function () {

    // Permitir letras, números, guiones y puntos
    this.value = this.value.replace(/[^a-zA-Z0-9.-]/g, "");

    if (this.value.length < 3) {
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
        mensaje.textContent = "Mínimo 3 caracteres";
        mensaje.className = "form-text text-danger";
    } else {
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        mensaje.textContent = "Usuario válido";
        mensaje.className = "form-text text-success";
    }
});

// Prevenir envío si no es válido
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    if (usuario.value.length < 3) {
        alert("Corrige el usuario antes de enviar");
    } else {
        alert("Formulario enviado correctamente");
    }
});
