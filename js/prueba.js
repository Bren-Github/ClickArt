document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Respuestas correctas
    const correctAnswers = {
      q1: "c",
      q2: "c",
      q3: "b",
      q4: "b",
      q5: "a"
    };
  
    let score = 0;
  
    for (let q in correctAnswers) {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === correctAnswers[q]) {
        score++;
      }
    }
  
    document.getElementById("result").textContent = `Obtuviste ${score} de 5 respuestas correctas.`;
  });
  