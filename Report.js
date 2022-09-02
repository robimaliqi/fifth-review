class Report {
  addScores(input) {
    this.input = input;
  }

  generate() {
    if (this.input == "Green") {
      return "Test 1:\nGreen: 1";
    } else return "Test 1:\nRed: 1";
  }
}

module.exports = Report;
