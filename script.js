let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay('0');
}

function deleteOne() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay(value = currentInput) {
  display.textContent = value || '0';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = 'Error';
  }
  updateDisplay();
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter' || key === '=') {
    e.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteOne();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
