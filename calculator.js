let display = document.getElementById('display');

function clearDisplay() {
  display.textContent = '0';
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1) || '0';
}

function append(value) {
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function calculate() {
  try {
    // Handle percentage calculations
    if (display.textContent.includes('%')) {
      let [number, percent] = display.textContent.split('%');
      display.textContent = parseFloat(number) + (parseFloat(number) * parseFloat(percent) / 100);
    } else {
      display.textContent = eval(display.textContent);
    }
  } catch {
    display.textContent = 'Error';
  }
}