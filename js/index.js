const user = JSON.parse(localStorage.getItem("user")) || [];
const linkCerrar = document.querySelector("#link-cerrar")
const linkIniciar = document.querySelector("#link-iniciar")

function verificarUsuario (){
    
    for (let i = 0; i< user.length; i++) {
            if(user[i].logged == true){
                console.log("Puedes cerrar sesión")
                linkCerrar.style.display = "block"
                linkIniciar.style.display = "none"
                return
            }
    }

    console.log("Debes iniciar sesión")
    linkCerrar.style.display = "none"
    linkIniciar.style.display = "block"
}
 verificarUsuario()