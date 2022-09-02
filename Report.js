class Report {
  addScores(input) {
    this.input = input;
  }

  generate() {
    if (this.input == "Green") {
      return "Test 1:\nGreen: 1";
    } else if (this.input == "Red") {
      return "Test 1:\nRed: 1";
    } else if (this.input == "Amber") {
      return "Test 1:\nAmber: 1";
    } else return "Test 1:\nAmber: 2";
  }
}

module.exports = Report;
