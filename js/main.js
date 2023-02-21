// Declaring variables for all of the control elements:
const answerA = document.querySelector('#answer-a')
const answerB = document.querySelector('#answer-b')
const answerC = document.querySelector('#answer-c')
const answerD = document.querySelector('#answer-d')
const restart = document.querySelector('#restart')
const nextQuestion = document.querySelector('#next-question')

// const submitAnswer = document.querySelector('#submit-answer')
const questionText = document.querySelector('#question-text')

// Creating the 10 trivia questions:
let triviaQuestions = [
    {
        question: "Who was the original lead singer for the influential rock band The Velvet Underground?",
        answers: [
            {a: "Glenn Danzig", answer: false},
            {b: "Lou Reed", answer: true},
            {c: "Robert Plant", answer: false},
            {d: "Mick Jagger", answeR: false},
        ]
    },
    {
        question: "Which of these films was NOT directed by Stanley Kubrick?",
        answers: [
            {a: "2001: A Space Odyssey", answer: false},
            {b: "The Shining", answer: false},
            {c: "Full Metal Jacket", answer: false},
            {d: "The Godfather", answer: true},
        ]
    },
    {
        question: "Who is the leading scorer in NBA history?",
        answers: [
            {a: "Kareem-Abdul Jabar", answer: false},
            {b: "Lebron James", answer: true},
            {c: "Michael Jordan", answer: false},
            {d: "Patrick Ewing", answer: false},
        ]
    },
    {
        question: "Which of these characters is the narrator in the classic novel 'Moby Dick'?",
        answers: [
            {a: "Ishmael", answer: true},
            {b: "Captain Ahab", answer: false},
            {c: "Elijah", answer: false},
            {d: "Queequeg", answer: false},
        ]
    },
    {
        question: "Which of these films was NOT nominated for Best Picture at the 2023 Oscars?",
        answers: [
            {a: "Banshees of Inisherin", answer: false},
            {b: "Triangle of Sadness", answer: false},
            {c: "Moonlight", answer: true},
            {d: "The Fablemans", answer: false},
        ]
    },
    {
        question: "Who performed at the 2023 Superbowl halftime show?",
        answers: [
            {a: "Beyonce", answer: false},
            {b: "Bruno Mars", answer: false},
            {c: "The Rolling Stones", answer: false},
            {d: "Rihanna", answer: true},
        ]
    },
    {
        question: "Who is the highest grossing actor of all time?",
        answers: [
            {a: "Samuel L. Jackson", answer: true},
            {b: "Robery Downey Jr.", answer: false},
            {c: "Scarlett Johansson", answer: false},
            {d: "Tom Hanks", answer: false},
        ]
    },
    {
        question: "Which of these frontmen is considered 'The Godfather of Punk Rock?'",
        answers: [
            {a: "Joey Ramone", answer: false},
            {b: "Iggy Pop", answer: true},
            {c: "Johnny Rotten", answer: false},
            {d: "Jello Biafra", answer: false},
        ]
    },
    {
        question: "Which of these drivers won the Formula 1 World Championship in 2022?",
        answers: [
            {a: "Lewis Hamilton", answer: false},
            {b: "Charles Lecerlc", answer: false},
            {c: "Max Verstappen", answer: true},
            {d: "Sebastian Vettel", answer: false},
        ]
    },
    {
        question: "Who played the role of Thomas Magnum in the 1980s television series Magnum P.I.?",
        answers: [
            {a: "Tom Selleck", answer: true},
            {b: "Scott Bakula", answer: false},
            {c: "Peter Faulk", answer: false},
            {d: "David Hasselhoff", answer: false},
        ]
    }]

// Declaring variables for the current question and the score:
let currentQuestion = 0;
let playerScore = 0;

