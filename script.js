document.addEventListener("DOMContentLoaded", function () {
    const answers = {
      q1: "A",
      q2: "C",
      q3: "B",
      q4: "A"
    };
    let score = 0;
    let totalQuestions = Object.keys(answers).length;
    let currentQuestionIndex = 0;
    const questions = document.querySelectorAll(".question");
    const submitButton = document.getElementById("submit-button");
    const resultDiv = document.getElementById("result");
    function showCurrentQuestion() {
      questions.forEach((question, index) => {
        if (index === currentQuestionIndex) {
          question.style.display = "block";
        } else {
          question.style.display = "none";
        }
      });
    }
    showCurrentQuestion();
    submitButton.addEventListener("click", function () {
      const userAnswer = document.querySelector(`input[name="q${currentQuestionIndex + 1}"]:checked`);
      if (userAnswer) {
        if (userAnswer.value === answers[`q${currentQuestionIndex + 1}`]) {
          score++;
        }
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < totalQuestions) {
        showCurrentQuestion();
      } else {
        resultDiv.innerHTML = `
          <p>Votre score : ${score}/${totalQuestions}</p>
          ${score === totalQuestions ? "<p>Bravo c'est ca !🎉 tu est trop fort🥳</p>" : "<p>Révise un peu plus stp</p>"}
        `;
        resultDiv.style.color = score === totalQuestions ? "green" : "red";
        submitButton.disabled = true;
      }
    });
  });
  