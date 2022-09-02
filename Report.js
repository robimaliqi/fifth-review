class Report {
  addScores(input) {
    this.input = input;
  }

  generate() {
    let a = [];

    let str = this.input.replace(/,/g, "");
    str.split(" ").forEach((word) => {
      a[word] = (a[word] || 0) + 1;
    });
    return a;
  }
}

const report = new Report();
report.addScores("Amber, Red, Red, Red");
console.log(report.generate());

module.exports = Report;
