const combineUsers = require("./index");

test("returns object", () => {
  const result = combineUsers(["a"], ["b"]);
  expect(typeof result).toBe("object");
});

test("merges arrays correctly", () => {
  const result = combineUsers(["a"], ["b"]);
  expect(result.users).toEqual(["a", "b"]);
});

test("has merge_date", () => {
  const result = combineUsers(["a"]);
  expect(result.merge_date).toBeDefined();
});
