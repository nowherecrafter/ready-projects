const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const dot = document.getElementById('decimal');
const clearBtns = document.querySelectorAll('.clear-btn');
const equals = document.getElementById('result');
const display = document.getElementById('display');

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  num.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

for (let i = 0; i < clearBtns.length; i++) {
  const cBtn = clearBtns[i];
  cBtn.addEventListener('click', function (e) {
    clearPress(e.target.id);
  });
}

for (let i = 0; i < operators.length; i++) {
  const oper = operators[i];
  oper.addEventListener('click', function (e) {
    operationPress(e.target.textContent);
  });
}

dot.addEventListener('click', dotPress);

function numberPress(num) {  
  if (display.value === '0') display.value = num;
  else display.value += num;

}

function operationPress(oper) {
  if (oper !== '=') {
    const opers = ['+', '-', '*', '/', '.'];

    if (opers.includes(display.value.slice(-1)) && oper !== '-') {
      display.value = display.value.slice(0, -1) + oper;
    }

    else if (oper === '-' && (display.value === '' || opers.includes(display.value.slice(-1)))) {
      display.value += oper;  
    } else {
      display.value += oper; 
    }
  } else {

    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Error"; 
    }
  }
}

function dotPress() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const opers = ['+', '-', '*', '/'];
  const nums = display.value.split(/[\+\-\*\/]/);
   
  if (
    digits.includes(display.value.slice(-1)) &&
    !nums[nums.length - 1].includes('.')
  ) display.value += '.';

  if (opers.includes(display.value.slice(-1))) display.value += '0.';
}

function clearPress(id) {
  if (id === 'c' || display.value.length === 1) {
    display.value = '0';
  } else {
    display.value = display.value.slice(0, -1);
  }
}
