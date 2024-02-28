window.onload = function () {
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
  const questionsAndAnswers = [
    {
      text: "Wild-caught fish is always a better choice.",
      Image: `../images/fish.png`,
      test: false,
      answer:
        "Some wild-caught fisheries are poorly managed, leading to overfishing and environmental damage.",
    },
    {
      text: "Organic means pesticide-free.",
      image: `../images/pesticides.png`,
      test: false,
      answer:
        "Organic farming uses pesticides too, but they are often natural.",
    },

    {
      text: "Local always means more sustainable.",
      image: `../images/truck.png`,
      test: false,
      answer:
        "Transportation only accounts for a small portion of food's environmental impact.",
    },
    {
      text: "All eco-friendly packaging is better for the environment.",
      image: `../images/paper-packaging.png`,
      test: false,
      answer:
        "Some alternatives may have hidden environmental costs in terms of production, disposal, or recycling.",
    },
    {
      text: "Food waste doesn't contribute much to environmental issues.",
      image: `../images/food-waste.png`,
      test: false,
      answer:
        "Food waste generates methane in landfills and contributes significantly to greenhouse gas emissions.",
    },
  ];
  // const ContentTrue = [
  //   {
  //     text: "Wild-caught fish is not always a better choice.",
  //     image: `../images/fish.png`,
  //     test: true,
  //     answer:
  //       "Some wild-caught fisheries are poorly managed, leading to overfishing and environmental damage.",
  //   },
  //   {
  //     text: "Organic does not mean pesticide-free.",
  //     image: `../images/pesticides.png`,
  //     test: true,
  //     answer:
  //       "Organic farming uses pesticides too, but they are often natural.",
  //   },
  //   {
  //     text: "Local doesn't always mean more sustainable.",
  //     image: `../images/truck.png`,
  //     test: true,
  //     answer:
  //       "Transportation only accounts for a small portion of food's environmental impact.",
  //   },
  //   {
  //     text: "Not all eco-friendly packaging is better for the environment.",
  //     image: `../images/paper-packaging.png`,
  //     test: true,
  //     answer:
  //       "Some alternatives may have hidden environmental costs in terms of production, disposal, or recycling.",
  //   },
  //   {
  //     text: "Food waste does contribute significantly to environmental issues.",
  //     image: `../images/food-waste.png`,
  //     test: true,
  //     answer:
  //       "Food waste generates methane in landfills and contributes significantly to greenhouse gas emissions.",
  //   },
  // ];

  startButton.addEventListener("click", () => {
    yourGameInstance.start();
  });
};
