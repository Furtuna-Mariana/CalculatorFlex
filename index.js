const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function allClearDisplay() {
    display.value = '';
}

function deleteDisplay() {
    display.value = display.value.slice(0, -1);
}

function percentDisplay() {
    display.value += '%';
}

function plusDisplay() {
    display.value += '+';
}

function minusDisplay() {
    display.value += '-';
}

function multiplyDisplay() {
    display.value += '*';
}

function divideDisplay() {
    display.value += '/';
}

function evaluateExpresion(expression) {
    try {
        const result = eval(expression);
        return result;
    } catch (error) {
        return 'Error';
    }
} 


function calculate() {
    const expression = display.value;
    const modifiedExpression = expression.replace(/(\d+)%/g, (match, p1) => {
        const value = parseFloat(p1);
        const percentage = value / 100;
        return '*' + percentage;
    });

    const result = evaluateExpresion(modifiedExpression);
    display.value = result; 
}
