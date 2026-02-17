let usuario = document.getElementById("usuario");
let msg = document.getElementById("validarcorrecto")
usuario.parentNode.appendChild(msg);

usuario.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-z]/g, "");
    this.style.border = "2px solid";

    if (this.value == "") {
        this.style.borderColor = "red";
        msg.textContent = "";
    } else {
        this.style.borderColor = "green";
        msg.textContent = "Nombre de usuario válido";
        msg.style.color = "green";
    }
});