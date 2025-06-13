const user = JSON.parse(localStorage.getItem("user")) || []

const saludoUser = document.querySelector("#saludo-user");
const progreso = document.querySelector("#progreso");
const progress1 = document.querySelector("#progress-1")
const progress2 = document.querySelector("#progress-2")

for (let i = 0; i < user.length; i++) {
  if (user[i].logged === true) {
    saludoUser.textContent = `${user[i].user}`
    progreso.innerHTML = `¡Hola, ${user[i].user}!. <br> Tu progreso es: ${user[i].progreso}%`
    progress1.style.width = `${user[i].progreso}%`
    progress2.style.width = `${user[i].progreso}%`
  }
}
let current = 0;               // Progreso actual
const target = 100;             // Progreso final (puedes cambiarlo)
const speed = 200;              // Más bajo = más rápido (milisegundos)

const circle = document.getElementById('progress-circle');
const text = document.getElementById('progress-text');

/* const updateProgress = () => {
  if (current <= target) {
    circle.style.background = `conic-gradient(#1CB99D 0% ${current}%, #ddd ${current}% 100%)`;
    text.innerText = `${current}%`;
    current++;
    setTimeout(updateProgress, speed);
  }
};

updateProgress(); */



const descargaCert = document.querySelector("#descarga-cert")
const btnModalCertificado = document.querySelector("#btn-modal-certificado")
const inputNombre = document.querySelector("#nombre")

for (let i = 0; i < user.length; i++) {
  if (user[i].logged && user[i].progreso >= 100) {
    console.log("aparecebtn")
    btnModalCertificado.disabled = false
    btnModalCertificado.classList.remove("opacity-50")

  }
}

descargaCert.addEventListener("click", () => {

  console.log("first")
  for (let i = 0; i < user.length; i++) {
    if (user[i].logged) {

      user[i].nombreCertificado = inputNombre.value;
      localStorage.setItem("user", JSON.stringify(user));
      window.location = "../Pages/Certificado.html"
      return;
    }
  }
})