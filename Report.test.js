const Report = require("./Report");

describe("report", () => {
  describe("./generate", () => {
    it("returns the color Green input followed by 1", () => {
      const report = new Report();
      report.addScores("Green");
      expect(report.generate()).toEqual("Test 1:\nGreen: 1");
    });

    it("returns the color Red input followed by 1", () => {
      const report = new Report();
      report.addScores("Red");
      expect(report.generate()).toEqual("Test 1:\nRed: 1");
    });

    it("returns the color Amber input followed by 1", () => {
      const report = new Report();
      report.addScores("Amber");
      expect(report.generate()).toEqual("Test 1:\nAmber: 1");
    });

    it("returns the number of times two of the same color appears", () => {
      const report = new Report();
      report.addScores("Amber, Amber");
      expect(report.generate()).toEqual("Test 1:\nAmber: 2");
    });

    it("returns the number of times two scores are input", () => {
      const report = new Report();
      report.addScores("Red, Red");
      expect(report.generate()).toEqual("Test 1:\nRed: 2");
    });
  });
});
