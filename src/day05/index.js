import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

function isVal(val) {
  return val && (val !== " ") & (val !== "[") && val !== "]";
}

function moveBox9000(number, from, to, arr) {
  for (let i = 0; i < number; i++) {
    arr[to].push(arr[from].pop());
  }
}

function moveBox9001(number, from, to, arr) {
  if (number == 1) {
    moveBox9000(number, from, to, arr);
  } else {
    let ua = [];
    for (let i = number; i > 0; i--) {
      ua.push(arr[from][arr[from].length - i]);
    }
    arr[to] = [...arr[to], ...ua];
    arr[from].splice(arr[from].length - number, number);
  }
}

const part1 = (rawInput) => {
  function indexOfHash(val, hash) {
    return hash.hasOwnProperty(val) ? hash[val] : -1;
  }
  let input = parseInput(rawInput);
  var s = input.split(/\r?\n/);
  var c = s
    .filter((s) => s && !s.includes("move") && !s.includes("["))
    .map((s) => s.replace(/\s+/g, ""))[0];
  var boxes = s.filter((s) => s && !s.includes("move") && s.includes("["));
  var moves = s.filter((s) => s && s.includes("move"));
  let cols = [];
  let a = 1;
  for (const e in c) {
    cols[c[e]] = [a];
    a = a + 4;
  }
  var hash = {};
  for (var i = 0; i < cols.length; i++) {
    hash[cols[i]] = i;
  }
  for (let i = boxes.length - 1; i >= 0; i--) {
    for (let j = boxes[i].length - 1; j >= 0; j--) {
      if (isVal(boxes[i][j])) {
        let c = indexOfHash(j, hash);
        if (c) {
          cols[c].push(boxes[i][j]);
        }
      }
    }
  }
  for (let i = 0; i < moves.length; i++) {
    let m = moves[i].match(/\d+/g);
    moveBox9000(m[0], m[1], m[2], cols);
  }
  let ans = [];
  cols.forEach((col) => {
    ans.push(col.pop());
  });
  ans = ans.join().replaceAll(",", "");
  return ans;
};

const part2 = (rawInput) => {
  function indexOfHash(val, hash) {
    return hash.hasOwnProperty(val) ? hash[val] : -1;
  }
  let input = parseInput(rawInput);
  var s = input.split(/\r?\n/);
  var c = s
    .filter((s) => s && !s.includes("move") && !s.includes("["))
    .map((s) => s.replace(/\s+/g, ""))[0];
  var boxes = s.filter((s) => s && !s.includes("move") && s.includes("["));
  var moves = s.filter((s) => s && s.includes("move"));
  let cols = [];
  let a = 1;
  for (const e in c) {
    cols[c[e]] = [a];
    a = a + 4;
  }
  var hash = {};
  for (var i = 0; i < cols.length; i++) {
    hash[cols[i]] = i;
  }
  for (let i = boxes.length - 1; i >= 0; i--) {
    for (let j = boxes[i].length - 1; j >= 0; j--) {
      if (isVal(boxes[i][j])) {
        let c = indexOfHash(j, hash);
        if (c) {
          cols[c].push(boxes[i][j]);
        }
      }
    }
  }
  for (let i = 0; i < moves.length; i++) {
    let m = moves[i].match(/\d+/g);
    moveBox9001(m[0], m[1], m[2], cols);
  }
  let ans = [];
  cols.forEach((col) => {
    ans.push(col.pop());
  });
  ans = ans.join().replaceAll(",", "");
  return ans;
};

run({
  part1: {
    tests: [
      {
        input: `
  `,
        expected: "",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        `,
        expected: "",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
