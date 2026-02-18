let formulario = document.getElementById("miFormulario");
let usuario = document.getElementById("usuario");
let msg = document.getElementById("validarcorrecto");

usuario.addEventListener("input", function() {

    // Permitir letras, números, guiones (-) y puntos (.)
    this.value = this.value.replace(/[^a-zA-Z0-9.-]/g, "");

    this.style.border = "2px solid";

    if (this.value.length < 3) {
        this.style.borderColor = "red";
        msg.textContent = "Mínimo 3 caracteres. Solo letras, números, - y .";
        msg.style.color = "red";
    } else {
        this.style.borderColor = "green";
        msg.textContent = "Usuario válido";
        msg.style.color = "green";
    }
});

// Prevenir envío del formulario
formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    if (usuario.value.length < 3) {
        alert("El usuario no cumple los requisitos");
    } else {
        alert("Formulario enviado correctamente");
    }
});
