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
