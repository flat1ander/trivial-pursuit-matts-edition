// Declaring variables for all of the control elements:
const answerA = document.querySelector('#answer-a')
const answerB = document.querySelector('#answer-b')
const answerC = document.querySelector('#answer-c')
const answerD = document.querySelector('#answer-d')
const restart = document.querySelector('#restart')
const nextQuestion = document.querySelector('#next-question')
const questionText = document.querySelector('#question-text')
const answerButtons = document.querySelector('.possible-answers')
let playerScore = document.querySelector('#player-score')
let totalScore = document.querySelector('#total-score')
let resultDisplay = document.querySelector('#result-display')


// Creating the 10 trivia questions as objects inside one large array:
let triviaQuestions = [
    {
        question: 'Who was the original lead singer for the influential rock band The Velvet Underground?',
        answers: [
            {a: 'Glenn Danzig', answer: false},
            {b: 'Lou Reed', answer: true},
            {c: 'Robert Plant', answer: false},
            {d: 'Mick Jagger', answeR: false},
        ]
    },
    {
        question: 'Which of these films was NOT directed by Stanley Kubrick?',
        answers: [
            {a: '2001: A Space Odyssey', answer: false},
            {b: 'The Shining', answer: false},
            {c: 'Full Metal Jacket', answer: false},
            {d: 'The Godfather', answer: true},
        ]
    },
    {
        question: 'Who is the leading scorer in NBA history?',
        answers: [
            {a: 'Kareem-Abdul Jabar', answer: false},
            {b: 'Lebron James', answer: true},
            {c: 'Michael Jordan', answer: false},
            {d: 'Patrick Ewing', answer: false},
        ]
    },
    {
        question: 'Which of these characters is the narrator in the classic novel Moby Dick?',
        answers: [
            {a: 'Ishmael', answer: true},
            {b: 'Captain Ahab', answer: false},
            {c: 'Elijah', answer: false},
            {d: 'Queequeg', answer: false},
        ]
    },
    {
        question: 'Which of these films was NOT nominated for Best Picture at the 2023 Oscars?',
        answers: [
            {a: 'Banshees of Inisherin', answer: false},
            {b: 'Triangle of Sadness', answer: false},
            {c: 'Moonlight', answer: true},
            {d: 'The Fablemans', answer: false},
        ]
    },
    {
        question: 'Who performed at the 2023 Superbowl halftime show?',
        answers: [
            {a: 'Beyonce', answer: false},
            {b: 'Bruno Mars', answer: false},
            {c: 'The Rolling Stones', answer: false},
            {d: 'Rihanna', answer: true},
        ]
    },
    {
        question: 'Who is the highest grossing actor of all time?',
        answers: [
            {a: 'Samuel L. Jackson', answer: true},
            {b: 'Robery Downey Jr.', answer: false},
            {c: 'Scarlett Johansson', answer: false},
            {d: 'Tom Hanks', answer: false},
        ]
    },
    {
        question: 'Which of these frontmen is considered The Godfather of Punk Rock?',
        answers: [
            {a: 'Joey Ramone', answer: false},
            {b: 'Iggy Pop', answer: true},
            {c: 'Johnny Rotten', answer: false},
            {d: 'Jello Biafra', answer: false},
        ]
    },
    {
        question: 'Which of these drivers won the Formula 1 World Championship in 2022?',
        answers: [
            {a: 'Lewis Hamilton', answer: false},
            {b: 'Charles Leclerc', answer: false},
            {c: 'Max Verstappen', answer: true},
            {d: 'Sebastian Vettel', answer: false},
        ]
    },
    {
        question: 'Who played the role of Thomas Magnum in the 1980s television series Magnum P.I.?',
        answers: [
            {a: 'Tom Selleck', answer: true},
            {b: 'Scott Bakula', answer: false},
            {c: 'Peter Faulk', answer: false},
            {d: 'David Hasselhoff', answer: false},
        ]
    }]

// Declaring variables for the current question and the score:
let playerPoints = 0;
let totalPoints = 0;
let currentQuestion = 0;

