const questions = [
    {
        question: "Какой язык программирования используется для веб-разработки?",
        options: ["JavaScript", "C++", "Java", "Ruby"],
        answer: "JavaScript"
    },
    {
        question: "Что такое CSS?",
        options: ["Каскадные таблицы стилей", "Язык программирования", "Система управления базами данных", "Фреймворк"],
        answer: "Каскадные таблицы стилей"
    }
];

let currentQuestionIndex = 0;
let timer;
const timeLimit = 15; // Время на ответ в секундах

function startQuiz() {
    currentQuestionIndex = 0;
    document.getElementById('app').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    askQuestion();
}

function askQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option, question.answer);
        optionsDiv.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    let timeLeft = timeLimit;
    document.getElementById('time').innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Время вышло! Переход к следующему вопросу.");
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                askQuestion();
            } else {
                alert("Квиз завершен! Спасибо за участие.");
                resetQuiz();
            }
        }
    }, 1000);
}

function checkAnswer(selected, correct) {
    clearInterval(timer); // Останавливаем таймер
    if (selected === correct) {
        alert("Правильно! Молодец!");
    } else {
        alert("Неправильно. Попробуй еще раз!");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        askQuestion();
    } else {
        alert("Квиз завершен! Спасибо за участие.");
        resetQuiz();
    }
}

function resetQuiz() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('app').style.display = 'block';
}
