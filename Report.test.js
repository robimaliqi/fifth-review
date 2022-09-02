const Report = require("./Report");

describe("report", () => {
  describe("./generate", () => {
    it("returns the number of times a score is input", () => {
      const report = new Report();
      report.addScores("Green");
      expect(report.generate()).toEqual("Green: 1");
    });
  });
});
