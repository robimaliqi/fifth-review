School reports company
aim to find out how students done on tests
aim to find students performance of students that take multiple tests in a given year.

Build a system that accepts multiple test entries and report on each test entry.

2 methods:
Add scores,
Generate reports.

```js
const report = new Report();
report.addScores("Green, Green, Amber, Red, Green");
report.addScores("Amber, Amber, Green, Red, Amber");
report.addScores("Red, Red, Amber, Red, Amber");

report.generate();

// => "Test 1:\nGreen: 3\nAmber: 1\nRed: 1\n---\nTest 2:\nGreen: 1\nAmber: 3\nRed: 1\n---\nTest 3:Green: 0\nAmber: 2\nRed: 3"

/*Test 1:
Green: 3
Amber: 1
Red: 1
---
Test 2:
Green: 1
Amber: 3
Red: 1
---
Test 3:
Green: 0
Amber: 2
Red: 3*/
```

edge cases:

incorrect input (i.e wrong spelling or something different) throws error

Input | Output
