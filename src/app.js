const _ = require('lodash');

const f = '3141592653589793238462643383279502884197169399375105820974944592';
const s = '2718281828459045235360287471352662497757247093699959574966967627';

const sum = (a, b) => {
  const result = [];

  let co = 0;
  let longest = a.length > b.length ? a.length : b.length;
  for (let i = longest - 1; i >= 0; i--) {
      const sum = parseInt(a[i] || 0, 10) + parseInt(b[i] || 0, 10) + co;

      if (sum >= 10) {
        result.push(sum - 10);
        co = 1;
      } else {
        result.push(sum)
        co = 0;
      }
  }

  if (co !== 0) {
    result.push(co)
  }

  return result.reverse().join('');
}

const multiply = (f, s) => {
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = f.length - 1; j >= 0; j--) {

    }
  }

  return (f * s).toString();
}

