class Question {
  constructor(text, image, answer) {
    this.text = text;
    this.image = image;
    this.test = true || false;
    this.answer = answer;
  }
  shuffleChoices() {
    this.choices.sort(() => Math.random() - 0.5);
  }
}
class YourGame {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
  }

  start() {
    // Hide the start screen
    this.startScreen.style.display = "none";

    // Show the game screen using display: flex
    this.gameScreen.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const yourGameInstance = new YourGame();
  const startButton = document.getElementById("start-button");

  startButton.addEventListener("click", () => {
    startNewGame.start();
  });
});

const ContentFalse = [
  {
    text: "Wild-caught fish is always a better choice.",
    image: `<"img src=../images/fish.png" alt="fish" height="450" />`,
    test: false,
    answer:
      "Some wild-caught fisheries are poorly managed, leading to overfishing and environmental damage.",
  },
  {
    text: "Organic means pesticide-free.",
    image: <img src="../images/pesticides.png" alt="pesticide" height="450" />,
    test: false,
    answer: "Organic farming uses pesticides too, but they are often natural.",
  },

  {
    text: "Local always means more sustainable.",
    image: <img src="../images/truck.png" alt="truck" height="450" />,
    test: false,
    answer:
      "Transportation only accounts for a small portion of food's environmental impact.",
  },
  {
    text: "All eco-friendly packaging is better for the environment.",
    image: (
      <img src="../images/paper-packaging.png" alt="packaging" height="450" />
    ),
    test: false,
    answer:
      "Some alternatives may have hidden environmental costs in terms of production, disposal, or recycling.",
  },
  {
    text: "Food waste doesn't contribute much to environmental issues.",
    image: <img src="../images/food-waste.png" alt="trash bin" height="450" />,
    test: false,
    answer:
      "Food waste generates methane in landfills and contributes significantly to greenhouse gas emissions.",
  },
];
const ContentTrue = [
  {
    text: "Wild-caught fish is not always a better choice.",
    image: <img src="../images/fish.png" alt="fish" height="450" />,
    test: true,
    answer:
      "Some wild-caught fisheries are poorly managed, leading to overfishing and environmental damage.",
  },
  {
    text: "Organic does not mean pesticide-free.",
    image: <img src="../images/pesticides.png" alt="pesticide" height="450" />,
    test: true,
    answer: "Organic farming uses pesticides too, but they are often natural.",
  },
  {
    text: "Local doesn't always mean more sustainable.",
    image: <img src="../images/truck.png" alt="truck" height="450" />,
    test: true,
    answer:
      "Transportation only accounts for a small portion of food's environmental impact.",
  },
  {
    text: "Not all eco-friendly packaging is better for the environment.",
    image: (
      <img src="../images/paper-packaging.png" alt="packaging" height="450" />
    ),
    test: true,
    answer:
      "Some alternatives may have hidden environmental costs in terms of production, disposal, or recycling.",
  },
  {
    text: "Food waste does contribute significantly to environmental issues.",
    image: <img src="../images/food-waste.png" alt="trash bin" height="450" />,
    test: true,
    answer:
      "Food waste generates methane in landfills and contributes significantly to greenhouse gas emissions.",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const gameIntro = document.getElementById("game-intro");
  const gameScreen = document.getElementById("game-screen");
  const gameEnd = document.getElementById("game-end");
  const mythButton = document.getElementById("myth-button");
  const trueButton = document.getElementById("true-button");
  const newGameButton = document.getElementById("restart-button");
  const questionText = document.getElementById("intro-text");
  const questionImage = document.getElementById("content-image");
  const answerFeedback = document.getElementById("answer-feedback"); // Adjust as needed
  const scoreDisplay = document.getElementById("button-zone"); // Adjust as needed
  const yourGameInstance = new YourGame();
});
// let shuffledQuestions = [];
// let currentQuestionIndex = 0;
// let correctAnswers = 0;

// function startGame() {
//   shuffledQuestions = shuffle([...ContentFalse, ...ContentTrue]);
//   currentQuestionIndex = 0;
//   correctAnswers = 0;
//   updateQuestion();
// }

// function updateQuestion() {
//   if (currentQuestionIndex < shuffledQuestions.length) {
//     const currentQuestion = shuffledQuestions[currentQuestionIndex];
//     questionText.innerHTML = currentQuestion.text;
//     questionImage.innerHTML = currentQuestion.image;
//     answerFeedback.innerHTML = "";
//     questionsLeftDisplay.innerHTML = `Questions left: ${
//       shuffledQuestions.length - currentQuestionIndex
//     }`;
//   } else {
//     endGame();
//   }
// }

// function submitAnswer(userAnswer) {
//   const currentQuestion = shuffledQuestions[currentQuestionIndex];
//   answerFeedback.innerHTML = `Correct answer: ${currentQuestion.answer}`;

//   if (userAnswer === currentQuestion.test) {
//     correctAnswers++;
//   }

//   scoreDisplay.innerHTML = `Score: ${correctAnswers}`;
//   currentQuestionIndex++;
//   updateQuestion();
// }

// function endGame() {
//   questionText.innerHTML = "Game Over";
//   questionImage.innerHTML = "";
//   answerFeedback.innerHTML = "";
//   scoreDisplay.innerHTML = `Final Score: ${correctAnswers}`;
//   questionsLeftDisplay.innerHTML = "";
// }

// document.getElementById("start-button").addEventListener("click", () => {
//     yourGameInstance.start();

// mythButton.addEventListener("click", () => submitAnswer(false));
// trueButton.addEventListener("click", () => submitAnswer(true));
// newGameButton.addEventListener("click", gameScreen);

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