// Game Start function:    
function gameStart() {
    // Set current question to 0 (the index value for question #1) and populate the screen with the question and answers:
    currentQuestion = 0;
    questionText.innerHTML = triviaQuestions[currentQuestion].question;
    answerA.innerHTML = triviaQuestions[0].answers[0].a;
    answerB.innerHTML = triviaQuestions[0].answers[1].b;
    answerC.innerHTML = triviaQuestions[0].answers[2].c;
    answerD.innerHTML = triviaQuestions[0].answers[3].d;
    // Hiding the result display which tells you if you answered correctly as well as the restart button:
    resultDisplay.classList.add('hide')
    restart.classList.add('hide')
}
// Invoke the gameStart function
gameStart();


// Next Question function:
function nextQuestionFunc () {
    // Increment currentQuestion by 1:
    currentQuestion ++;
    // Loop through all of the answer buttons to enable them again:
    for (let j = 0; j < answerButtons.children.length; j++) {
        answerButtons.children[j].disabled = false;}
    resultDisplay.classList.add('hide')
    // Disable the next question button until an answer has been selected:
    nextQuestion.disabled = true;
    // As the current question is incremented, the question text and possible answers change:
    if(currentQuestion === 1){
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
    // Once all ten questions have been answered, a message pops up indicating your total score and thanking you for playing:
    }else {
        resultDisplay.classList.remove('hide')
        resultDisplay.innerHTML = "You scored:"
        resultDisplay.style.color = "#00008B"
        resultDisplay.style.fontSize = "x-large";
        questionText.innerHTML = "Thank you for playing!"
        questionText.style.fontSize = "x-large";
        answerButtons.classList.add('hide');
        nextQuestion.classList.add('hide')
        restart.classList.remove('hide')
        
    }
}

// Adding a function to determine if the correct answer was clicked and adding points to the scoreboard:
// Loop through each answer button
function clickingAnswers() {
    for (let i = 0; i < answerButtons.children.length; i++) {
      let answerBtn = answerButtons.children[i];

      // Disable next question button while answer has not been selected:
      nextQuestion.disabled = true;
  
      // Add click event listener to each answer button
      answerBtn.addEventListener('click', function checkingAnswer() {
      
        // Check if the clicked answer is correct
        let isCorrect = triviaQuestions[currentQuestion].answers[i].answer;
      
        // Increase player's score if the answer is correct. Increase total score if incorrect. Include a message indicating if answer is correct:
        if (isCorrect) {
          playerPoints+= 1;
          totalPoints+= 1; 
          totalScore.innerHTML = totalPoints;
          playerScore.innerHTML = playerPoints;
          resultDisplay.classList.remove('hide')
          resultDisplay.innerHTML = 'Correct!'
          resultDisplay.style.color = 'green'

        } else {
          totalPoints+= 1;
          totalScore.innerHTML = totalPoints;
          resultDisplay.classList.remove('hide')
          resultDisplay.innerHTML = 'Incorrect'
          resultDisplay.style.color = '#8B0000'
        }
  
        // Disable all buttons after an answer is clicked
        for (let j = 0; j < answerButtons.children.length; j++) {
          answerButtons.children[j].disabled = true;
        }
        // Enable next question button after an answer is clicked:
        nextQuestion.disabled = false;
      });
    }
  }
// Invoking the clickingAnswers function:
clickingAnswers()


//Game Restart function:
function restartGame () {
    //Resetting all of the scores and current question:
    currentQuestion = 0;
    playerPoints = 0;
    totalPoints = 0;
    // Looping through the individual answer buttons to enable them to be clicked again:
    for (let j = 0; j < answerButtons.children.length; j++) {
        answerButtons.children[j].disabled = false;}
    // Resetting the question and answers to question number one:
    questionText.innerHTML = triviaQuestions[0].question;
    answerA.innerHTML = triviaQuestions[0].answers[0].a;
    answerB.innerHTML = triviaQuestions[0].answers[1].b;
    answerC.innerHTML = triviaQuestions[0].answers[2].c;
    answerD.innerHTML = triviaQuestions[0].answers[3].d;
    // Showing the answer buttons and next question button again:
    answerButtons.classList.remove('hide');
    nextQuestion.classList.remove('hide')
    // Hiding the result display text which tells you if your answer is correct. Also hiding the restart button:
    resultDisplay.classList.add('hide')
    restart.classList.add('hide')
    // Linking the internal score variables to the DOM 
    totalScore.innerHTML = totalPoints;
    playerScore.innerHTML = playerPoints;
}

// Adding on-click events to restart and next question with functions declared for each above:
restart.addEventListener('click', restartGame);
nextQuestion.addEventListener('click', nextQuestionFunc);



