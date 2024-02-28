// Import the questionsAndAnswers array from your other JS file
// Make sure the file path is correct
// For example, if the other file is "questions.js", you might have:
// import { questionsAndAnswers } from './questions.js';

class YourGame {
  constructor() {
    this.gameIntro = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.mythButton = document.getElementById("myth-button");
    this.trueButton = document.getElementById("true-button");
  }

  start() {
    // Hide the start screen
    this.gameIntro.style.display = "none";

    // Show the game screen using display: flex
    this.gameScreen.style.display = "flex";

    // Start the game with the first question
    startGame(this);
  }
}

// const yourGameInstance = new YourGame();
// let shuffledQuestions = [];
// let currentQuestionIndex = 0;
// let correctAnswers = 0;
// const questionsAndAnswers = []; // Import this array from your other file

// yourGameInstance.mythButton.addEventListener("click", () => checkAnswer(false));

// yourGameInstance.trueButton.addEventListener("click", () => checkAnswer(true));

// function startGame(gameInstance) {
//   // Use questionsAndAnswers array here
//   shuffledQuestions = shuffle([...questionsAndAnswers]);
//   currentQuestionIndex = 0;
//   correctAnswers = 0;
//   updateQuestion();

//   // Attach event listeners after the question is displayed
//   gameInstance.mythButton.addEventListener("click", () => checkAnswer(false));
//   gameInstance.trueButton.addEventListener("click", () => checkAnswer(true));
// }

// function updateQuestion() {
//   if (currentQuestionIndex < shuffledQuestions.length) {
//     const currentQuestion = shuffledQuestions[currentQuestionIndex];
//     // Update your UI with the current question
//   } else {
//     // Handle the end of the game
//   }
// }

// function checkAnswer(userAnswer) {
//   // Make sure there are questions left
//   if (currentQuestionIndex < shuffledQuestions.length) {
//     const currentQuestion = shuffledQuestions[currentQuestionIndex];

//     // Check if user's answer matches the correct answer
//     if (userAnswer === currentQuestion.test) {
//       // Increment the score
//       correctAnswers++;
//       // Update the score display
//       scoreDisplay.innerHTML = `Score: ${correctAnswers}`;
//     }
//   }
//   // Continue to the next question
//   currentQuestionIndex++;
//   updateQuestion();
// }

// function shuffle(array) {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// }

// // ... (other code)
