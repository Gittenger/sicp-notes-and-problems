function func(n) {
  if (n < 3) return n;
  else return func(n - 1) + 2 * func(n - 2) + 3 * func(n - 3);
}

function funcIter(n) {
  const iterate = (a, b, c, count) => {
    if (count < 3) return a;
    return iterate(a + 2 * b + 3 * c, a, b, count - 1);
  };

  if (n < 3) return n;
  else return iterate(2, 1, 0, n);
}

const r = funcIter(3);
console.log(r);

module.exports = { func, funcIter };