// Creating an if statement that will populate the page with the questions/answers based on the currentQuestion variable:
    if(currentQuestion === 0){
        questionText.innerHTML = triviaQuestions[0].question;
        answerA.innerHTML = triviaQuestions[0].answers[0].a;
        answerB.innerHTML = triviaQuestions[0].answers[1].b;
        answerC.innerHTML = triviaQuestions[0].answers[2].c;
        answerD.innerHTML = triviaQuestions[0].answers[3].d;
    }else if(currentQuestion === 1){
        questionText.innerHTML = triviaQuestions[1].question;
        answerA.innerHTML = triviaQuestions[1].answers[0].a;
        answerB.innerHTML = triviaQuestions[1].answers[1].b;
        answerC.innerHTML = triviaQuestions[1].answers[2].c;
        answerD.innerHTML = triviaQuestions[1].answers[3].d;
    }else if(currentQuestion === 2){
        questionText.innerHTML = triviaQuestions[2].question;
        answerA.innerHTML = triviaQuestions[2].answers[0].a;
        answerB.innerHTML = triviaQuestions[2].answers[1].b;
        answerC.innerHTML = triviaQuestions[2].answers[2].c;
        answerD.innerHTML = triviaQuestions[2].answers[3].d;
    }else if(currentQuestion === 3){
        questionText.innerHTML = triviaQuestions[3].question;
        answerA.innerHTML = triviaQuestions[3].answers[0].a;
        answerB.innerHTML = triviaQuestions[3].answers[1].b;
        answerC.innerHTML = triviaQuestions[3].answers[2].c;
        answerD.innerHTML = triviaQuestions[3].answers[3].d;
    }else if(currentQuestion === 4){
        questionText.innerHTML = triviaQuestions[4].question;
        answerA.innerHTML = triviaQuestions[4].answers[0].a;
        answerB.innerHTML = triviaQuestions[4].answers[1].b;
        answerC.innerHTML = triviaQuestions[4].answers[2].c;
        answerD.innerHTML = triviaQuestions[4].answers[3].d;
    }else if(currentQuestion === 5){
        questionText.innerHTML = triviaQuestions[5].question;
        answerA.innerHTML = triviaQuestions[5].answers[0].a;
        answerB.innerHTML = triviaQuestions[5].answers[1].b;
        answerC.innerHTML = triviaQuestions[5].answers[2].c;
        answerD.innerHTML = triviaQuestions[5].answers[3].d;
    }else if(currentQuestion === 6){
        questionText.innerHTML = triviaQuestions[6].question;
        answerA.innerHTML = triviaQuestions[6].answers[0].a;
        answerB.innerHTML = triviaQuestions[6].answers[1].b;
        answerC.innerHTML = triviaQuestions[6].answers[2].c;
        answerD.innerHTML = triviaQuestions[6].answers[3].d;
    }else if(currentQuestion === 7){
        questionText.innerHTML = triviaQuestions[7].question;
        answerA.innerHTML = triviaQuestions[7].answers[0].a;
        answerB.innerHTML = triviaQuestions[7].answers[1].b;
        answerC.innerHTML = triviaQuestions[7].answers[2].c;
        answerD.innerHTML = triviaQuestions[7].answers[3].d;
    }else if(currentQuestion === 8){
        questionText.innerHTML = triviaQuestions[8].question;
        answerA.innerHTML = triviaQuestions[8].answers[0].a;
        answerB.innerHTML = triviaQuestions[8].answers[1].b;
        answerC.innerHTML = triviaQuestions[8].answers[2].c;
        answerD.innerHTML = triviaQuestions[8].answers[3].d;
    }else if(currentQuestion === 9){
        questionText.innerHTML = triviaQuestions[9].question;
        answerA.innerHTML = triviaQuestions[9].answers[0].a;
        answerB.innerHTML = triviaQuestions[9].answers[1].b;
        answerC.innerHTML = triviaQuestions[9].answers[2].c;
        answerD.innerHTML = triviaQuestions[9].answers[3].d;
    }


    
// Game Start function below:    
function gameStart() {
    currentQuestion = 0;
    questionText.innerHTML = triviaQuestions[0].question;

}






