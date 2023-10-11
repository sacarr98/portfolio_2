// Quiz Questions
const Questions = [{
    ques: "What is the national language of Canada?",
    ans: [{ text: "English", isCorrect: false },
    { text: "French", isCorrect: false },
    { text: "Dutch", isCorrect: true },
    { text: "Spanish", isCorrect: false }
    ]

},
{
    ques: "Brazil is the biggest producer of?",
    ans: [{ text: "Rice", isCorrect: false, isSelected: false },
    { text: "Potatoes", isCorrect: false },
    { text: "Oil", isCorrect: false },
    { text: "Coffee", isCorrect: true }
    ]

},
{
    ques: "How many colors in the Rainbow?",
    ans: [{ text: "Five", isCorrect: false },
    { text: "Six", isCorrect: false },
    { text: "Seven", isCorrect: true },
    { text: "Eight", isCorrect: false }
    ]

},
{
    ques: "Which religion has a God specified for each Rain, Money, Children, and Love?",
    ans: [{ text: "Islam", isCorrect: false },
    { text: "Buddism", isCorrect: false },
    { text: "Hinduism", isCorrect: true },
    { text: "Jainism", isCorrect: false }
    ]

},
{
    ques: "What is the currency of Pakistan?",
    ans: [{ text: "Pound", isCorrect: false },
    { text: "Euro", isCorrect: false },
    { text: "Riyal", isCorrect: false },
    { text: "Rupee", isCorrect: true }
    ]

},
{
    ques: "Which popular Disney show was Miley Cyrus part of?",
    ans: [{ text: "Hannah Montanna", isCorrect: true },
    { text: "Two Broke Girls", isCorrect: false },
    { text: "Live it like Beckham", isCorrect: false },
    { text: "Suite life of Jack and Cody", isCorrect: false }
    ]

},
];

let currentQuestion = 0;
let score = 0;

function loadQuestions() {
    const question = document.getElementById("question");
    const ans = document.getElementById("answer");

    question.textContent = Questions[currentQuestion].ques;
    ans.innerHTML = "";

    for (let i = 0; i < Questions[currentQuestion].a.length; i++) {
        const optionsdiv = document.createElement("div");
        const option = document.createElement("input");
        const optionLabel = document.createElement("label");

        option.type = "radio";
        option.name = "answer";
        option.value = i;

        optionLabel.textContent = Questions[currentQuestion].a[i].text;

        optionsdiv.appendChild(option);
        optionsdiv.appendChild(optionLabel);
        ans.appendChild(optionsdiv);
    }
}

loadQuestions();

function playerScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You have scored ${score} out of a total ${Questions.length}`;
}

function nextQuestion() {
    if (currentQuestion < Questions.length - 1) {
        currentQuestion++;
        loadQuestions();
    } else {
        document.getElementById("ans").remove();
        document.getElementById("question").remove();
        document.getElementById("submit").remove();
        playerScore();
    }
}

function checkAnswer() {
    const playerAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (Questions[currentQuestion].a[playerAnswer].isCorrect) {
        score++;
        console.log("Correct");
        nextQuestion();
    } else {
        nextQuestion();
    }
}
