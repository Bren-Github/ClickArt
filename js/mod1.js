const user = JSON.parse(localStorage.getItem("user")) || []



const btonCompletado = document.querySelector("#btn-completado")
const estado = document.querySelector("#estado")


btonCompletado.addEventListener("click",function (){
    
    estado.innerHTML = "Estado: 🟢"
})