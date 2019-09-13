const Solution = require("./index");

const isValid = s => Solution().isValid(s);

it("works with empty string", () => {
  expect(isValid("")).toBeTruthy();
});

test("wrong examples", () => {
  expect(isValid("()()}(())")).toBeFalsy();
});

it("final test", () => {
  expect(isValid("()(){(())")).toBeFalsy();
  expect(isValid("")).toBeTruthy();
  expect(isValid("([{}])()")).toBeTruthy();
});
