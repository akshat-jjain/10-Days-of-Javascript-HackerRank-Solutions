const res = document.getElementById("res");

let operand1 = operator = operand2 = '';

function append(val) {
    if(operator) {
        operand2 += val;
    } else {
        operand1 += val;
    }
    renderResDiv();
}

function clearRes() {
    operand1 = operator = operand2 = '';
    renderResDiv();
}

function equal() {
    operand1 = parseInt(operand1, 2);
    operand2 = parseInt(operand2, 2);
    switch(operator) {
        case '+':
            operand1 += operand2;
            break;
        case '-':
            operand1 -= operand2;
            break;
        case '*':
            operand1 *= operand2;
            break;
        case '/':
            if(operand2)
                operand1 /= operand2;
            break;
        default:
            break;
    }
    operand1 = parseInt(operand1).toString(2);
    operator = operand2 = '';
    renderResDiv();
}

function assignOperator(val) {
    operator = val;
    renderResDiv();
}

function renderResDiv() {
    res.innerHTML = operand1 + operator + operand2;
}
