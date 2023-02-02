function romanToInt(str) {
  const rom = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const strArr = str.split("");
  let result = 0;
  let nxtIdx;

  for (let i = 0; i < strArr.length; i++) {
    if (nxtIdx > 0 && nxtIdx == i) {
      continue;
    }

    let nxt = 0;
    let n = rom[strArr[i].toUpperCase()];

    if (i != strArr.length - 1) {
      nxt = rom[strArr[i + 1].toUpperCase()];
    }

    if (n < nxt) {
      result += nxt - n;
      nxtIdx = i + 1;
    } else {
      result += n;
    }
  }
  return result;
}

module.exports = romanToInt;
