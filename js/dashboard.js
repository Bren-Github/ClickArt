const user = JSON.parse (localStorage.getItem("user")) || []

const saludoUser = document.querySelector("#saludo-user");
const progreso = document.querySelector("#progreso");

for (let i = 0; i < user.length; i++) {
    if(user[i].logged === true){
        saludoUser.textContent = `Bienvenido ${user[i].user}`
        progreso.textContent = `Progreso: ${user[i].progreso}%`
    }
}
/* function updateProgress() {
    // Obtener el valor del slider
    const progressValue = document.getElementById("progress-bar").value;

    // Actualizar el porcentaje en el círculo
    const percentageText = document.getElementById("percentage");
    percentageText.textContent = `${progressValue}%`;

    // Obtener el elemento del círculo
    const circle = document.getElementById("progress-circle");

    // Actualizar el color del progreso en el círculo usando conic-gradient
    circle.style.background = `conic-gradient(#4db8ff ${progressValue}%, #f0f0f0 0%)`;
} */
