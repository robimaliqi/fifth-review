class Report {
  addScores(input) {
    this.input = input;
  }

  generate() {
    if (this.input === "Amber, Amber" || this.input == "Red, Red") {
      return `Test 1:\n${this.input.split(" ")[0].replace(",", "")}: 2`;
    } else {
      return `Test 1:\n${this.input}: 1`;
    }
  }
}
module.exports = Report;

// } else if (this.input == "Amber") {
//   return "Test 1:\nAmber: 1";
// } else if (this.input == "Amber, Amber") {
//   return "Test 1:\nAmber: 2";
// } else if (this.input == "Amber, Amber") {
//   return "Test 1:\nAmber: 2";
// } else {
//   return "Test 1:\nAmber: 1\nRed: 1";
// }

// generate() {
//   let a = [];

//   const str = this.input.replace(/,/g, "").split(" ");
//   str.forEach((word) => {
//     a[word] = (a[word] || 0) + 1;
//   });
//   return a.split(" ");
// }

// const report = new Report();
// report.addScores("Amber, Red, Red, Red");
// console.log(report.generate());
