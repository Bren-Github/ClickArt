const user = JSON.parse(localStorage.getItem("user")) || [];

function verificarUsuario (){
    
    for (let i = 0; i< user.length; i++) {
            if(user[i].logged == true){
                console.log("Puedes cerrar sesión")
                return
            }
    }

    console.log("Debes iniciar sesión")
}
 verificarUsuario()