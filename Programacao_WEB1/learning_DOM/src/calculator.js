document.addEventListener("DOMContentLoaded", function() {
    let display = document.getElementById('display');
    let currentOperand = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    window.appendNumber = function(number) {
        if (operator === '') {
            firstOperand += number;
            display.innerText = firstOperand;
        } else {
            secondOperand += number;
            display.innerText += number;
        }
    }

    window.setOperator = function(op) {
        if (firstOperand === '') return;
        operator = op;
        display.innerText += ' ' + op + ' ';
    }

    window.clearDisplay = function() {
        display.innerText = '0';
        currentOperand = '';
        operator = '';
        firstOperand = '';
        secondOperand = '';
    }

    window.calculateResult = function() {
        if (firstOperand === '' || secondOperand === '' || operator === '') return;
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            default:
                return;
        }
        display.innerText = result;
        firstOperand = result.toString();
        secondOperand = '';
        operator = '';
    }
});