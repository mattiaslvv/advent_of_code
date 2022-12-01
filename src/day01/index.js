import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let o = new Object();
  let c = 0;
  var s = input.split(/\r?\n/);
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "") {
      if (o[c]) {
        o[c] = Object.assign([...o[c], s[i]]);
      } else {
        o[c] = Object.assign([s[i]]);
      }
    } else {
      c++;
    }
  }
  let h = 0;
  for (const i in o) {
    let su = o[i].reduce((a, b) => Number(a) + Number(b), 0);
    if (su > h) {
      h = su;
    }
  }

  return h;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let o = new Object();
  let c = 0;
  var s = input.split(/\r?\n/);
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "") {
      if (o[c]) {
        o[c] = Object.assign([...o[c], s[i]]);
      } else {
        o[c] = Object.assign([s[i]]);
      }
    } else {
      c++;
    }
  }
  let a = [];
  for (const i in o) {
    let su = o[i].reduce((a, b) => Number(a) + Number(b), 0);
    a.push(su);
  }
  a.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));

  return a[0] + a[1] + a[2];
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
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
