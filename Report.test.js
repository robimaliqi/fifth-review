const Report = require("./Report");

describe("report", () => {
  describe("./generate", () => {
    it("returns the number of times a score is input", () => {
      const report = new Report();
      report.addScores("Green");
      expect(report.generate()).toEqual("Test 1:\nGreen: 1");
    });
    it("returns the number of times a score is input", () => {
      const report = new Report();
      report.addScores("Red");
      expect(report.generate()).toEqual("Test 1:\nRed: 1");
    });
    it("returns the number of times a score is input", () => {
      const report = new Report();
      report.addScores("Amber");
      expect(report.generate()).toEqual("Test 1:\nAmber: 1");
    });
  });
});
