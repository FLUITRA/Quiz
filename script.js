const questions = [
    { question: "Bu bir örnek sorudur?", answer: "yes" },
    { question: "JavaScript bir programlama dilidir?", answer: "yes" },
    { question: "HTML yalnızca bir stil dilidir?", answer: "no" }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElem = document.getElementById('question');
    const optionsElem = document.getElementById('options');

    questionElem.innerText = `Soru ${currentQuestion + 1}: ${questions[currentQuestion].question}`;

    optionsElem.innerHTML = '';
    questions[currentQuestion].options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsElem.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }

    updateScore();
}

function updateScore() {
    const scoreElem = document.getElementById('score');
    scoreElem.innerText = `Puan: ${score}`;
}

function endQuiz() {
    alert(`Quiz bitti! Toplam puan: ${score}`);
}

loadQuestion();
