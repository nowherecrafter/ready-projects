let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let dot = document.getElementById('decimal');
let clearBtns = document.querySelectorAll('.clear-btn');
let equals = document.getElementById('result');

let display = document.getElementById('display');

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  num.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

for (let i = 0; i < clearBtns.length; i++) {
  let cBtn = clearBtns[i];
  cBtn.addEventListener('click', function (e) {
    clearPress(e.target.id);
  });
}

for (let i = 0; i < operators.length; i++) {
  let oper = operators[i];
  oper.addEventListener('click', function (e) {
    operationPress(e.target.textContent);
  });
}

dot.addEventListener('click', dotPress);

function numberPress(num) {  
  console.log("number");
  if (display.value === '0') display.value = num;
  else display.value += num;

}

function operationPress(oper) {
  if (oper != '=') {
    const opers = ['+', '-', '*', '/', '.'];
  
    if (opers.includes(display.value.slice(-1))) display.value = display.value.slice(0, -1) + oper;
    else display.value += oper;
  } else {
    display.value = eval(display.value);
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
