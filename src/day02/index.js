import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

let score = 0;

function rps(val) {
  switch (val) {
    case "A":
    case "X": {
      return "🪨";
    }
    case "B":
    case "Y": {
      return "📃";
    }
    case "C":
    case "Z": {
      return "✂";
    }
  }
}

function getPlayedHandScore(val) {
  switch (val) {
    case "🪨": {
      return 1;
    }
    case "📃": {
      return 2;
    }
    case "✂": {
      return 3;
    }
  }
}

function getPoints(a, b) {
  switch (true) {
    case a == "🪨" && b == "📃": {
      score += getPlayedHandScore(b) + 6;
      break;
    }
    case a == "📃" && b == "🪨": {
      score += getPlayedHandScore(b) + 0;
      break;
    }
    case a == "✂" && b == "🪨": {
      score += getPlayedHandScore(b) + 6;
      break;
    }
    case a == "🪨" && b == "✂": {
      score += getPlayedHandScore(b) + 0;
      break;
    }
    case a == "📃" && b == "✂": {
      score += getPlayedHandScore(b) + 6;
      break;
    }
    case a == "✂" && b == "📃": {
      score += getPlayedHandScore(b) + 0;
      break;
    }
    case a == b: {
      switch (b) {
        case "🪨": {
          score += getPlayedHandScore(b) + 3;
          break;
        }
        case "📃": {
          score += getPlayedHandScore(b) + 3;
          break;
        }
        case "✂": {
          score += getPlayedHandScore(b) + 3;
          break;
        }
      }
    }
  }
}

function dws(a, b) {
  switch (b) {
    case "X": {
      switch (a) {
        case "🪨": {
          return "✂";
        }
        case "✂": {
          return "📃";
        }
        case "📃": {
          return "🪨";
        }
      }
    }
    case "Y": {
      return a;
    }
    case "Z": {
      switch (a) {
        case "🪨": {
          return "📃";
        }
        case "✂": {
          return "🪨";
        }
        case "📃": {
          return "✂";
        }
      }
    }
  }
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let s = input.split(/\r?\n/);

  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].replace(/\s/g, "");
    getPoints(rps(s[i].charAt(0)), rps(s[i].charAt(1)));
  }

  return score;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  score = 0;
  let s = input.split(/\r?\n/);

  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].replace(/\s/g, "");
    let a = rps(s[i].charAt(0));
    getPoints(a, dws(a, s[i].charAt(1)));
  }

  return score;
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
