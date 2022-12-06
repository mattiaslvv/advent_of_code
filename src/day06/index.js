import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let ans;
  var s = input.split(/\r?\n/)[0];
  for (let i = 4 - 1; i < s.length; i++) {
    let arr = [];
    for (let j = 0; j < 4; j++) {
      arr.push(s[i - j]);
    }
    let set = new Set(arr);
    if (set.size === 4) {
      ans = i + 1;
      break;
    }
  }
  return ans;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let ans;
  var s = input.split(/\r?\n/)[0];
  for (let i = 14 - 1; i < s.length; i++) {
    let arr = [];
    for (let j = 0; j < 14; j++) {
      arr.push(s[i - j]);
    }
    let set = new Set(arr);
    if (set.size === 14) {
      ans = i + 1;
      break;
    }
  }
  return ans;
};

run({
  part1: {
    tests: [
      {
        input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
        expected: 11,
      },
      {
        input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
        expected: 10,
      },
      {
        input: `nppdvjthqldpwncqszvftbrmjlhg`,
        expected: 6,
      },
      {
        input: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
        expected: 7,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
        expected: 26,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
