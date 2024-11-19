const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";
  contentFinishmo.style.display = "none"

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();

  } else {

    finish();
  }
}

function finish() {
  if (questionsCorrect === questions.length) {
    textFinish.innerHTML = `Parabéns você acertou ${questionsCorrect } de ${questions.length}, você é realmente o meu Mo !!,`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
  

  } else {
    textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}, você não é meu Mo, sai fora !!`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
    btnRestart.style.display = "none";
  }
  
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
