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

  //for edge cases
  if (amount == 0) return 1;
  else if (amount < 0 || n == 0) return 0;
  //recursive tree
  //include highest coin val or don't include it
  //if included, return recursed func called with value less than that coin
  //if not included, reduce n by one and recurse
  else return CC(amount, n - 1) + CC(amount - firstDenom(n), n);
}

function countChange(amount) {
  return CC(amount, 2);
}

const r = countChange(5);
console.log(r);

module.exports = countChange;
