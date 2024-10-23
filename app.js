/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let firstNumber = null;
let operator = null;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const value = event.target.innerText;
  
      if (!isNaN(value)) {
        currentInput += value;
        updateDisplay();
      } else if (value === 'C') {
        currentInput = '';
        firstNumber = null;
        operator = null;
        updateDisplay();
      } else if (value === '=') {
        if (firstNumber !== null && operator) {
          currentInput = calculate(firstNumber, operator, parseFloat(currentInput)).toString();
          operator = null; 
          firstNumber = null; 
          updateDisplay();
        }
      } else {
        if (currentInput) {
          firstNumber = parseFloat(currentInput); 
          operator = value; 
          currentInput = ''; 
        }
      }
    });
  });
  
/*-------------------------------- Functions --------------------------------*/
function updateDisplay() {
    const display = document.querySelector('.display');
    display.innerText = currentInput || '0'; 
  }
  function calculate(firstNumber, operator, secondNumber) {
    switch (operator) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case '*':
        return firstNumber * secondNumber;
      case '/':
        return firstNumber / secondNumber;
      default:
        return secondNumber; 
    }
  }
  