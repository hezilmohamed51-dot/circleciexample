// ===== Application Logic =====
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
}

// ===== Tests =====
describe("Calculator Test Suite", () => {
  const calc = new Calculator();

  test("Addition should work", () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test("Subtraction should work", () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test("Multiplication should work", () => {
    expect(calc.multiply(3, 4)).toBe(12);
  });

  test("Division should work", () => {
    expect(calc.divide(8, 2)).toBe(4);
  });

  test("Division by zero should fail", () => {
    expect(() => calc.divide(5, 0)).toThrow("Division by zero");
  });
});
