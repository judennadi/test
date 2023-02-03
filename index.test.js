const romanToInt = require("./index");

describe("Roman numerals to integers", () => {
  test("Convert basic roman numerals to ints", () => {
    expect(romanToInt("lv")).toBe(55);
    expect(romanToInt("mdii")).toBe(1502);
  });

  test("Verify if 4,9, and 59 are correct", () => {
    expect(romanToInt("iv")).toBe(4);
    expect(romanToInt("ix")).toBe(9);
    expect(romanToInt("lix")).toBe(59);
    expect(romanToInt("cd")).toBe(400);
  });
});
