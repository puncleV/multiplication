const _ = require('lodash');

const f = '3141592653589793238462643383279502884197169399375105820974944592';
const s = '2718281828459045235360287471352662497757247093699959574966967627';

const sum = (a, b) => {
  const result = [];
  const reversedA = a.split('').reverse().join('');
  const reversedB = b.split('').reverse().join('');

  let co = 0;
  let longest = reversedA.length > reversedB.length ? reversedA.length : reversedB.length;

  for (let i = 0; i < longest; i++) {
      const sum = parseInt(reversedA[i] || 0, 10) + parseInt(reversedB[i] || 0, 10) + co;

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
  const subProducts = [];

  for (let i = s.length - 1; i >= 0; i--) {
    let co = 0;
    const currentSubProduct = new Array(s.length - 1 - i).fill(0);

    for (let j = f.length - 1; j >= 0; j--) {
      const product = parseInt(s[i], 10) * parseInt(f[j], 10) + co;

      if (product >= 10) {
        currentSubProduct.push(product % 10);
        co = Math.floor(product / 10);
      } else {
        currentSubProduct.push(product);
        co = 0;
      }
    }

    if (co > 0) {
      currentSubProduct.push(co);
    }

    subProducts.push(currentSubProduct.reverse());
  }

  return subProducts.reduce((acc, subProduct) => sum(acc, subProduct.join('')), '0');
}

console.log(multiply(f, s))
