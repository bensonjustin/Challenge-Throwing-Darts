function scoreCalculator(arr) {
  // do work here
  let resultArr = [];
  if (arr.length === 0) {
    resultArr.push(-1);
    return resultArr[0];
  }
  let above5 = 0;
  arr.forEach(e => {
    if (e >= 5) {
      above5 = e;
      return above5;
    }
  });
  arr.map(e => {
    if (e > 10) {
      e = 0;
    } else if (e > 4 && e < 11) {
      e = 5;
    } else if (e < 5) {
      e = 10;
    }
    resultArr.push(e);
  });
  let sumArr = (a, c) => a + c;
  let totalArr = resultArr.reduce(sumArr);
  if (above5 === 0) {
    return totalArr + 100;
  }
  return totalArr;
}

module.exports = scoreCalculator;
