function CC(amount, n = 5) {
  function firstDenom(numKinds) {
    switch (numKinds) {
      case 1:
        return 1;
        break;
      case 2:
        return 5;
        break;
      case 3:
        return 10;
        break;
      case 4:
        return 25;
        break;
      case 5:
        return 50;
        break;
      default:
        return "error";
    }
  }

  if (amount == 0) return 1;
  else if (amount < 0 || n == 0) return 0;
  else return CC(amount, n - 1) + CC(amount - firstDenom(n), n);
}

function countChange(amount) {
  return CC(amount, 5);
}

const r = countChange(100);
console.log(r);

module.exports = countChange;
