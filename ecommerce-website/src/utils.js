export function add(a, b) {
  if (typeof a !== "number") {
    throw new Error("Invalid parameter: a should be a number.");
  }
  if (typeof b !== "number") {
    throw new Error("Invalid parameter: b should be a number.");
  }
  return a + b;
}
