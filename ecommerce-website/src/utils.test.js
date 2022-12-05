import { add } from "./utils";

describe("add", () => {
  it("should add two numbers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });

  it("should throw an error if the first argument is not a number", () => {
    expect(() => add("hello", 2)).toThrow(/Invalid parameter/);
  });

  it("should throw an error if the second argument is not a number", () => {
    expect(() => add(1, "world")).toThrow(/Invalid parameter/);
  });
});
