import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

function findCommon(a, b) {
  const common = new Set();
  const uniqueB = new Set(a);
  for (const value of b) if (uniqueB.has(value)) common.add(value);
  return common;
}

function findAllCommon(arr) {
  if (arr.length === 0) return [];
  let common = new Set(arr[0]);
  for (let i = 1; i < arr.length; i += 1) {
    common = findCommon(common, arr[i]);
  }
  return [...common];
}

const lowerC = [];
const upperC = [];

function initValueArrs() {
  let c1 = 65;
  let c2 = 65;
  for (let i = 1; i < 200; i++) {
    if (i >= 1 && i <= 26) {
      lowerC[i] = String.fromCharCode(c1).toLowerCase();
      c1++;
    }
    if (i >= 27 && i <= 52) {
      upperC[i] = String.fromCharCode(c2).toUpperCase();
      c2++;
    }
  }
}

function findPrioValue(c) {
  let v = lowerC.findIndex((e) => e == c);
  return v !== -1 ? v : upperC.findIndex((e) => e == c);
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  initValueArrs();
  let sum = 0;
  var s = input.split(/\r?\n/);
  for (let i = 0; i < s.length; i++) {
    sum += findPrioValue(
      findAllCommon([
        s[i].slice(0, s[i].length / 2),
        s[i].slice(s[i].length / 2, s[i].length),
      ]),
    );
  }

  return sum;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  initValueArrs();
  let sum = 0;
  var s = input.split(/\r?\n/);
  for (let i = 0; i < s.length; i++) {
    if (i % 3 === 0) {
      let str = [s[i], s[i + 1], s[i + 2]];
      sum += findPrioValue(findAllCommon(str));
    }
  }

  return sum;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
      vJrwpWtwJgWrhcsFMMfFFhFp
      jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
      PmmdzqPrVvPwwTWBwg
      wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
      ttgJtRGJQctTZtZT
      CrZsJsPPZsGzwwsLwLmpwMDw
      `,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
