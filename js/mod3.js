const user = JSON.parse(localStorage.getItem("user")) || []
const btonCompletado = document.querySelector("#btn-completado")
const estado = document.querySelector("#estado")
user.forEach(item => {
    if (item.modulos.modulo3) {
        estado.innerHTML = "Estado: 🟢"
        console.log("ya completaste mod 1")
        btonCompletado.innerText = "Completado"
        btonCompletado.classList.add("btn-success")
        btonCompletado.disabled = true
    }
});




btonCompletado.addEventListener("click", function () {

    estado.innerHTML = "Estado: 🟢"
    for (let i = 0; i < user.length; i++) {
        if (user[i].logged) {
            console.log(user[i].progreso)
            btonCompletado.innerText = "Completado"
            btonCompletado.classList.add("btn-success")
            btonCompletado.disabled = true
            user[i].progreso += 25
            user[i].modulos.modulo3 = true
            localStorage.setItem("user", JSON.stringify(user))
            return
        }
    }
})