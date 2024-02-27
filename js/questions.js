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

const ContentFalse = [
  {
    text: "Wild-caught fish is always a better choice.",
    image: <img src="../images/fish.png" alt="fish" height="450" />,
    test: false,
    answer:
      "Some wild-caught fisheries are poorly managed, leading to overfishing and environmental damage.",
  },
  {
    text: "Organic means pesticide-free.",
    image: <img src="../images/fish.png" alt="fish" height="450" />,
    test: false,
    answer: "Organic farming uses pesticides too, but they are often natural.",
  },

  {
    text: "Local always means more sustainable.",
    image: <img src="../images/fish.png" alt="fish" height="450" />,
    test: false,
    answer:
      "Transportation only accounts for a small portion of food's environmental impact.",
  },
  {
    text: "All eco-friendly packaging is better for the environment.",
    image: <img src="../images/fish.png" alt="fish" height="450" />,
    test: false,
    answer:
      "Some alternatives may have hidden environmental costs in terms of production, disposal, or recycling.",
  },
  {
    text: "Food waste doesn't contribute much to environmental issues.",
    image: <img src="../images/fish.png" alt="fish" height="450" />,
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
    image: <img src="../images/fish.png" alt="fish" height="450" />,
    test: true,
    answer: "Organic farming uses pesticides too, but they are often natural.",
  },
  {
    text: "Local doesn't always mean more sustainable.",
    image: <img src="../images/fish.png" alt="fish" height="450" />,
    test: true,
    answer:
      "Transportation only accounts for a small portion of food's environmental impact.",
  },
  {
    text: "Not all eco-friendly packaging is better for the environment.",
    image: <img src="../images/fish.png" alt="fish" height="450" />,
    test: true,
    answer:
      "Some alternatives may have hidden environmental costs in terms of production, disposal, or recycling.",
  },
  {
    text: "Food waste does contribute significantly to environmental issues.",
    image: <img src="../images/fish.png" alt="fish" height="450" />,
    test: true,
    answer:
      "Food waste generates methane in landfills and contributes significantly to greenhouse gas emissions.",
  },
];
