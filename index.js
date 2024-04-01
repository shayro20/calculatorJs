class Calculator {
  constructor() {
    this.expression = "";
    this.result = null;
  }

  append(value) {
    this.expression += value;
    this.updateDisplay();
  }

  clear() {
    this.expression = "";
    this.result = null;
    this.updateDisplay();
  }

  calculate() {
    try {
      const currentExpression =
        this.result !== null ? this.result + this.expression : this.expression;
      const result = new Function("return " + currentExpression)();
      this.expression = "";
      this.result = result;
      this.updateDisplay();
    } catch (error) {
      this.expression = "";
      this.result = null;
      this.updateDisplay();
      document.getElementById("display").value = "Error";
    }
  }

  updateDisplay() {
    document.getElementById("display").value =
      this.expression || this.result || "";
  }
}

const calculator = new Calculator();
