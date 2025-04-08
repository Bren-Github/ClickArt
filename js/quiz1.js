function checkAnswer(element) {
    const correctAnswer = "Siglo XIX";
    const resultDiv = document.getElementById("result");

    if (element.innerText === correctAnswer) {
      element.style.backgroundColor = "#c8e6c9";
      resultDiv.textContent = "¡Correcto!";
      resultDiv.style.color = "green";
    } else {
      element.style.backgroundColor = "#ffcdd2";
      resultDiv.textContent = "Incorrecto.";
      resultDiv.style.color = "red";
    }

    // Desactiva todas las opciones después de responder
    let options = document.querySelectorAll('.option');
    options.forEach(opt => {
      opt.onclick = null;
    });
  }

  function checkAnswer(element) {
    const correctAnswer = "Siglo XIX";
    const resultDiv = document.getElementById("result");

    if (element.innerText === correctAnswer) {
      element.style.backgroundColor = "#c8e6c9";
      resultDiv.textContent = "¡Correcto!";
      resultDiv.style.color = "green";
    } else {
      element.style.backgroundColor = "#ffcdd2";
      resultDiv.textContent = "Incorrecto.";
      resultDiv.style.color = "red";
    }

    // Desactiva todas las opciones después de responder
    let options = document.querySelectorAll('.option');
    options.forEach(opt => {
      opt.onclick = null;
    });
  }