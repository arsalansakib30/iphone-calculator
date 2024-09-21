let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
  if (currentInput.includes('.') && number === '.') return;
  currentInput = currentInput.toString() + number.toString();
  updateScreen();
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    compute();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function updateScreen() {
  document.getElementById('screen').innerText = currentInput || previousInput;
}

function clearScreen() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateScreen();
}

function invertSign() {
  currentInput = currentInput ? currentInput * -1 : '';
  updateScreen();
}

function compute() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    case '%':
      result = prev % current;
      break;
    default:
      return;
  }
  currentInput = result;
  operator = '';
  previousInput = '';
  updateScreen();
}
