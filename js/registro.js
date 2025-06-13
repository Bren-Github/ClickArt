const formRegistro = document.querySelector("#formRegistro")
const inputUserName = document.querySelector("#inputUserName")
const inputUserPass = document.querySelector("#inputUserPass")
/* const datosDiv = document.querySelector(".datos"); */


console.log(formRegistro)
console.log(inputUserName)
console.log(inputUserPass)

function registroDatos (e){
    e.preventDefault()

    let user = {
        user: inputUserName.value,
        pass: inputUserPass.value,
        correo: "admin@admin.com",
        apodo: "popi",
        logged: false,
        progreso: 0,
        certificado: false,
        modulos: {
            modulo1: false,
            modulo2: false,
            modulo3: false,
            modulo4: false
        },
        nombreCertificado: ""
    }

    console.log(inputUserName.value)
    console.log(inputUserPass.value)

    const users = JSON.parse(localStorage.getItem("user")) || [];

for (let i = 0; i < users.length; i++) {
    if(users[i].user === user.user){
        alert("El usuario ya existe")
        return
    }
    
}

    users.push(user)

    localStorage.setItem("user", JSON.stringify(users))
    

    /* localStorage.setItem('user',inputUserName.value)
    localStorage.setItem('password',inputUserPass.value) */

    const mensajeExistente = document.querySelector("#mensajeRegistro");
    if (mensajeExistente) {
        mensajeExistente.remove(); 
    }

    const cajitaMensaje = document.createElement('p'); cajitaMensaje.id ='mensajeRegistro';
    cajitaMensaje.innerHTML = `¡Usuario registrado!, ya puedes <a href="../index.html">Iniciar sesión</a>`

    /* datosDiv.appendChild(cajitaMensaje) */
    
   
    formRegistro.reset() 
}
formRegistro.addEventListener('submit',registroDatos)