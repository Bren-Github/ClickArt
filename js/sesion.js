const formRegistro = document.querySelector("#formRegistro")
const inputUserName = document.querySelector("#inputUserName")
const inputUserPass = document.querySelector("#inputUserPass")

console.log(formRegistro)
console.log(inputUserName)
console.log(inputUserPass)


const user = JSON.parse(localStorage.getItem("user")) || []


function validarUsuario (e){
    e.preventDefault()

    for (let i = 0; i < user.length; i++) {
    

        if(user[i].user === inputUserName.value && user[i].pass === inputUserPass.value){
            console.log('Bienvenido')
            user[i].logged = true
            localStorage.setItem('user', JSON.stringify(user))
            window.location = "../Pages/pagina.html"
            return
            //document.location.href = ".//vistas/userpage.html"

            
        }
        console.log('Datos incorrectos')

          
    }
    
   /*  let usuarioLocal = localStorage.getItem('user')
    let passwordLocal = localStorage.getItem('password') */

    
    

    formRegistro.reset()
}
formRegistro.addEventListener('submit',validarUsuario)
/* localStorage.setItem('user',inputUserName.value)
localStorage.setItem('password',inputUserPass.value) */

/* const cajitaMensaje = document.createElement('p')
cajitaMensaje.innerHTML = `Usuario Registrado 😆 , ya puedes <a href="index.html">Iniciar Sesion</a>`
FormRegistro.appendChild(cajitaMensaje) */
/* console.log(inputUserName.value)
console.log(inputUserPass.value) */