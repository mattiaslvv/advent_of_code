import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  var s = input.split(/\r?\n/);
  var overlaps = 0;
  s.forEach((element) => {
    var s = element.split(",");
    let sec1 = [];
    let sec2 = [];
    var s1s = s[0].split("-")[0];
    var s1e = s[0].split("-")[1];
    var s2s = s[1].split("-")[0];
    var s2e = s[1].split("-")[1];
    for (let index = Number(s1s); index <= s1e; index++) {
      sec1[index] = index;
    }
    for (let index = Number(s2s); index <= s2e; index++) {
      sec2[index] = index;
    }
    if (
      sec1.every((ai) => sec2.includes(ai)) ||
      sec2.every((ai) => sec1.includes(ai))
    ) {
      overlaps++;
    }
  });

  return overlaps;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  var s = input.split(/\r?\n/);
  var overlaps = 0;
  s.forEach((element) => {
    var s = element.split(",");
    let sec1 = [];
    let sec2 = [];
    var s1s = s[0].split("-")[0];
    var s1e = s[0].split("-")[1];
    var s2s = s[1].split("-")[0];
    var s2e = s[1].split("-")[1];
    for (let index = Number(s1s); index <= s1e; index++) {
      sec1[index] = index;
    }
    for (let index = Number(s2s); index <= s2e; index++) {
      sec2[index] = index;
    }
    if (
      sec1.some((r) => sec2.includes(r)) ||
      sec2.some((r) => sec1.includes(r))
    ) {
      overlaps++;
    }
  });

  return overlaps;
};

run({
  part1: {
    tests: [
      {
        input: `
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8
        `,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8
         `,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
