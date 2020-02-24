const { func, funcIter } = require("./index");

describe("test for recursive function", () => {
  test("function exists", () => {
    expect(typeof func).toEqual("function");
  });
});

describe("test recursive sols", () => {
  test("solution testing", () => {
    expect(func(3)).toEqual(4);
    expect(func(5)).toEqual(25);
    expect(func(7)).toEqual(142);
  });
});

describe("test iterative sols", () => {
  test("solution testing", () => {
    expect(funcIter(3)).toEqual(4);
    expect(funcIter(5)).toEqual(25);
    expect(funcIter(7)).toEqual(142);
  });
});
