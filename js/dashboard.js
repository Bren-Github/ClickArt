const user = JSON.parse (localStorage.getItem("user")) || []

const saludoUser = document.querySelector("#saludo-user");
const progreso = document.querySelector("#progreso");
const progress1 = document.querySelector("#progress-1")
const progress2 = document.querySelector("#progress-2")

for (let i = 0; i < user.length; i++) {
    if(user[i].logged === true){
        saludoUser.textContent = `Bienvenido ${user[i].user}`
        progreso.textContent = `Progreso: ${user[i].progreso}%`
        progress1.style.width = `${user[i].progreso}%`
        progress2.style.width = `${user[i].progreso}%`
    }
}
let current = 0;               // Progreso actual
  const target = 100;             // Progreso final (puedes cambiarlo)
  const speed = 200;              // Más bajo = más rápido (milisegundos)

  const circle = document.getElementById('progress-circle');
  const text = document.getElementById('progress-text');

  const updateProgress = () => {
    if (current <= target) {
      circle.style.background = `conic-gradient(#1CB99D 0% ${current}%, #ddd ${current}% 100%)`;
      text.innerText = `${current}%`;
      current++;
      setTimeout(updateProgress, speed);
    }
  };

  updateProgress();